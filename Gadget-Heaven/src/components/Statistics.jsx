import React from 'react';
import { Helmet } from 'react-helmet';

const Statistics = () => {
    return (
        <div>
             <Helmet>
                <title>Gadget Heaven | Statistics</title>
            </Helmet>
            <div className='bg-purple-600 w-full -mt-16'>
                <div className='mt-20 text-center text-white lg:mx-96 mx-4 py-8'>
                    <h2 className='font-bold lg:text-4xl text-2xl leading-tight mb-4'>Statistics</h2>
                    <p className='opacity-75 mb-6'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;