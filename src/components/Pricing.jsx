import React from 'react';
import { TiTick } from 'react-icons/ti';

const Pricing = () => {
    return (
        <div className='w-11/12 mx-auto mt-30'>
            <div className='flex flex-col items-center space-y-4'>
                <h3 className='text-5xl font-extrabold'>Simple, Transparent Pricing</h3>
                <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
                <div className='bg-gray-100 rounded-xl p-6 space-y-4 shadow-sm'>
                    <h4 className='font-bold text-2xl'>Starter</h4>
                    <p className='text-[16px] text-[#627382]'>Perfect for getting started</p>
                    <p className='font-bold text-2xl'>$0<span className='text-[16px] text-[#627382] font-light'>/Month</span></p>
                    <ul>
                        <li className='flex items-center text-[#627382] text-[16px]'><TiTick className='text-green-500 mr-2' />Access to 10 free tools</li>
                        <li className='flex items-center text-[#627382] text-[16px]'><TiTick className='text-green-500 mr-2' />Basic templates</li>
                        <li className='flex items-center text-[#627382] text-[16px]'><TiTick className='text-green-500 mr-2' />Community support</li>
                        <li className='flex items-center text-[#627382] text-[16px]'><TiTick className='text-green-500 mr-2' />1 project per month</li>
                    </ul>
                    <div className='mt-16'>
                        <button className='btn bg-linear-to-r from-[#4F39F6]  to-[#9514FA] w-full text-white rounded-xl p-3 font-bold'>Get Started Free</button>
                    </div>
                </div>
                <div className='bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-xl p-6 space-y-4 shadow-sm relative'>
                    <span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-600 p-2 rounded-2xl flex items-center justify-center font-bold text-[14px]'>Most Popular</span>
                    <h4 className='font-bold text-2xl text-white'>Pro</h4>
                    <p className='text-[16px] text-white'>Best for professionals</p>
                    <p className='font-bold text-2xl text-white'>$29<span className='text-[16px] text-white font-light'>/Month</span></p>
                    <ul>
                        <li className='flex items-center text-white text-[16px]'><TiTick className='text-white mr-2' />Access to all premium tools</li>
                        <li className='flex items-center text-white text-[16px]'><TiTick className='text-white mr-2' />Unlimited templates</li>
                        <li className='flex items-center text-white text-[16px]'><TiTick className='text-white mr-2' />Priority support</li>
                        <li className='flex items-center text-white text-[16px]'><TiTick className='text-white mr-2' />Unlimited projects</li>
                        <li className='flex items-center text-white text-[16px]'><TiTick className='text-white mr-2' />Cloud sync</li>
                        <li className='flex items-center text-white text-[16px]'><TiTick className='text-white mr-2' />Advanced analytics</li>
                    </ul>
                    <button className='btn bg-white w-full text-purple-700 rounded-xl p-3 font-bold'>Get Started Free</button>
                </div>
                <div className='bg-gray-100 rounded-xl p-6 space-y-4 shadow-sm'>
                    <h4 className='font-bold text-2xl'>Enterprise</h4>
                    <p className='text-[16px] text-[#627382]'>For teams and businesses</p>
                    <p className='font-bold text-2xl'>$99<span className='text-[16px] text-[#627382] font-light'>/Month</span></p>
                    <ul>
                        <li className='flex items-center text-[#627382] text-[16px]'><TiTick className='text-green-500 mr-2' />Everything in Pro</li>
                        <li className='flex items-center text-[#627382] text-[16px]'><TiTick className='text-green-500 mr-2' />Team collaboration</li>
                        <li className='flex items-center text-[#627382] text-[16px]'><TiTick className='text-green-500 mr-2' />Custom integrations</li>
                        <li className='flex items-center text-[#627382] text-[16px]'><TiTick className='text-green-500 mr-2' />Dedicated support</li>
                        <li className='flex items-center text-[#627382] text-[16px]'><TiTick className='text-green-500 mr-2' />SLA guarantee</li>
                        <li className='flex items-center text-[#627382] text-[16px]'><TiTick className='text-green-500 mr-2' />Custom branding</li>
                    </ul>
                    <button className='btn bg-linear-to-r from-[#4F39F6]  to-[#9514FA] w-full text-white rounded-xl p-3 font-bold'>Get Started Free</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;