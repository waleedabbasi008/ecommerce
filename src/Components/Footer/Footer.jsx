import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
const Footer = () => {
    return (
        <>
            <footer>
                <a href="" className='footer__logo text-center fw-bolder' > Alamy Mobiles </a>
                <ul className="permalinks">
                    <li className="Navitem"> <a href='/' > Home  </a> </li>
                    <li className="Navitem"> <a href='/About' > About  </a> </li>
                    <li className="Navitem"> <a href='/Products' > Products  </a> </li>
                    <li className="Navitem"> <NavLink to='/Contact' > Contact  </NavLink> </li>
                </ul>
                <div className="footer__social">
                    <a target='blank' href="https://www.facebook.com/muhammadwaleed.abbasi.35">  <BsFacebook /> </a>
                    <a href="https://www.instagram.com/waleedabbasi008/">  <BsInstagram /> </a>
                    <a href="https://twitter.com">  <BsTwitter /> </a>
                </div>
                <div className="footer__copyright">
                    <small> &copy; Waleed Abbasi. All rights reserved </small>
                </div>
            </footer>
        </>
    )
}

export default Footer;