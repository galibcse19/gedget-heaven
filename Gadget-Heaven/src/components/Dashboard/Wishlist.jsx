import React, { useContext } from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import { authContext } from '../Context/AuthProvider';

const Wishlist = () => {
    const {wishlist} = useContext(authContext);
    return (
        <div className='lg:mx-40 my-10'>
             <div className='font-bold text-xl'>
                Wishlist
             </div>
             <div className='my-10'>
                <ul>
                    {wishlist.map((item, index) => (
                        <li key={index} className="border p-2 mb-4 rounded">
                         <div className='flex justify-between'>
                            <div className='lg:flex'>
                               <img className='w-44 border rounded-lg mr-4' src={item.product_image} alt="" />
                                <div>
                                  <h2 className='font-bold text-xl'>{item.product_title}</h2>
                                  <p className='my-2'>{item.description}</p>
                                  <p className='font-bold'>Price: ${item.price}</p>
                                  <button className="mt-2 lg:ml-2 border-2 border-indigo-600 py-2 px-4 rounded-full font-bold text-purple-600 hover:text-white hover:bg-purple-600">Add to Card</button>
                                </div>
                            </div>
                            <div className='text-4xl text-red-500'>
                             <TiDeleteOutline />
                            </div>
                         </div>
                        </li>
                    ))}
                </ul>
             </div>
        </div>
    );
};

export default Wishlist;