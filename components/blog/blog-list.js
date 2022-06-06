import { useQuery } from "@apollo/client";
import { useState, useEffect, Fragment } from "react";
import Card from "../ui/card";
import { postList } from "@/lib/api";

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

  let pagination = (<></>)
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

function Pagination(props) {
  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item disabled">
            <a
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              1
            </a>
          </li>
          <li className="page-item active">
            <a
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
              href="#"
            >
              2 <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              3
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}