import React, { useState } from 'react';
import styles from './index.module.css';
import ProductPicture from '../../atoms/ProductPicture/ProductPicture';
import LinkTitle from '../../atoms/LinkTitle/LinkTitle';
import LinkLabel from '../../atoms/LinkLabel/LinkLabel';
import UnfoldableText from '../../atoms/UnfoldableText/UnfoldableText';
import PriceLabel from '../../atoms/PriceLabel/PriceLabel';
import BtnSubmit from '../../atoms/BtnSubmit/BtnSubmit';

const Card = ({ title, type, description, price }) => {
    const [isUnfolded, setIsUnfolded] = useState(false);

    function toggleFoldUnfold() {
        setIsUnfolded(!isUnfolded);
    }

    return (
        <div className={styles.main}>
            <ProductPicture />
            <LinkTitle titleText={title} />
            <LinkLabel labelText={type} />
            <UnfoldableText text={description} onToggle={toggleFoldUnfold} />
            { !isUnfolded && (
                <>
                    <PriceLabel price={price} />
                    <BtnSubmit actionTitle="Add to cart" />
                </>
            )}
        </div>
    );
};

export default Card;
