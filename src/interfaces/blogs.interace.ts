import { IGatsbyImageData } from "gatsby-plugin-image";
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from "gatsby-source-contentful/rich-text";

export interface BlogsNode{
    node: {
        id: string
    title: string
    blogpic: {
        gatsbyImageData: IGatsbyImageData
    }
    description: RenderRichTextData<ContentfulRichTextGatsbyReference>
    
    updates: string
    }
    
}

interface AllBlogs{
    edges: BlogsNode[]
}


export interface Blogs{
    data: {
        allContentfulBlogs: AllBlogs
    }
}