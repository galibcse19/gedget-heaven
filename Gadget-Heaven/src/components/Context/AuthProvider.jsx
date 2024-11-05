import React, { createContext, useEffect, useState } from 'react';
export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlists] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    // console.log(data);
  
    const addToCart = (item) => {
      setCartItems((prevItems) => [...prevItems, item]);
    };

    const addToWishlist = (item)=>{
        setWishlists((prevItems) => [...prevItems, item])
    }
    // console.log(cartItems,wishlist);

    const authInfo={
        data,cartItems,setCartItems,addToCart, wishlist,addToWishlist  }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;