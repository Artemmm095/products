import React from 'react';
import './index.css';

const Navbar = () => {
    return (
        <nav>
            <a href="#">Main</a>
            <a href="#">Products</a>
            <a href="#">Orders</a>
            <input type="search" placeholder="Search" />
            <a href="#">Wishlist</a>
            <a href="#">Cart</a>
        </nav>
    );
};

export default Navbar;
