import React from 'react';
import user from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocket from '../assets/rocket.png';

const GetStarted = () => {
    return (
        <div className='bg-gray-100 mt-20 pt-20 pb-20'>
            <div className='w-11/12 mx-auto'>
                <div className='flex flex-col items-center space-y-5 text-center'>
                    <h1 className='text-3xl md:text-5xl font-extrabold'>Get Started in 3 Steps</h1>
                    <p className='text-[16px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                    <div className='relative flex flex-col items-center border border-gray-100 rounded-xl shadow-sm p-6 space-y-4 text-center bg-white pt-20 pb-20'>
                        <span className='absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold'>01</span>
                        <img className='bg-purple-100 rounded-full p-2' src={user} alt="" />
                        <h4 className='font-bold text-2xl'>Create Account</h4>
                        <p className='text-[16px]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='relative flex flex-col items-center border border-gray-100 rounded-xl shadow-sm p-6 space-y-4 text-center bg-white pt-20 pb-20'>
                        <span className='absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold'>02</span>
                        <img className='bg-purple-100 rounded-full p-2' src={packageIcon} alt="" />
                        <h4 className='font-bold text-2xl'>Choose Products</h4>
                        <p className='text-[16px]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='relative flex flex-col items-center border border-gray-100 rounded-xl shadow-sm p-6 space-y-4 text-center bg-white pt-20 pb-20'>
                        <span className='absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold'>03</span>
                        <img className='bg-purple-100 rounded-full p-2 object-contain' src={rocket} alt="" />
                        <h4 className='font-bold text-2xl'>Start Creating</h4>
                        <p className='text-[16px]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default GetStarted;