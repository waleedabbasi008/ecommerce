import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import { Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Contact from './Components/ContactUs/Contact';
import About from './Components/AboutUs/About';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Contact' element={<Contact />} />
        <Route exact path='/Products' element={<Products />} />
        <Route exact path='/Cart' element={<Cart />} />
      </Routes>

    </>
  )
}

export default App;