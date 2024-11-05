import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { authContext } from '../Context/AuthProvider';
import { toast } from 'react-toastify';

const Details = () => {
    const location = useLocation();
    const { data } = location.state || {};

    const { addToCart } = useContext(authContext);
    const {addToWishlist,wishlist} = useContext(authContext);

    const isItemInWishlist = wishlist.find(item => item.product_id === data.product_id);

    const handleAddToCart = (data) => {
        addToCart(data);
        toast.success('Item added to Cart',{position: "top-center"})
    
    };
    const handleAddToWishlist = (data) =>{
        if(!isItemInWishlist){
            addToWishlist(data);
            toast.success('Item added to Wish List',{position: "top-center"})
        }
    }

    return (
        <div>
            <div className='bg-purple-600 w-full -mt-16'>
                <div className='mt-20 text-center text-white lg:mx-96 mx-4 pt-8 lg:pb-60 pb-40'>
                    <h2 className='font-bold lg:text-4xl text-2xl leading-tight mb-4'>Product Details</h2>
                    <p className='opacity-75'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 p-4 lg:w-2/4 w-full bg-white border rounded-3xl  lg:-mt-48 -mt-32 mx-auto'>
                <div>
                 <img className='border rounded-lg w-80 h-80' src={data.product_image} alt="" />
                </div>
                <div>
                    <h2 className='font-bold text-2xl'>{data.product_title}</h2>
                    <h3 className='font-bold my-2'>Price: ${data.price}</h3>
                        <button className={`my-2 py-1 px-4 rounded-full font-bold border-2 ${data.availability ? 'text-green-600 border-green-600' : 'text-red-600 border-red-600' }`}>
                        {data.availability ? 'In Stock' : 'Out of Stock'}
                        </button>
                    <p>{data.description}</p>
                    <h2 className='font-bold my-2'>Specification:</h2>
                    <ul>
                        {
                        data.specification.map((spec, index) => (
                        <li key={index} className="my-2">
                            {index + 1}. {spec}
                        </li>
                        ))
                        }
                    </ul>
                    <p className='mt-2 font-bold'>Rating:</p>
                    <div className="rating mt-1">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <input
                            key={value}
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-yellow-500"
                            defaultChecked={data.rating === value}
                            />
                        ))}
                        <span className="ml-2">{data.rating}</span>
                    </div>
                    <div className='flex items-center mt-2'>
                        <button  onClick={()=>handleAddToCart(data)} className='flex items-center text-white bg-purple-500 py-3 px-4 border rounded-full font-bold hover:bg-white hover:text-purple-500 hover:border-purple-500'>Add To Card <span className='ml-2'><FiShoppingCart /></span> </button>
                        <button disabled={isItemInWishlist} onClick={()=>handleAddToWishlist(data)} className='ml-2 border rounded-full p-4 hover:bg-white hover:text-purple-500 hover:border-purple-500'><FaRegHeart /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;