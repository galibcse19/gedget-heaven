import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Cart from './Cart';
import Wishlist from './Wishlist';

const Dashboard = () => {
    const [activeButton, setActiveButton] = useState('cart');

    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Dashboard</title>
            </Helmet>
            <div className='bg-purple-600 w-full -mt-16'>
                <div className='mt-20 text-center text-white lg:mx-96 mx-4 py-8'>
                    <h2 className='font-bold lg:text-4xl text-2xl leading-tight mb-4'>Dashboard</h2>
                    <p className='opacity-75 mb-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button
                        onClick={() => setActiveButton('cart')}
                        className={`mr-2 py-2 px-10 font-bold border rounded-full ${
                        activeButton === 'cart' ? 'bg-white text-purple-600' : 'bg-transparent text-white'
                        }`}
                    >
                        Cart
                    </button>

                    <button
                        onClick={() => setActiveButton('wishlist')}
                        className={`ml-2 py-2 px-6 font-bold border rounded-full ${
                        activeButton === 'wishlist' ? 'bg-white text-purple-600' : 'bg-transparent text-white'
                        }`}
                    >
                        Wishlist
                    </button>
                </div>
            </div>
            <div className="mt-4">
                {
                   activeButton ==='cart' ? <Cart></Cart> : <Wishlist
                   ></Wishlist> 
                }
            </div>
        </div>
    );
};

export default Dashboard;