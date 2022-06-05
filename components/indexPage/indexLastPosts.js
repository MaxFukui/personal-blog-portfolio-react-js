import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { lastPost } from "@/lib/api";
import IndexPageCard from "./indexPageCard";

export default function IndexLastPosts() {
  const [isLoad, setIsLoad] = useState(false);
  const [posts, setPosts] = useState([]);

  const { data, loading, error } = useQuery(lastPost);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (!loading) {
      const id = setInterval(() => {
        setPosts(data.blogs.data);
        setIsLoad(true);
        console.log(posts);
      }, 2000);
      return () => clearInterval(id);
    }
  });

  return (
    <IndexPageCard>
       <h2 className="uppercase font-bold text-2xl py-2 pl-1">Most Recents</h2>
      <div className="grid grid-cols-2">
        {posts.map((post) => {
          if (isLoad) {
            return (
              <Card
                key={post.id}
                title={post.attributes.title}
                headline={post.attributes.headline}
                content={post.attributes.content}
                coverUrl={post.attributes.cover.data[0].attributes.url}
              />
            );
          } else {
            return <h2>Carregando</h2>;
          }
        })}
      </div>
    </IndexPageCard>
  );
}

function Card (props){
    const backgroundStyle = {
      backgroundImage: "url(" + props.coverUrl + ")",
    }

    return (
      <div className="bg-white drop-shadow-xl m-2 p-2 grow-0">
        <h2 className="text-xl font-bold w-full mb-2">{props.title}</h2>
        <div className="flex">
             <div className="flex-col">
                <p className="text-justify w-64 mx-2">{props.headline}</p>
                <p className="text-justify text-clip overflow-hidden"> more..</p>
            </div>
          <div className="bg-cover h-60 w-64 mt-2 mb-2" style={backgroundStyle} />
        </div>
      </div>
    );
}
