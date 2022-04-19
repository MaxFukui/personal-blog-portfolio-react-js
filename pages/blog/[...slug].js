import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();
  console.log("router path" + router.pathname);
  console.log("router query " + router.query);

  return (
    <div>
      <h1>The blog posts</h1>
    </div>
  );
}

export default BlogPostPage;
