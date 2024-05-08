import React, { useState } from 'react';
import styles from './index.module.css';

const UnfoldableText = ({ text, onToggle }) => {
    const [isUnfolded, setIsUnfolded] = useState(false);

    function toggleFoldUnfold() {
        setIsUnfolded(!isUnfolded);
        onToggle();
    }

    return (
        <div className={styles.main}>
            <p className={isUnfolded ? styles.unfolded : ""}>{text}</p>
            <input
                type="button"
                className={styles.showMore}
                value={isUnfolded ? "Hide" : "Show more"}
                onClick={toggleFoldUnfold}
            />
        </div>
    );
};

export default UnfoldableText;
