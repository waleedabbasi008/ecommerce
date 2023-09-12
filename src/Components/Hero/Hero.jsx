import React from 'react'
import './Hero.scss';
import AboutDetail from '../AboutUs/AboutDetail';
import HomeProducts from './HomeProducts';
import Testimonial from '../Testimonial/Testimonial';
import ResponsiveHero from './ResponsiveHero';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactUs/ContactForm';
const Hero = () => {

  return (
    <>
      <ResponsiveHero />
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://c8.alamy.com/comp/CRFHYW/mobile-phone-display-in-mobile-phone-shop-surrey-england-CRFHYW.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block mt-5">
              <h5 className='  fw-bolder  hero-heading'>Welcome to Alamy Mobile shop</h5>
              <p className=' hero-para'>Are you ready to embark on a thrilling journey into the world of cutting-edge technology and stylish mobile devices? Look no further – you've just landed on the hero page of the most exciting mobile shop eCommerce website on the internet!</p>
              <div className="buttons">
                <NavLink to='/about' className='btn btn-outline-primary'>  About us  </NavLink>
                <NavLink to='/Products' className='btn btn-outline-primary'>  Shop with us  </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://c8.alamy.com/comp/CRFHYW/mobile-phone-display-in-mobile-phone-shop-surrey-england-CRFHYW.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='  fw-bolder  hero-heading'>Stay Connected, Stay Stylish</h5>
              <p className='hero-para'>Your mobile device is an essential part of your daily life, and at Mobile Master, we understand its significance. Our mission is to provide you with not just a phone but a companion that enhances your lifestyle, keeps you connected with loved ones, and empowers you to achieve more.</p>
              <div className="buttons">
                <NavLink to='/about' className='btn btn-outline-primary'>  About us  </NavLink>
                <NavLink to='/Products' className='btn btn-outline-primary'>  Shop with us  </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://c8.alamy.com/comp/CRFHW4/customer-looking-at-mobile-phones-in-vodaphone-shop-surrey-england-CRFHW4.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className='  fw-bolder  hero-heading'>💯 Customer Satisfaction</h5>
              <p className='hero-para'>We're not just here to sell phones; we're here to make your mobile shopping experience exceptional. Our customer support team is ready to assist you with any inquiries or concerns you may have.</p>
              <div className="buttons">
                <NavLink to='/about' className='btn btn-outline-primary'>  About us  </NavLink>
                <NavLink to='/Products' className='btn btn-outline-primary'>  Shop with us  </NavLink>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <AboutDetail />
      <HomeProducts />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Hero;