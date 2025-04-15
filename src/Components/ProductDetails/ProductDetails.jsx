import React from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const {productId} = useParams();
    console.log(productId)
    return (
        <div>
            hi
        </div>
    );
};

export default ProductDetails;