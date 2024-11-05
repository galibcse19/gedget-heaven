import React, { useContext, useEffect, useState } from 'react';
import { PiSortAscending } from "react-icons/pi";
import { TiDeleteOutline } from "react-icons/ti";
import { authContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/Group.png'
const Cart = () => {
    const [totalPrice,setTotalPrice ] = useState(0);
    const {cartItems,setCartItems} = useContext(authContext);
    const [displayedItems, setDisplayedItems] = useState(cartItems);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total); 
      }, [cartItems]);

     
    const sortByPriceDescending = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setDisplayedItems(sortedItems);
    };  

    const handlePurchase = () =>{
        setIsModalOpen(true);
         
    }
    const closeModal =()=>{
        setIsModalOpen(false);
        setCartItems([]);
        setTotalPrice(0);
        navigate("/") 
    }

    return (
        <div className='lg:mx-40 my-10'>
             <div className='lg:flex justify-between items-center'>
                <div className='font-bold text-xl'>Cart</div>
                <div className='lg:flex'>
                    <p className='mr-16 font-bold text-xl mt-4'> Total Cost: {totalPrice.toFixed(2)}</p>
                    <button onClick={sortByPriceDescending} className="flex items-center mt-2 border-2 border-indigo-600 py-2 px-4 rounded-full font-bold text-purple-600 hover:text-white hover:bg-purple-600">Sort by Price <span className="text-xl ml-2"><PiSortAscending /></span> </button>
                    <button onClick={handlePurchase} className="mt-2 lg:ml-2 border-2 border-indigo-600 py-2 px-4 rounded-full font-bold text-purple-600 hover:text-white hover:bg-purple-600">Purchase</button>
                </div>
             </div>
             <div className='my-10'>
                <ul>
                    {displayedItems.map((item, index) => (
                        <li key={index} className="border p-2 mb-4 rounded">
                         <div className='flex justify-between'>
                            <div className='lg:flex'>
                               <img className='w-32 border rounded-lg mr-4' src={item.product_image} alt="" />
                                <div>
                                  <h2 className='font-bold text-xl'>{item.product_title}</h2>
                                  <p className='my-2'>{item.description}</p>
                                  <p className='font-bold'>Price: ${item.price}</p>
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
             {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 text-center">
            <img className='mx-auto my-6' src={image} alt="" />
            <h2 className='text-2xl font-bold mb-6'>Payment Successfully</h2>
            <hr />
            <p className='mt-6'>Thanks forpurchasing</p>
            <p>Total: {totalPrice}</p>
            <div className="mt-4">
              <button className="bg-purple-500 w-full text-white py-2 px-4 rounded mr-2" onClick={closeModal}>Cancel</button> 
            </div>
          </div>
        </div>
      )}
        </div>
    );
};

export default Cart;