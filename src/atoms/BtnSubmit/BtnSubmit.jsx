import React from 'react';
import './index.css';

const BtnSubmit = ({ actionTitle }) => {
    return (
        <input type="submit" className="main" value={actionTitle} />
    );
};

export default BtnSubmit;
