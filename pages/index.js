import Menu from "../components/menu";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { getPostsHome, getProjectsHome } from "../lib/api";

function HomePage() {
  const [isLoad, setIsLoad] = useState(false);
  const [posts, setPosts] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const id = setInterval(() => {
      getPostsHome(4, 1)
        .then((res) => {
          setPosts(res.blogs.data);
          if (projects) {
            setIsLoad(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoad(false);
        });
    }, 2000);
    return () => clearInterval(id);
  }, [isLoad]);

  useEffect(() => {
    const id = setInterval(() => {
      getProjectsHome(2, 1)
        .then((res) => {
          setProjects(res.projects.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
    return () => clearInterval(id);
  }, [isLoad]);

  return (
    <div>
      <Menu />
      <h1 className="text-3xl font-bold underline">Hello World </h1>
      <h2>Blog</h2>
      <div>
        {posts.map((post) => {
          if (isLoad) {
            return <h2 key={post.id}>{post.attributes.title}</h2>;
          }
        })}
      </div>
      <h2>Projetos</h2>
      <div>
        {projects.map((project) => {
          if (isLoad) {
            return <h2 key={project.id}>{project.attributes.title}</h2>;
          }
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
