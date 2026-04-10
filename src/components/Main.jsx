import React from 'react';

const Main = () => {
    return (
        <div>
        <div className='flex flex-col md:flex-row justify-around bg-linear-to-r from-[#4F39F6]  to-[#9514FA] p-10 md:space-y-0 space-y-5'>
            <div className='text-center space-y-3'>
                <h1 className='font-extrabold text-7xl text-white'>50K+</h1>
                <p className='font-medium text-xl text-white'>Active Users</p>
            </div>
            <div className='text-center border-t border-b md:border-t-0 md:border-b-0 md:border-l md:border-r  border-white md:px-40 space-y-3 py-5 md:py-0'>
                <h1 className='font-extrabold text-7xl text-white '>200+</h1>
                <p className='font-medium text-xl text-white'>Premium Tools</p>
            </div>
            <div className='text-center space-y-3'>
                <h1 className='font-extrabold text-7xl text-white'>4.9</h1>
                <p className='font-medium text-xl text-white'>Rating</p>
            </div>
        </div>
        <div className='w-11/12 mx-auto mt-30 flex flex-col items-center text-center space-y-5'>
            <h2 className='font-extrabold text-5xl'>Premium Digital Tools</h2>
            <p className='text-[16px]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
        </div>
        </div>
    );
};

export default Main;