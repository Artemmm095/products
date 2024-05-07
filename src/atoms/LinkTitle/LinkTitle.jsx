import React from 'react';
import './index.css';

const LinkTitle = ({ titleText }) => {
    return (
        <a className="main" href="#"><h2>{titleText}</h2></a>
    );
};

export default LinkTitle;
