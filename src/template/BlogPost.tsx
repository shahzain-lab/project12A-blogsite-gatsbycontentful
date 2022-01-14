import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React, { useContext } from 'react';
import '../styles/blog-page.css'
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderShortText } from '../utils/utils';
import Auth from '../auth/Auth';
import { UserContext } from '../context/userContext';

const BlogPost = ({ pageContext }) => {
    const { userState } = useContext(UserContext)
    console.log(userState)
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
                {userState ?
                    renderRichText(pageContext.description) :
                    <p>{renderShortText(pageContext.description.raw)}....</p>
                }

            </p>
            {!userState && <Auth />}
        </div>
    )
}

export default BlogPost
