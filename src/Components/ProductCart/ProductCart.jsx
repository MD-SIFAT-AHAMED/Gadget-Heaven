import React from 'react';
import { Link } from 'react-router';

const ProductCart = ({product}) => {
    const {product_title,price,product_id,product_image}= product;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                className='h-[166px] object-cover p-2 rounded-2xl'
                src={product_image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{product_title}</h2>
                <p className='text-base'>Price: ${price}</p>
                <div className="card-actions justify-start">
                <Link to={`/details/${product_id}`}>
                    <button className="btn border-1 hover:bg-[#9538E2] hover:text-white py-2 font-medium rounded-2xl border-purple-600 text-purple-500">View Details</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;