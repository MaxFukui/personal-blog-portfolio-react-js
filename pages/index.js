import Menu from "../components/menu";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { postList } from "../lib/api";
import { useQuery } from "@apollo/client";
import IndexPageCard from "@/components/indexPage/indexPageCard";
import IndexReadMore from "@/components/indexPage/indexReadMore";
import Hero from "@/components/indexPage/Hero";
import IndexLastPosts from "@/components/indexPage/indexLastPosts";

function HomePage() {
  const [isLoad, setIsLoad]=useState(false);
  const [posts, setPosts]=useState([]);
  const [projects, setProjects]=useState([]);

  const { data, loading, error } = useQuery(postList, {
    variables: { pageSize: 6, page: 1 },
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (!loading) {
      const id = setInterval(() => {
        setPosts(data.blogs.data);
        setIsLoad(true);
        console.log(posts)
      }, 2000);
      return () => clearInterval(id);
    }
  });

  return <div>
    <Menu/>
      <Hero />
      <IndexLastPosts/>
      <IndexPageCard>
        <h2 className="uppercase font-bold text-2xl py-2 pl-1">Read more</h2>
        <div className="flex flex-row flex-wrap justify-center">
          {
            posts.map((post)=>{
              return <IndexReadMore 
              title={post.attributes.title}
              headline={post.attributes.headline}
              coverUrl={post.attributes.cover.data[0].attributes.url}
              />
            })
          }
        </div>
      </IndexPageCard>
    <Footer/>
  </div>;
}

export default HomePage;
