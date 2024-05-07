import React from 'react'
import Card from '../../molecules/Card/Card';
import './index.css';

const ProductsList = ({ catalog }) => {
    return (
        <div className="main">
            { catalog.map((product, index) => (
                <Card
                    key={index}
                    title={product.title}
                    type={product.productType}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default ProductsList;
