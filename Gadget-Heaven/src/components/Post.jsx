import React from 'react';

const Post = ({data}) => {
    const {product_image,product_title,price} = data;
    return (
        <div>
            <div className="card bg-base-100 w-66 shadow-md p-4">
                <figure className="">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="">
                    <h2 className="font-bold text-xl my-2">{product_title}</h2>
                    <p>Price: {price}K</p>
                    <div className="card-actions">
                    <button className="mt-2 border-2 border-indigo-600 py-2 px-4 rounded-full font-bold text-purple-600 hover:text-white hover:bg-purple-600">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;