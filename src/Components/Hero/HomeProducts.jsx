import React from 'react';
import '../Products/Products.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../app/Features/CartSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import './HomeProduct.scss';
const data = [
  {
    id: 1,
    name: "oppo",
    price: 50000,
    image: "images/oppo-f19.jpg",
    cartQuantity: 0,
  },
  {
    id: 2,
    name: "vivo",
    price: 60000,
    image: "images/vivo.jpg",
    cartQuantity: 0,
  },
  {
    id: 3,
    name: "redme",
    price: 55000,
    image: "images/redmi.jpg",
    cartQuantity: 0,
  },
  {
    id: 4,
    name: "samsung",
    price: 70000,
    image: "images/samsung.jpg",
    cartQuantity: 0,
  },
  {
    id: 5,
    name: "realme",
    price: 70000,
    image: "images/realme.jpg",
    cartQuantity: 0,
  },
  {
    id: 6,
    name: "one plus",
    price: 150000,
    image: "images/one.jpg"
  },
  {
    id: 7,
    name: "nokia",
    price: 40000,
    image: "images/nokia.jpg"
  },
  {
    id: 8,
    name: "iphone",
    price: 350000,
    image: "images/iphone.jpg"
  },
]

const HomeProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {id, name, image, price} = data;
  const addToCartHandler = (e) => {
    dispatch(addItemToCart(e));
    navigate('/Cart');
  }
  return (
    <>
      <div className="more-about-btn  text-center">
        <a className="btn btn-outline-primary  text-center m-3 more-aboutus-btn" href='/About'> More About Us      </a>
      </div>
      <h1 className=' body-header text-center mt-1 fw-bold mb-5' > Our Products </h1>
      <div className='container w-100 '>
        <div className="row">

          {
            data.map((e) => {
              return (
                <>
                  <div className="col-lg-3 cold-md-12" key={e.id}>
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
        <a href='/Products#shop-header' >
          <button className="btn btn-primary"> Explore More products </button>
        </a>
      </div>
    </>
  )
}

export default HomeProducts;