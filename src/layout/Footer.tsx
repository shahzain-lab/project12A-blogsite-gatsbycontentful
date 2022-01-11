import React from 'react';
import '../styles/footer.css';

function Footer() {
    const date = new Date().getFullYear();

    return (
        <div className={'footer--container'}>
            <div className={'footer--v1'}>
                <h2 className={'footer--v1_h2'}>Gatsby Blogs</h2>
                <p className={'footer--v1_p'}>Copyrights {date}&copy;</p>
            </div>
            <div className={'footer--links'}>
                <a href="https://github.com/shahzain-lab" target="_blank" rel="noreferrer">@Github</a>
                <a href="https://www.linkedin.com/in/syed-zainulabideen009900" target="_blank" rel="noreferrer">@LinkedIn</a>
            </div>
        </div>
    )
}

export default Footer