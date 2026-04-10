import React from 'react';
import banner from '../assets/banner.png';
import round from '../assets/round.png';
import play from '../assets/Play.png';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row w-11/12 mx-auto py-21 items-center'>
            <div className='space-y-4'>
                <div className='flex items-center bg-[#E1E7FF] rounded-xl w-72 p-2 gap-2 mx-auto md:mx-0'>
                    <img className='w-4 h-4' src={round} alt="" />
                    <span className='text-[#4F39F6] text-[16px] font-medium'>New: AI-Powered Tools Available</span>
                </div>
                <div className='text-center md:text-left'>
                    <h1 className='font-extrabold md:text-7xl/21 text-5xl mb-4'>Supercharge Your <span className='text-purple-700'>Digital Workflow</span></h1>
                    <p className='text-lg/8 text-[#627382]'>
                        Access premium AI tools, design assets, templates, and  productivity <br /> software—all in one place. Start creating faster today. <br />Explore Products
                    </p>
                </div>
                <div className='flex gap-3 mb-3 md:mb-0 justify-center md:justify-start'>
                    <button className='btn text-white rounded-3xl text-[16px] bg-linear-to-r from-[#4F39F6]  to-[#9514FA] font-bold p-4'>Explore Products</button>
                    <button className='btn text-[#4F39F6] rounded-3xl text[16px] p-4 border border-[#4F39F6]'><img src={play} alt="" />Watch Demo</button>
                </div>
            </div>
            <div>
                <img className='md:w-190 md:h-135 shadow-2xl' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;