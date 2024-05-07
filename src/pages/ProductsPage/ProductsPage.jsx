import React from 'react';
import appliances from '../../mocks/appliances';
import Page from '../Page';
import ProductsList from '../../organisms/ProductsList/ProductsList';

const ProductsPage = () => {
    return (
        <Page>
            <ProductsList catalog={appliances}/>
        </Page>
    );
};

export default ProductsPage;
