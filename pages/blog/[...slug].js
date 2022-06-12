import { useRouter } from "next/router";
import BlogList from "@/components/blog/blog-list";
import { QueryDocumentKeys } from "node_modules/graphql/language/ast";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import SearchBar from "@/components/blog/search-bar";
import BlogSearchResult from "@/components/blog/blog-search-result";

function BlogPostPage() {
  const router = useRouter();
  console.log("router path" + router.pathname);
  console.log("router query " + router.query.slug);
  let hasQuery = router.query.slug != null ? router.query.slug : <>Não encontrado 2</>;

  if(hasQuery[0] == "search" && hasQuery.length == 2){
    return (
      <BlogSearchResult searchFor={hasQuery[1]}/>
    )
  }

  if(hasQuery[0] == "pagination"){
    let page = router.query.slug[1] != null ? router.query.slug[1] : null;
    page = parseInt(page)
    console.log( "page: "+page)
    if (!page) return <>Carregando</>
    return (
      <div>
        <Menu />
        <SearchBar />
        <BlogList page={page} />
        <Footer />
      </div>
    );
  } 

  return <>Não encontrado</>

}

export default BlogPostPage;
