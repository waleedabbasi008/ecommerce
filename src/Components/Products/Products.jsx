import React, { useState } from 'react';
import './Products.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { apiData } from '../../api/data';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../app/Features/CartSlice';
import { useNavigate } from 'react-router-dom';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';


const Products = () => {
  const [data, setdata] = useState(apiData);
  //filtering the products 
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = data.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {id, name, image, price} = data;
  const addToCartHandler = (e) => {
    dispatch(addItemToCart(e));
    navigate('/Cart');
  }
  return (
    <>
      <div className="input-search">
        <input
          type="text"
          placeholder="Search phones by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className='m-auto search-input'
        />
      </div>
      <section id="shop-header">
        <h1 className='text-center header mb-5 mt-3'> Our Products </h1>
      </section>

      <div className='container w-100 '>
        <p> {data.length} products available </p>
        <div className="row">

          {
            filteredProducts.map((e) => {
              return (
                <>
                  <div className="col-lg-3 col-md-12 w-responsive" key={e.id}>
                    <Card className='card text-center'> 
                      <Card.Img className='image' variant="top" src={e.image} />
                      <Card.Body>
                        <Card.Title>{e.name}</Card.Title>
                        <Card.Text>
                          ${e.price}
                        </Card.Text>
                        <Button variant="primary" onClick={() => dispatch(() => addToCartHandler(e))}>Add to cart</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              )
            })
          }

        </div>



      </div>
      <Testimonial />
      <Footer />
    </>
  )
}

export default Products;