import React from 'react';
import './index.css';

const LinkLabel = ({ labelText }) => {
    return (
        <a className="main" href="#">{labelText}</a>
    );
};

export default LinkLabel;
