import React from 'react';
import instagram from '../assets/instagram.png';
import facebook from '../assets/Facebook.png';
import twitter from '../assets/fi_5968958.png';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <footer className="footer sm:footer-horizontal text-base-content pt-30 pb-30 w-11/12 mx-auto">
            <aside>
                <h4 className='text-white text-3xl font-bold'>DigiTools</h4>              
                <p className='text-white'>
                Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                </p>
            </aside>
            <nav className='text-white'>
                <h6 className="footer-title">Product</h6>
                <a className="link link-hover">Features</a>
                <a className="link link-hover">Pricing</a>
                <a className="link link-hover">Templates</a>
                <a className="link link-hover">Integrations</a>
            </nav>
            <nav className='text-white'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Press</a>
            </nav>
            <nav className='text-white'>
                <h6 className="footer-title">Resources</h6>
                <a className="link link-hover">Documentation</a>
                <a className="link link-hover">Help Center</a>
                <a className="link link-hover">Community</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav className='text-white'>
                <h6 className="footer-title">Social Links</h6>
                <div className='flex gap-4'>
                    <img className='bg-white rounded-full p-1' src={instagram} alt="" /> 
                    <img className='bg-white rounded-full p-1' src={facebook} alt="" />
                    <img className='bg-white rounded-full p-1' src={twitter} alt="" />
                </div>
            </nav>
            </footer>
            <div className='bg-[#101727] w-11/12 mx-auto'>
                <div className="divider border-b border-gray-500"></div>
                <div className='flex justify-between items-center py-5'>
                    <div>
                        <p className='text-gray-500'>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className='text-gray-500 flex gap-4'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;