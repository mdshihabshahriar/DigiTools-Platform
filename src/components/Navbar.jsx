import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar border-b border-gray-300 bg-white shadow-sm">
            <div className="navbar-start">
                <div className="">
                    <span className="bg-linear-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent text-2xl font-bold ml-20">DigiTools</span>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-8 px-1 text-lg font-semibold">
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
                <img className='w-4 h-4 cursor-pointer' src="/src/assets/products/shopping-cart.png" alt="" />
                <a href="" className='text-lg font-semibold'>Login</a>
                <a className="btn bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-full text-white mr-20">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;