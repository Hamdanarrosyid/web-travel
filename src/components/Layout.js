import React from 'react'

const Layout = ({children}) => {
    return(
        <div className={'container has-background-ligh banner-position p-3'}>
            {children}
        </div>
    )
}

export default Layout