import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({data}) => {
    const navigate = useNavigate();
    const {product_image,product_title,price} = data;

    const handleViewDetailsClick = () => {
        // alert("galib")
        navigate('/details',{ state: { data } });
      };
    return (
        <div>
            <div className="card bg-base-100 w-66 shadow-md p-4">
                <figure className="">
                    <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl w-full h-[160px]" />
                </figure>
                <div className="">
                    <h2 className="font-bold text-xl my-2">{product_title}</h2>
                    <p>Price: ${price}K</p>
                    <div className="card-actions">
                    <button onClick={handleViewDetailsClick} className="mt-2 border-2 border-indigo-600 py-2 px-4 rounded-full font-bold text-purple-600 hover:text-white hover:bg-purple-600">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;