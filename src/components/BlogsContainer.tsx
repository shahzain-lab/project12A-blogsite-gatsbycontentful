import React from 'react'
import { Blogs, BlogsNode } from '../interfaces/blogs.interace'
import '../styles/blogs.css'
import BlogItem from './BlogItem'


const BlogsContainer: React.FC<Blogs> = ({ data }) => {
    return (
        <div className={'blogsContainer'}>
            <h2>See all popular blogs posts</h2>
            <div className={'blogsContainer--blogs'}>
                {data.allContentfulBlogs.edges.map(({ node }: BlogsNode) => (
                    <BlogItem node={node} />
                ))}
            </div>
        </div>
    )
}

export default BlogsContainer
