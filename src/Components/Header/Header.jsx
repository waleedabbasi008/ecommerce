import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.scss';
import logo from '../../assets/images.png';
import { useSelector } from 'react-redux';
const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };
    const cartItems = useSelector(state => state.cart.cart);
    console.log(cartItems);
    return (
        <>
            <Navbar expand="lg" className=" navbar ">
                <Container>
                    <Navbar.Brand href="/" className='text-light'>
                        <img className='logo' style={{ width: "12vh", height: "8vh" }} src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav toggle-btn " />
                    <Navbar.Collapse id="basic-navbar-nav toggle-btn">
                        <Nav className="me-auto nav-links">
                            <NavLink onClick={toggleActive} className={`nav-link text-light ${isActive ? 'active' : ''}`} to='/' > Home </NavLink>
                            <NavLink onClick={toggleActive} className={`nav-link text-light ${isActive ? 'active' : ''}`} to='/About' > About </NavLink>
                            <NavLink onClick={toggleActive} className={`nav-link text-light ${isActive ? 'active' : ''}`} to='/Products' > Shop </NavLink>
                            <NavLink onClick={toggleActive} className={`nav-link text-light ${isActive ? 'active' : ''}`} to='/Contact' > Contact </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <NavLink className=' text-decoration-none text-dark  cart-logo d-flex' to='/Cart' > <AiOutlineShoppingCart className='cart-logo' /> ({cartItems.length})
                    </NavLink>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;