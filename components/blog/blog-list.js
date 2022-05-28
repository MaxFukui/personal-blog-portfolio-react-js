import {useQuery} from "@apollo/client"
import {useState, useEffect, Fragment} from "react";
import Card from "../ui/card";
import { postList } from "@/lib/api";


 export default function BlogList() {
  const [isLoad, setIsLoad] = useState(false);
  const [posts, setPosts] = useState([]);
  const {data, loading, error} = useQuery(postList, {variables:{pageSize:3, page:1}})
  useEffect(()=>{
    if(error){
      console.log(error)
    }
    if(!loading){
      const id = setInterval(()=>{
        setPosts(data.blogs.data)
        setIsLoad(true)
      },2000)
      return () => clearInterval(id)
    }
  })

  return (
      <Fragment>
          {posts.map((post)=>{
              return <Card imageUrl={post.attributes.cover.data[0].attributes.url} 
              id={post.id}
              title={post.attributes.title}
              headline={post.attributes.headline}
              />
          })}
      </Fragment>
  );
}
