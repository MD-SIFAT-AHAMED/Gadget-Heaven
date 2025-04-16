import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const ProductDetails = () => {

    const {productId} = useParams();

    const items = useLoaderData();
    const product = items.find(item => item.product_id === productId);

    console.log(product);


    return (
        <div className='bg-[#9538E2]'>
            <div className='max-w-screen-xl mx-auto space-y-4 pb-40 text-center'>
                <h2 className='text-4xl pt-5 text-white font-semibold'>Product Details</h2>
                <p className='text-white text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="hero min-h-[500px] rounded-2xl w-[800px] bg-red-400">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;