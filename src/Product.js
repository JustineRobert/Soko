import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className='product'>
    <div className='product__info'>
    <p>The Lean Startup</p>
    <p className='product__price'>
    <small>$</small>
    <strong>20.99</strong>
    </p>
    <div product__rating>
    <p>⭐</p>
    </div>
    </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="" />
    </div>
  )
}

export default Product
