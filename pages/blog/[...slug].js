import { useRouter } from "next/router";
import BlogList from "@/components/blog/blog-list";
import { QueryDocumentKeys } from "node_modules/graphql/language/ast";

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
        <h1>The blog posts</h1>
        <BlogList page={page}/>
      </div>
    );
  } 

  return <>Não encontrado</>

}

export default BlogPostPage;
