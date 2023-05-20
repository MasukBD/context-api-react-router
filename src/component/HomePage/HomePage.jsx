/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './HomePage.css';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart.jsx/Cart';
import toast from 'react-hot-toast';

const HomePage = () => {
    const [CartItem, setCartItem] = useState([]);
    const tShirts = useLoaderData();

    // add items to cart 
    const handleBuyNowBtn = (product) => {
        const exits = CartItem.find(tshirt => tshirt._id === product._id);
        if (exits) {
            toast('Same Product Added Already');
        }
        else {
            let newCart = [...CartItem, product];
            setCartItem(newCart);
        }
    }

    // remove item from cart 
    const handleRemoveBtn = (id) => {
        const RemainingItem = CartItem.filter(tshirt => tshirt._id !== id);
        setCartItem(RemainingItem);
    }


    return (
        <div className='home-container'>
            <div className='home-page'>
                {
                    tShirts.map(tshirt => <TShirt buyNow={handleBuyNowBtn} key={tshirt._id} tShirt={tshirt}></TShirt>)
                }
            </div>
            <div className='order-summary'>
                <Cart RemoveItem={handleRemoveBtn} cart={CartItem}></Cart>
            </div>
        </div>
    );
};

export default HomePage;