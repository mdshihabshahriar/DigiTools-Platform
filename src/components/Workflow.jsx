import React from 'react';

const Workflow = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-6 bg-linear-to-r from-[#4F39F6]  to-[#9514FA] p-30 mt-30'>
            <div>
                <h2 className='font-extrabold text-[40px] text-white'>Ready to Transform Your Workflow?</h2>
                <p className='text-[16px] text-white text-center'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>
            <div className='space-x-4'>
                <button className='btn rounded-2xl text-purple-500 font-semibold'>Explore Products</button>
                <button className='btn rounded-2xl bg-transparent text-white font-semibold'>View Pricing</button>
            </div>
            <div>
                <p className='text-[16px] text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;