import React from 'react'
import icon1 from '../assets/benefit-icon-01.png'
import icon2 from '../assets/benefit-icon-02.png'
import icon3 from '../assets/benefit-icon-03.png'

const Banner = () => {
    return (
        <section className={'box mb-6'}>
            <div className={'hero is-small container is-max-desktop'}>
                <div className="hero-body">
                    <div className="">
                        <h2 className="title is-4">
                            Benefits of Odigo
                        </h2>
                        <div className={'columns'}>
                            <div className={'column'}>
                                <img className={'image is-48x48 my-3'} src={icon1} alt={'icon1'}/>
                                <p className={'py-3'}>Welcome to Odigo</p>
                                <p>Jump of balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
                            </div>
                            <div className={'column'}>
                                <img className={'image is-48x48 my-3'} src={icon2} alt={'icon2'}/>
                                <p className={'py-3'}>Your Personal Japan Guide</p>
                                <p>Jump of balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
                            </div>
                            <div className={'column'}>
                                <img className={'image is-48x48 my-3'} src={icon3} alt={'icon3'}/>
                                <p className={'py-3'}>Promoting Local Businesses</p>
                                <p>Jump of balcony, onto stranger's head. Chase ball of string hide when guests come over.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner