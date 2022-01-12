import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { BlogsNode } from '../interfaces/blogs.interace'
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Link } from 'gatsby';

const BlogItem: React.FC<BlogsNode> = ({ node }) => {

    const renderShortText = () => {
        const lines = node.description.raw.replace('{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"', ' ');
        const shortText = lines.split(' ').slice(0, 40).join(' ');
        console.log(shortText);
        return shortText
    }

    return (
        <Link to={`/blogs/${node.id}`}><Card sx={{ minWidth: 345, margin: '2rem' }}>
            <CardActionArea>
                <GatsbyImage
                    alt={node.title}
                    image={node.blogpic.gatsbyImageData}
                    className={'blog--image'}
                />
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography gutterBottom variant="subtitle2" component="div">
                            {node.title}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="div">
                            {node.updates}
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ marginTop: '1.5rem' }} color="text.secondary">
                        {renderShortText()}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
    )
}

export default BlogItem
