/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({ cart, RemoveItem }) => {
    return (
        <div className='cart-container'>
            <h4>Order Summary : {cart.length}</h4>
            <div>
                {
                    cart.map(tShirt => <p key={tShirt._id}>{tShirt.name} <button onClick={() => RemoveItem(tShirt._id)} >X</button></p>)
                }
            </div>
        </div>
    );
};

export default Cart;