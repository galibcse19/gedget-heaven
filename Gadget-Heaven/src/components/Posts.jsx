// import React, { useEffect, useState } from 'react';
import { useContext, useState } from 'react';
import Post from './Post';
import { authContext } from './Context/AuthProvider';

const Posts = () => {
    const {data} = useContext(authContext);
    const [selectedCategory, setSelectedCategory] = useState('all');
    // const laptop =data.filter(item =>item.category ==='laptop');
    // const mobile =data.filter(item =>item.category ==='mobile');
    // const iPhone =data.filter(item =>item.category ==='iPhone');
    // const smartWatch =data.filter(item =>item.category ==='smart watch');
    // const macBook =data.filter(item =>item.category ==='macBook');
    // const Laptop =data.filter(item =>item.category ==='laptop');
    // console.log(laptop,mobile,iPhone,smartWatch,macBook);

    const getFilteredData = () => {
        if (selectedCategory === 'all') return data;
        return data.filter(item => item.category === selectedCategory);
      };
    
      // Filtered data based on the selected category
      const filteredData = getFilteredData();

    return (
        <div>
            <h2 className='font-bold lg:text-4xl text-2xl text-center mt-16 text-purple-600'>Explore Cutting-Edge Gadgets</h2>
            <div className='lg:mx-36 md:mx-10 mx-2 mt-8 mb-32 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                 <div className='p-6  bg-base-100 shadow-md max-h-max'>
                    {/* <button className='w-full font-bold bg-purple-600 py-2 border rounded-full text-white'>All Product</button> */}
                    <button className={`w-full font-bold py-2 border rounded-full ${selectedCategory === 'all' ? 'bg-purple-600 text-white' : ''}`}
        onClick={() => setSelectedCategory('all')}>All Product</button>
                    <button className={`my-6 w-full font-bold py-2 border rounded-full ${selectedCategory === 'laptop' ? 'bg-purple-600 text-white' : ''}`}
        onClick={() => setSelectedCategory('laptop')}>Laptops</button>
                    <button className={`w-full font-bold py-2 border rounded-full ${selectedCategory === 'mobile' ? 'bg-purple-600 text-white' : ''}`}
        onClick={() => setSelectedCategory('mobile')}>Phones</button>
                    <button className={`my-6 w-full font-bold py-2 border rounded-full ${selectedCategory === 'smart watch' ? 'bg-purple-600 text-white' : ''}`}
        onClick={() => setSelectedCategory('smart watch')}>Smart Watches</button>
                    <button className={`w-full font-bold py-2 border rounded-full ${selectedCategory === 'macBook' ? 'bg-purple-600 text-white' : ''}`}
        onClick={() => setSelectedCategory('macBook')}>MacBook</button>
                    <button className={`mt-6 w-full font-bold py-2 border rounded-full ${selectedCategory === 'iPhone' ? 'bg-purple-600 text-white' : ''}`}
        onClick={() => setSelectedCategory('iPhone')}>IPhone</button>
                    <button className={`mt-6 w-full font-bold py-2 border rounded-full ${selectedCategory === 'accessories' ? 'bg-purple-600 text-white' : ''}`}
        onClick={() => setSelectedCategory('accessories')}>Accessories</button>
                 </div>
                 <div className='col-span-3'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                       filteredData.length>0 ?  filteredData.map(data => <Post data={data} key={data.product_id}></Post>) : <p className="text-center font-bold text-2xl text-purple-600">No data available</p>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;