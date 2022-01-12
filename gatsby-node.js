
// Creating pages programmatically

exports.createPages = async ({actions, graphql}) => {
    const {data} =await graphql(`
 query{
   allContentfulBlogs {
    edges {
      node {
        id
      }
    }
  }
}
`);

  data?.allContentfulBlogs?.edges?.forEach(({node}) => {
      const slug = node.id;
      actions.createPage({
          path: `/blogs/${slug}`,
          component: require.resolve("./src/template/BlogPost.js"),
          context: node
      })
  })
}