import React from 'react';
import styles from './index.module.css';

const LinkLabel = ({ labelText }) => {
    return (
        <a className={styles.main} href="#">{labelText}</a>
    );
};

export default LinkLabel;
