import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-screen-xl mx-auto pr-5 md:px-10 lg:20'>
            <div className='text-center space-y-3'>
                <h2 className='text-3xl font-semibold'>Gadget Heaven</h2>
                <p className='text-base text-gray-400'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className='text-gray-400 my-8' />
            <footer className="footer sm:footer-horizontal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:place-items-center text-[#09080F] text-base ps-10 pb-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                </footer>
        </div>
    );
};

export default Footer;