import React from 'react';
import './About.scss';
import AboutDetail from './AboutDetail';
import myImg from '../../assets/me.jpg.jpg';
import myImg2 from '../../assets/me2.jpg';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
const About = () => {
    return (
        <>
            <section id="about-hero">
                <div className="about-hero-container">
                    <h1 className='about-head'> About Us </h1>
                </div>
            </section>
            {/* ************************** About details setion ******************************* */}
            <section className="about-information">
                <p className=' mt-3 fs-4'> Welcome to Alamy mobile shop, your premier destination for all things mobile! We are passionate about delivering the latest and greatest in mobile technology to our customers. With years of experience in the industry, we have become a trusted source for top-quality smartphones, accessories, and exceptional customer service. </p>
                <div className="container about-info-container mt-5">
                    <div className="row">
                        <div className="col-lg-6">

                            <p className='about-text'>
                                At Alamy mobile shop, our mission is simple: to provide our customers with a seamless and enjoyable mobile shopping experience. We strive to offer the most innovative and cutting-edge mobile devices, from the leading brands to the newest players in the market.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src={myImg} alt="" className=' card-img about-img' />

                        </div>
                        <div className="col-lg-6">
                            <img src={myImg2} alt="" className=' card-img about-img mt-5' />
                        </div>
                        <div className="col-lg-6">
                            <p className='about-text'>
                                <p className='about-text mt-5'>
                                    At Alamy mobile shop, our mission is simple: to provide our customers with a seamless and enjoyable mobile shopping experience. We strive to offer the most innovative and cutting-edge mobile devices, from the leading brands to the newest players in the market.
                                </p>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <AboutDetail />
            <div className="contactusbtn w-100 mt-5  text-center">
                <NavLink to='/Contact' className=' btn btn-outline-primary  m-auto w-25 h-50'> Contact Us </NavLink>
            </div>
            <Footer />
        </>
    )
}

export default About;