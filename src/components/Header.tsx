import React from 'react'
import '../styles/header.css';
import Button from '@mui/material/Button';


const Header = () => {
    return (
        <div className={'header'}>
            <div className={'header--top'}>
                <div className={'header--content'}>
                    <h1>The gatsby static blog site</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum?</p>
                    <div className={'header--content_btns'}>
                        <Button variant="contained">see blogs</Button>
                        <Button variant="contained">sign up</Button>
                    </div>
                </div>
            </div>
            <div className={'header--bottom'}>
                <h3>This project is bootstrapped with GatsbyJS.The content is hosted on Contentful. The build is re-trigger on either a push event on the master branch or a repository dispatch event from Contentful Webhook.</h3>
            </div>
        </div>
    )
}

export default Header
