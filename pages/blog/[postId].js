import Menu from "@/components/menu";
import Footer from "@/components/footer";
import { useQuery, gql } from "@apollo/client";
import { useState, useEffect, Fragment } from "react";
import PostContent from "../../components/blog/content";
import { useRouter } from "node_modules/next/router";

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

  useEffect(() => {
    console.log(loading);
    if (!loading) {
      setPost(data.blog.data);
      setUser(data.blog.data.attributes.users_permissions_users);
      setIsLoad(true)
    }
  }, [loading]);
  console.log(post);
  console.log(user);

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
        <div>
          {
            <PostContent
              content={post.attributes.content}
              title={post.attributes.title}
              cover={post.attributes.cover.data}
            />
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default PostPage;
