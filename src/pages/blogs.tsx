import React from 'react'
import BlogsContainer from '../components/BlogsContainer';
import Layout from '../layout/Layout';
import { graphql } from 'gatsby';

const blogs = ({ data }) => {
  return (
    <Layout>
      <BlogsContainer data={data} />
    </Layout>
  )
}

export default blogs

export const query = graphql`
query MyQuery {
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

`