import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({carts}) => {
    return (
        <div className='border-b border-gray-300 shadow-sm sticky top-0 bg-white z-50'>
        <div className="navbar bg-white w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="">
                    <span className="bg-linear-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent text-3xl font-bold">DigiTools</span>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-8 px-1 text-[16px] font-semibold">
                <li>
                    <a>Product</a>
                </li>
                <li>
                    <a>Features</a>
                </li>
                <li>
                    <a>Pricing</a>
                </li>
                <li>
                    <a>Testimonials</a>
                </li>
                <li>
                    <a>FAQ</a>
                </li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <div className='relative'>
                    <FiShoppingCart className='text-2xl' />
                    {carts.length > 0 && (
                        <span className='absolute -top-2.5 -right-2 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                            {carts.length}
                        </span>
                    )}
                </div>
                <a href="" className='text-[16px] font-semibold'>Login</a>
                <a className="btn bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-full text-white">Get Started</a>
            </div>
        </div>
        </div>
    );
};

export default Navbar;