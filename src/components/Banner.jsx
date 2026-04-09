import React from 'react';

const Banner = () => {
    return (
        <div className='flex w-11/12 mx-auto py-21 items-center'>
            <div className='space-y-4'>
                <div className='flex items-center bg-[#E1E7FF] rounded-xl w-72 p-2 gap-2'>
                    <img className='w-4 h-4' src="/src/assets/round.png" alt="" />
                    <span className='text-[#4F39F6] text-[16px] font-medium'>New: AI-Powered Tools Available</span>
                </div>
                <div>
                    <h1 className='font-extrabold text-7xl/21 mb-4'>Supercharge Your Digital Workflow</h1>
                    <p className='text-lg/8 text-[#627382]'>
                        Access premium AI tools, design assets, templates, and  productivity <br /> software—all in one place. Start creating faster today. <br />Explore Products
                    </p>
                </div>
                <div className='flex gap-3'>
                    <button className='btn text-white rounded-3xl text-[16px] bg-linear-to-r from-[#4F39F6]  to-[#9514FA] font-bold p-4'>Explore Products</button>
                    <button className='btn text-[#4F39F6] rounded-3xl text[16px] p-4 border border-[#4F39F6]'><img src="/src/assets/Play.png" alt="" />Watch Demo</button>
                </div>
            </div>
            <div>
                <img className='w-190 h-135' src="/src/assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;