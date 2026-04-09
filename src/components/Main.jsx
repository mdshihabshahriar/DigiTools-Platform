import React from 'react';

const Main = () => {
    return (
        <div className='flex justify-around bg-linear-to-r from-[#4F39F6]  to-[#9514FA] p-10'>
            <div className='text-center space-y-3'>
                <h1 className='font-extrabold text-7xl text-white'>50K+</h1>
                <p className='font-medium text-xl text-white'>Active Users</p>
            </div>
            <div className='text-center border-r border-l border-white px-40 space-y-3'>
                <h1 className='font-extrabold text-7xl text-white'>200+</h1>
                <p className='font-medium text-xl text-white'>Premium Tools</p>
            </div>
            <div className='text-center space-y-3'>
                <h1 className='font-extrabold text-7xl text-white'>4.9</h1>
                <p className='font-medium text-xl text-white'>Rating</p>
            </div>
        </div>
    );
};

export default Main;