import React, { useContext } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { authContext } from './Context/AuthProvider';

const Navbar = () => {
    const location = useLocation();
    const isNotHome = location.pathname !== "/";
    const {cartItems,wishlist} = useContext(authContext);

    const links = <>
        <li><Link to="/" className={isNotHome ? "text-purple-600" : "text-white"}>Home</Link></li>
        <li><Link to="/statistics" className={isNotHome ? "text-purple-600" : "text-white"}>Statistics</Link></li>
        <li><Link to="/dashboard" className={isNotHome ? "text-purple-600" : "text-white"}>Dashboard</Link></li>
        <li><Link to="/about" className={isNotHome ? "text-purple-600" : "text-white"}>About</Link></li>
    </>
    return (
        <div className='lg:mx-32 font-bold'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-purple-400 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                         {links}
                    </ul>
                    </div>
                    <a className={`btn btn-ghost text-xl ${isNotHome ? "text-purple-600" : "text-white"}`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                     {links}
                    </ul>
                </div>
                <div className="navbar-end lg:mr-6 ">
                    <div className='flex lg:gap-4 gap-4'>
                        <div className='flex relative'>
                            <button className='border rounded-full bg-white p-2'><FiShoppingCart /></button>
                            {
                                cartItems.length> 0 && (<div className='text-red-600 bg-white absolute ml-6 -mt-2 border rounded-md px-1'>{cartItems.length}</div>)
                            }
                       </div>
                        <div className='flex relative'>
                          <button className='border rounded-full bg-white p-2'><FaRegHeart /></button>
                          {
                             wishlist.length > 0 && (<div className='text-red-600 bg-white absolute ml-6 -mt-2 border rounded-md px-1'> {wishlist.length} </div> )
                          }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;