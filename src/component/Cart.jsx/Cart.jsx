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

                {/* conditional Rendaring  */}
                {cart.length === 2 && <p>2 Item added</p>}
                {cart.length === 4 && <p>4 Item added</p>}
                {cart.length === 6 && <p>6 Item added</p>}

            </div>
        </div>
    );
};

export default Cart;