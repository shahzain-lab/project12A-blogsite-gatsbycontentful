
// Creating pages programmatically

exports.createPages = async ({actions, graphql}) => {
    const {data} =await graphql(`
 query{
   allContentfulBlogs {
    edges {
      node {
        id
        title
        blogpic {
          gatsbyImageData(width: 10, formats: AUTO)
        }
        description {
          raw
        }
        updates(formatString: "DD MM YYYY")
      }
    }
  }
}
`);

  data?.allContentfulBlogs?.edges?.forEach(({node}) => {
    const slug = node.title.split(' ').join('-')
      actions.createPage({
          path: `/blogs/${slug}`,
          component: require.resolve("./src/template/BlogPost.tsx"),
          context: node
      })
  })
}