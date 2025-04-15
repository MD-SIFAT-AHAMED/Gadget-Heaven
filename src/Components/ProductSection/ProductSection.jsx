import React from 'react';

const ProductSection = () => {
    return (
        <div className='max-w-screen-xl mx-auto bg-[#09080F10] p-5 md:px-10 lg:20'>
            <h2 className='text-4xl font-semibold text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex'>
                <div className='flex flex-col w-[40%] lg:w-[25%] p-5 space-y-4 bg-white rounded-2xl'>
                    <button className='bg-[#09080F10]  text-start text-base font-medium py-2 pl-7 rounded-4xl'>All Product</button>
                    <button className='bg-[#09080F10] text-start text-base font-medium py-2 pl-7 rounded-4xl'>Laptop</button>
                    <button className='bg-[#09080F10]  text-start text-base font-medium py-2 pl-7 rounded-4xl'>Phone</button>
                    <button className='bg-[#09080F10]  text-start text-base font-medium py-2 pl-7 rounded-4xl'>Accessories</button>
                    <button className='bg-[#09080F10]  text-start text-base font-medium py-2 pl-7 rounded-4xl'>Smart Watches</button>
                    <button className='bg-[#09080F10]  text-start text-base font-medium py-2 pl-7 rounded-4xl'>MacBook</button>
                    <button className='bg-[#09080F10]  text-start text-base font-medium py-2 pl-7 rounded-4xl'>Iphone</button>
                </div>
                <div className='w-[60%] lg:w-[75%]'>
                    hello

                </div>
            </div>
        </div>
    );
};

export default ProductSection;