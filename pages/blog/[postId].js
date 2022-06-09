import Menu from "@/components/menu";
import Footer from "@/components/footer";
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect, Fragment } from "react";
import PostContent from "../../components/blog/content";
import { useRouter } from "node_modules/next/router";
import PostCoverHeadline from "@/components/blog/blog-headline-cover";
import AuthorPost from "@/components/blog/author-blog";

const postQuery = gql`
  query post($id: ID!) {
    blog(id: $id) {
      data {
        id
        attributes {
          title
          content
          cover {
            data {
              attributes {
                url
              }
            }
          }
          date
          updatedAt
          createdAt
          headline
          users_permissions_users {
            data {
              attributes {
                name
                portrait {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                about
              }
              id
            }
          }
        }
      }
    }
  }
`;

function PostPage(props) {
  const router = useRouter();
  console.log("pathname: "+router.pathname)
  console.log(router.query.postId)
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const id = `${ router.query.postId }`;
  const { data, error, loading } = useQuery(postQuery, {
    variables: { id: id },
  });

  function handleImage (oldUrl){
    const newImageUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL+oldUrl
    return newImageUrl
  }

  useEffect(() => {
    console.log(loading);
    if (!loading) {
      setPost(data.blog.data);
      setUser(data.blog.data.attributes.users_permissions_users);
      setIsLoad(true)
    }
  }, [loading]);

  if (!isLoad) {
    return (
      <>
        <h2>Carregando</h2>
      </>
    );
  } else {
    return (
      <div>
        <Menu />
        <div className="w-2/3 mx-auto py-4">
          <PostCoverHeadline cover={ post.attributes.cover.data[0].attributes.url} headline={post.attributes.headline} 
           title={post.attributes.title}/>
          <PostContent
            content={post.attributes.content} />
          <AuthorPost src={user.data[0].attributes.portrait.data.attributes.url}
            name={user.data[0].attributes.name} 
            about={user.data[0].attributes.about} 
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default PostPage;
