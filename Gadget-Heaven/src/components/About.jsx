import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const handleoffer =()=>{
        navigate('/');
    }
    return (
        <div>
             <Helmet>
                <title>Gadget Heaven | About</title>
            </Helmet>
            <div className='bg-purple-600 w-full -mt-16'>
                <div className='mt-20 text-center text-white lg:mx-96 mx-4 py-8'>
                    <h2 className='font-bold lg:text-4xl text-2xl leading-tight mb-4'>About</h2>
                    <p className='opacity-75 mb-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-3xl text-purple-500 text-center mt-12'>About Our Online Shop</h2>
            </div>
            <div className='flex justify-around mt-10'>
                <div className="stats shadow">
                    <div className="stat place-items-center">
                        <div className="stat-title">Total Purchase</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc text-secondary">From January 1st to November 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Happy Client</div>
                        <div className="stat-value text-secondary">22k</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Daily Viewers</div>
                        <div className="stat-value">2k</div>
                        <div className="stat-desc text-secondary">↗︎ 32 (4%)</div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='font-bold text-3xl text-purple-500 text-center mt-12'>Offer Zone</h2>
            </div>
            <div className='flex justify-around mt-10'>
                <div className="stats shadow">
                    <div className="stat place-items-center">
                        <div className="stat-title">Offers</div>
                        <button onClick={handleoffer} className="mt-2 lg:ml-2 border-2 border-indigo-600 py-1 px-2 rounded-full font-bold text-purple-600 hover:text-white hover:bg-purple-600">Offer</button>
                        <div className="stat-desc text-secondary">Get upto 50% of in every Friday</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Use Coupon</div>
                        <div className="stat-value text-secondary">MRBOSS</div>
                        <div className="stat-desc text-secondary">Get upto 20%</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Combo Offer</div>
                        <div className="stat-value">Purchase Three</div>
                        <div className="stat-desc text-secondary">Get One Product</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;