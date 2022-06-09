import { useQuery } from "@apollo/client";
import { useState, useEffect, Fragment } from "react";
import Card from "../ui/card";
import { postList } from "@/lib/api";
import Pagination from "./pagination";

export default function BlogList(props) {
  const [isLoad, setIsLoad] = useState(false);
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState([]);
  const { data, loading, error } = useQuery(postList, {
    variables: { pageSize: 5, page: props.page },
  });


  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (!loading) {
      const id = setInterval(() => {
        setPosts(data.blogs.data);
        setMeta(data.blogs.meta)
        setIsLoad(true);
      }, 2000);
      return () => clearInterval(id);
    }
  });

  let pagination = (<span></span>)
  if(isLoad){
     pagination = <Pagination pageCount={meta.pagination.pageCount}
      page={meta.pagination.page}
     />
  }   

  return (
    <Fragment>
      <div className="w-10/12 mx-auto">
        {posts.map((post) => {
          return (
            <Card
              coverUrl={post.attributes.cover.data[0].attributes.url}
              id={post.id}
              key={post.id}
              title={post.attributes.title}
              headline={post.attributes.headline}
            />
          );
        })}
      </div>
      <div>
        {pagination}
      </div>
    </Fragment>
  );
}
