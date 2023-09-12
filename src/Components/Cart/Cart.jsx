import React from 'react'
import './Cart.scss';
import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, clearCart, decreaseCartQuantity, getTotal, removeItemFromCart } from '../../app/Features/CartSlice';
import './Cart.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Cart = () => {
  // const subtotal = useSelector(selectCartSubtotal);      //useselector fot finding the subtotoal

  const items = useSelector(state => state.cart.cart);
  console.log(items);
  console.log(items.cartQuantity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [items])
  // ************************ Remove from cart Method get **********************************
  const handleRemove = (cartItem) => {
    dispatch(removeItemFromCart(cartItem));
  }
  // ************************ Decrease  cart Method get **********************************
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCartQuantity(cartItem));
  }
  // ************************ Increase cart Method get **********************************
  const handleIncreaseCart = (cartItem) => {
    dispatch(addItemToCart(cartItem));
  }
  // ************************ Clear cart Method get **********************************
  const handleclear = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <div className="container cart-container">
        <p className='text-center mt-5'> You have ({items.length}) products in your cart </p>
        <div className="row card-head">
          {
            items.map((e) => {
              const { id, name, price, image } = e;
              return (
                <>
                  <div className="cart-added row w-responsive mt-5" key={id}>
                    <div className="image col-lg-6">
                      <img src={image} alt="" />
                    </div>
                    <div className="text col-lg-6">
                      <h5 className=' fs-2'> {name} </h5>
                      <small> Price:  ${price} </small>
                      <h5> Quantity </h5>
                      {/* <div className="product-quantity mt-4 pl-5"> */}
                      <button className="btn btn-success" onClick={() => handleIncreaseCart(e)}> <AiOutlinePlus className='fs-5' />  </button>
                      <span> ({e.cartQuantity}) </span>
                      <button className="btn btn-danger" onClick={() => handleDecreaseCart(e)}> <AiOutlineMinus className='fs-5' />  </button>
                    </div>
                    <div className="total">
                      <button className='btn btn-outline-danger mt-3 remove-btn border-0' onClick={() => handleRemove(e)}>
                        <HiOutlineTrash className="fs-4" />
                        Remove
                      </button>
                      <h5> Total Price </h5>
                      <input type="text" className=' input-group select-input m-auto' value={price * e.cartQuantity}  />
                    </div>
                  </div>
                  {/* </div> */}

                  {/* </div> */}
                </>
              )
            })
          }
          {/* *********************************** calculating  the total Cart ********************* */}
          <div className="cart-bottom  ">
            <div className="cleared-cart text-center">
              <button className="btn btn-outline-danger" onClick={() => handleclear()}> Clear Cart </button> <br /> <br />
              <NavLink to="/Products" className='continue-shopping text-center w-100'> ☜☜ continue shopping </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;