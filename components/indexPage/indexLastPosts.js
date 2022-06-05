import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { lastPost } from "@/lib/api";
import IndexPageCard from "./indexPageCard";
import { useRouter } from "node_modules/next/router";

export default function IndexLastPosts() {
  const [isLoad, setIsLoad] = useState(false);
  const [posts, setPosts] = useState([]);
  const router = useRouter();

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
      <div className="grid lg:grid-cols-2
      sm:grid-cols-1
      ">
        {posts.map((post) => {
          if (isLoad && posts != []) {
            return (
              <Card
                key={post.id}
                id={post.id}
                title={post.attributes.title}
                headline={post.attributes.headline}
                content={post.attributes.content}
                coverUrl={post.attributes.cover.data[0].attributes.url}
              />
            )
          } else {
            return <h2>Carregando</h2>;
          }
        })}
      </div>
    </IndexPageCard>
  );
}

function Card(props) {
  const router = useRouter()
  const backgroundStyle = {
    backgroundImage: "url(" + props.coverUrl + ")",
  };

  function handleClick(e) {
    e.preventDefault();
    const fullPath = "/blog/" + props.id;
    router.push(fullPath);
  }
  return (
    <div className="bg-white drop-shadow-xl m-2 p-2 grow-0 cursor-pointer
    transition duration-150 ease-in-out hover:ease-in 
    hover:scale-[1.05] bg-cover
    " onClick={handleClick}>
      <h2 className="text-xl font-bold w-full mb-2">{props.title}</h2>
      <div className="flex">
        <div className="flex-col w-3/5">
          <p className="text-justify mx-2">{props.headline}</p>
        </div>
        <div className="bg-cover h-60 w-2/5 mt-2 mb-2" style={backgroundStyle} />
      </div>
    </div>
  );
}
