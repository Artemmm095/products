import React from 'react';
import './index.css';

const PriceLabel = ({ price }) => {
    return (
        <h1 className="main">${price}</h1>
    );
};

export default PriceLabel;
