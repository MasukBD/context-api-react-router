/* eslint-disable no-unused-vars */
import React from 'react';
import './HomePage.css';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';

const HomePage = () => {
    const tShirts = useLoaderData();
    return (
        <div className='home-page'>
            {
                tShirts.map(tshirt => <TShirt key={tshirt._id} tShirt={tshirt}></TShirt>)
            }
        </div>
    );
};

export default HomePage;