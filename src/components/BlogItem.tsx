import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { BlogsNode } from '../interfaces/blogs.interace'
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { renderShortText } from '../utils/utils';

const BlogItem: React.FC<BlogsNode> = ({ node }) => {


    const blogLink = node.title.split(' ').join('-')

    return (
        <Link to={`/blogs/${blogLink}`}><Card sx={{ minWidth: 345, margin: '2rem' }}>
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
                        {renderShortText(node.description.raw)}.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
    )
}

export default BlogItem
