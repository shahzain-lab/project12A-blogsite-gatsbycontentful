import React from 'react'
import Appbar from './Appbar'
import Footer from './Footer'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Appbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
