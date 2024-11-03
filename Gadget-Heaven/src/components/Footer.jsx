import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20 lg:mx-40'>
            <div className='text-center mx-4'>
                <h2 className='font-bold lg:text-4xl text-2xl mb-2'>Gadget Heaven</h2>
                <p className='mb-8'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <footer className="footer lg:ml-32 lg:p-10 mb-10">
                <nav className='lg:pl-0 pl-10'>
                    <h6 className="font-bold text-2xl">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping and Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className='lg:pl-0 pl-10'>
                    <h6 className="font-bold text-2xl">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className='lg:pl-0 pl-10'>
                    <h6 className="font-bold text-2xl">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;