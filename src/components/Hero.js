import { Link } from 'gatsby'
import React from 'react'
import odigoLogo from '../assets/odigo-logo-images.png'

const Hero = () => {
    return (
        <section className={'banner-image '}>
            <div className={'hero is-fullheight container is-max-desktop'}>
                <div className={'hero-head'}>
                    <nav className={'navbar is-desktop px-3 py-4'}>
                        <div className={'navbar-brand'}>
                            <Link to={'/'} className={'navbar-item'}>
                                <img className={'image '} src={odigoLogo} alt={'odigo-logo'} />
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className={'hero-body px-3'}>
                    <div className={'column is-three-fifths p-0 relative'}>
                        <h1 className={'title is-2'}>Discover Amazing Places in Japan</h1>
                        <p className={'subtitle is-5'}>Jump of balcony, onto stranger's head. Chase ball of strinh hide when guests come over. Being georgeous with belly side up i could pee on this if i had the energy but under the bed, for attack child, open the door.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

