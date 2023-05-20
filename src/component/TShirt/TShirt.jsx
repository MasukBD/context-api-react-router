/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './TShirt.css'
import { ShoppingCartIcon } from '@heroicons/react/24/solid';


const TShirt = ({ tShirt }) => {
    console.log(tShirt)
    const { _id, price, index, picture, name } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>Product Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button className='buy-btn'>Buy Now <span><ShoppingCartIcon className="cart-icon" /></span></button>
        </div>
    );
};

export default TShirt;