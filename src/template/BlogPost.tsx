import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';
import '../styles/blog-page.css'
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderShortText } from '../utils/utils';
import { Button } from '@mui/material';


const BlogPost = ({ pageContext }) => {
    return (
        <div className={'blog--page'}>
            <div>
                <h1 className={'blog--page_h1'}>{pageContext?.title}</h1>
                <p className={'blog--page_date'}>Updated At:{pageContext.updates}</p>
            </div>
            <GatsbyImage
                alt={pageContext.title}
                image={pageContext.blogpic.gatsbyImageData}
                className={'blog--page_img'}
            />
            <p className={'blog--page_p'}>
                {renderShortText(pageContext.description.raw)}
                <span className={'blog--page_shortText'}>....</span>
            </p>
            <Button variant="contained" style={{ marginTop: '1rem' }}>Sign in to learn more</Button>
        </div>
    )
}

export default BlogPost
