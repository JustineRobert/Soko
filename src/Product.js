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
    </div>
    </div>
      
    </div>
  )
}

export default Product
