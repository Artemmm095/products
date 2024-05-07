import React, { useState } from 'react';
import './index.css';

const UnfoldableText = ({ text }) => {
    const [isUnfolded, setIsUnfolded] = useState(false);

    function handleFoldUnfold() {
        setIsUnfolded(!isUnfolded);
    }

    return (
        <div className="main">
            <p className={isUnfolded ? "unfolded" : ""}>{text}</p>
            <input
                type="button"
                className="show-more"
                value={isUnfolded ? "Hide" : "Show more"}
                onClick={handleFoldUnfold}
            />
        </div>
    );
};

export default UnfoldableText;
