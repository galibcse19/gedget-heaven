import React, { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    // console.log(data);
    return (
        <div>
            <h2 className='font-bold lg:text-3xl text-2xl text-center mt-16'>Explore Cutting-Edge Gadgets</h2>
            <div className='lg:mx-36 md:mx-10 mx-2 mt-8 mb-32 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                 <div className='p-6  bg-base-100 shadow-md max-h-max'>
                    <button className='w-full font-bold bg-purple-600 py-2 border rounded-full text-white'>All Product</button>
                    <button className='my-6 w-full font-bold py-2 border rounded-full'>Laptops</button>
                    <button className='w-full font-bold py-2 border rounded-full '>Phones</button>
                    <button className='my-6 w-full font-bold py-2 border rounded-full '>Smart Watches</button>
                    <button className='w-full font-bold py-2 border rounded-full '>MacBook</button>
                    <button className='mt-6 w-full font-bold py-2 border rounded-full '>IPhone</button>
                    <button className='mt-6 w-full font-bold py-2 border rounded-full '>Accessories</button>
                 </div>
                 <div className='col-span-3'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        data.map(data => <Post data={data} key={data.product_id}></Post>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;