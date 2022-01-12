import React from 'react'

const BlogPost = ({ node }) => {
    return (
        <div>
            <h1>{node?.title}</h1>
        </div>
    )
}

export default BlogPost
