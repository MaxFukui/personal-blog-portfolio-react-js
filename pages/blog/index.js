import BlogList from "@/components/blog/blog-list";
import BlogSearch from "@/components/blog/blog-search";
import Footer from "@/components/footer";
import Menu from "@/components/menu";

function Blog(){
  return (
    <div>
      <Menu />
      <BlogList page={1}/>
      <Footer />
    </div>
  )
}

export default Blog; 
