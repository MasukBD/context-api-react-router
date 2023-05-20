/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <h2><Link className='nav-heading' to='/'>T-Shirt Hub</Link></h2>
                <ul>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'link')} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order' className={({ isActive }) => (isActive ? 'active' : 'link')} >Order</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : 'link')} >Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'link')} >About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;