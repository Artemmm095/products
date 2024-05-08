import React from 'react';
import styles from './index.module.css';

const PriceLabel = ({ price }) => {
    return (
        <h1 className={styles.main}>${price.toFixed(2)}</h1>
    );
};

export default PriceLabel;
