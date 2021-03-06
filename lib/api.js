import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/graphql",
  cache: new InMemoryCache(),
});

export async function getPostsHome(arg1, arg2) {
  const { data } = await client.query({
    query: gql`
      query getBlogs {
        blogs(pagination: { pageSize: ${arg1}, page: ${arg2} }) {
          data {
            id
            attributes {
              title
              createdAt
              headline
              cover {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  return data;
}

export async function getPostsBlog(pageSize, page) {
  const { data } = await useQuery(
    {
      query: gql`
        query getBlogs($pageSize: Int, $page: Int) {
          blogs(pagination: { page: $page, pageSize: $pageSize }) {
            data {
              attributes {
                title
                headline
                cover {
                  data {
                    attributes {
                      previewUrl
                    }
                  }
                }
              }
            }
          }
        }
      `,
    },
    { variables: { pageSize: pageSize, page: page } }
  );
  return data;
}

export async function testGetPostsHome(arg1, arg2, arg3) {
  const { data } = await client.query({
    query: gql`
      query getBlogs{
        blogs(pagination: {
              pageSize: ${arg1}
              page: ${arg2}
        }){
          data{
            id
            attributes{
              ${arg3}
            }
          }
        }
      }
    `,
  });
  return data;
}

export const postList = gql`
query getBlogs($pageSize: Int, $page: Int){
  blogs(pagination: {
        pageSize: $pageSize
        page: $page
  },
    sort:["createdAt:desc"]
  ){
    meta{
      pagination{
        page
        pageSize
        pageCount
        total
      }
    }
    data{
      id
      attributes{
        title
        createdAt
        headline
        cover{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`;

export const lastPost = gql`
query getBlogs{
  blogs(pagination: {
        pageSize:4
        page:1
  },
    sort:["createdAt:desc"]
  ){
    meta{
      pagination{
        page
      }
    }
    data{
      id
      attributes{
        title
        content
        createdAt
        headline
        cover{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`;

export async function getProjectsHome(arg1, arg2) {
  const { data } = await client.query({
    query: gql`
      query getProjects {
        projects (pagination:{
          pageSize: ${arg1}
          page: ${arg2}
        }){
          data {
            id
            attributes {
              title
            }
          }
        }
      }
    `,
  });

  return data;
}


export const allBlogIds = gql`
  query getSequenceBlogs {
    blogs(sort: ["publishedAt:desc"], pagination: { limit: 1000 }) {
      meta {
        pagination {
          page
          pageCount
          total
        }
      }
      data {
        id
      }
    }
  }
`;

export const searchResults = gql`
query getBlogs($pageSize: Int, $page: Int, $search: String) {
  blogs(
    pagination: { pageSize: $pageSize, page: $page }
    sort: ["createdAt:desc"]
    filters: {
      or: [
        { title: { containsi: $search } }
        { headline: { containsi: $search } }
        { content: { containsi: $search } }
      ]
    }
  ) {
    meta {
      pagination {
        page
        pageSize
        pageCount
        total
      }
    }
    data {
      id
      attributes {
        title
        createdAt
        headline
        cover {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}

`