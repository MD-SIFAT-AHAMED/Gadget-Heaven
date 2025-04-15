import React, { use, useEffect, useState } from 'react';
import ProductCart from '../ProductCart/ProductCart';


const ProductSection = () => {
    const [product,setProduct] = useState([]);
    const [productName,setProductName]= useState('');

    const handlerShowProduct =(name)=>{
        setProductName(name);
    }
    useEffect(()=>{
        if(!productName) return;
        fetch(`${productName}Data.json`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productName]);

    return (
        <div className='bg-[#09080F10]'>
            <div className='max-w-screen-xl mx-auto py-15 my-5'>
                <h2 className='text-2xl md:text-4xl font-semibold text-center mb-10'>Explore Cutting-Edge Gadgets</h2>
                <div className='flex gap-10'>

                    <div className='flex flex-col p-5 space-y-4 bg-white rounded-2xl h-fit w-fit'>
                        <button className='bg-[#09080F10]  text-start text-base font-medium py-2 pl-5 pr-3  rounded-4xl'>All Product</button>
                        <button onClick={()=> handlerShowProduct('laptops')} className={`${productName === 'laptops' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F10]'} text-start text-base font-medium py-2 pl-5 pr-3 rounded-4xl`}>Laptop</button>
                        <button onClick={()=> handlerShowProduct('phones')} className={`${productName === 'phones' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F10]'} text-start text-base font-medium py-2 pl-5 pr-3 rounded-4xl`}>Phone</button>
                        <button onClick={()=> handlerShowProduct('accessories')} className={`${productName === 'accessories' ?  'bg-[#9538E2] text-white' : 'bg-[#09080F10]'} text-start text-base font-medium py-2 pl-5 pr-3 rounded-4xl`}>Accessories</button>
                        <button onClick={()=> handlerShowProduct('smartWatch')} className={`${productName === 'smartWatch' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F10]'} text-start text-base font-medium py-2 pl-5 pr-3 rounded-4xl`}>Smart Watches</button>
                        <button onClick={()=> handlerShowProduct('macbook')} className={`${productName === 'macbook' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F10]'} text-start text-base font-medium py-2 pl-5 pr-3 rounded-4xl`}>MacBook</button>
                        <button onClick={()=> handlerShowProduct('iphones')} className={`${productName === 'iphones' ? 'bg-[#9538E2] text-white' : 'bg-[#09080F10]'} text-start text-base font-medium py-2 pl-5 pr-3 rounded-4xl`}>Iphone</button>
                    </div>

                    <div className='w-[80%] pr-5'>
                        
                       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                product.map(product => <ProductCart key={product.product_id} product={product}></ProductCart>)
                            }
                       </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;