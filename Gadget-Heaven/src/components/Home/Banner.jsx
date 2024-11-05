import React from 'react';
import bannerImage from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className='bg-purple-600 w-full -mt-20 border rounded-xl'>
                <div className='mt-20 text-center text-white lg:mx-96 mx-4 pt-8 lg:pb-60 pb-40'>
                    <h2 className='font-bold lg:text-4xl text-2xl leading-tight mb-4'> Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                    <p className='opacity-75'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className='bg-white text-purple-600 py-2 px-3 mt-4 font-bold border rounded-full'>Shop Now</button>
                </div>
            </div>
            <div className=''>
                <img className='lg:w-[75%] lg:h-[550px] w-[90%] h-[200px] border-8 rounded-3xl lg:-mt-48 -mt-32 mx-auto' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;