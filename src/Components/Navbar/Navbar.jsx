import React from 'react';
import { NavLink } from 'react-router';
import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
const Navbar = () => {

    const links = <>
        <li className='text-lg text-white font-normal'><NavLink to={'/'}>Home</NavLink></li>
        <li className='text-lg text-white font-normal'><NavLink>Statistic</NavLink></li>
        <li className='text-lg text-white font-normal'><NavLink>Deshboard</NavLink></li>
    </>

    return (
        <div className='max-w-screen-xl mx-auto pr-5 md:px-10 lg:20 bg-[#9538E2] rounded-t-xl mt-4'>
            <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {
                        links
                    }
                </ul>
                </div>
                <h4 className="text-xl font-semibold text-white">Gadget Heaven</h4>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {
                    links
                }
                </ul>
            </div>
            <div className="navbar-end space-x-3 bg-red text-2xl">
                <div className='p-2 bg-white rounded-full'>
                    <BsCart2/>
                </div>
                <div className='p-2 bg-white rounded-full'>
                    <IoMdHeartEmpty />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;