import React from 'react';
import styles from './index.module.css';

const BtnSubmit = ({ actionTitle }) => {
    return (
        <input type="submit" className={styles.main} value={actionTitle} />
    );
};

export default BtnSubmit;
