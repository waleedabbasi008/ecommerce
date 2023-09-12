import React from 'react';
import './Hero.scss';
import { NavLink } from 'react-router-dom';
const ResponsiveHero = () => {
  return (
    <>
      <div className="responsive-hero">
        <div className="responsive-hero-text">
          <h1> Welcome to Alamy Mobile shop </h1>
          <p className=' hero-para'>Are you ready to embark on a thrilling journey into the world of cutting-edge technology and stylish mobile devices? Look no further – you've just landed on the hero page of the most exciting mobile shop eCommerce website on the internet!</p>
          <div className="buttons">
            <NavLink to='/about' className='btn btn-primary'>  About us  </NavLink>
            <NavLink to='/Products' className='btn btn-primary'>  Shop with us  </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResponsiveHero;