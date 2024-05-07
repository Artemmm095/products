import React from 'react'
import Card from '../../molecules/Card/Card';
import styles from './index.module.css';

const ProductsList = ({ catalog }) => {
    return (
        <div className={styles.main}>
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
