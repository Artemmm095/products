import React from 'react';
import styles from './index.module.css';

const LinkTitle = ({ titleText }) => {
    return (
        <a className={styles.main} href="#"><h2>{titleText}</h2></a>
    );
};

export default LinkTitle;
