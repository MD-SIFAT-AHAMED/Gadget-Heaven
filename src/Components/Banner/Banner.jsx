import React from 'react';
import bannerImg from '../../assets/banner.jpg';
const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto mb-25 md:mb-80 lg:mb-90 xl:mb-115'>
            <div className='relative bg-[#9538E2] rounded-b-xl space-y-6 text-center pt-20 pb-50 md:pb-40 lg:pb-60 xl:pb-80'>
                <h2 className='text-4xl md:text-5xl xl:text-6xl text-white font-semibold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                <p className='text-base text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className='bg-white btn rounded-2xl text-xl font-semibold text-[#9538E2]'>Shop Now</button>
                
                <div className='absolute md:left-[11%] md:right-[11%] md:-bottom-[45%] lg:-bottom-[55%] xl:-bottom-[60%]'>
                    <img className='md:w-[1000px] bg-[#FFFFFF30] p-3 border-2 rounded-4xl border-[#FFFFFF]' src={bannerImg} alt="bannerImg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;