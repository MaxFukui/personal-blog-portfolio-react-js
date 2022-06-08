import { useRouter } from "next/router";
import BlogList from "@/components/blog/blog-list";
import { QueryDocumentKeys } from "node_modules/graphql/language/ast";
import Menu from "@/components/menu";
import Footer from "@/components/footer";

function BlogPostPage() {
  const router = useRouter();
  console.log("router path" + router.pathname);
  console.log("router query " + router.query.slug);
  let hasQuery = router.query.slug != null && router.query.slug[0] == "pagination"? router.query.slug : null;

  if(hasQuery){
    let page = router.query.slug[1] != null ? router.query.slug[1] : null;
    page = parseInt(page)
    if (!page) return <>Carregando</>
    return (
      <div>
        <Menu />
        <BlogList page={page} />
        <Footer />
      </div>
    );
  } 

  return <>Não encontrado</>

}

export default BlogPostPage;
