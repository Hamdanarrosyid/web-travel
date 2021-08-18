import React from 'react'
import odigoLogo from '../assets/odigo-logo-images.png'

const Footer = () => {
    return (
        <footer className="footer has-background-black-bis" style={{padding:20}}>
            <div className="content" style={{display:'flex',justifyContent:'center'}}>
                <img className={'image '} src={odigoLogo} alt={'odigo-logo'} />
            </div>
        </footer>
    )
}

export default Footer