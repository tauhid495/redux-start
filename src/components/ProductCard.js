import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart, increaseQuantity, reduceQuantity, removeFromCart } from "../redux/actionCreators/productAction";

import { RiDeleteBin2Line } from "react-icons/ri"
import { useLocation } from "react-router-dom";


const ProductCard = ({ product }) => {

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li key={feature} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      {pathname.includes('cart') && <div className="flex">
        <p>Quantity :  </p> 
        <button onClick={()=>dispatch(increaseQuantity(product))} className="w-6 h-6 bg-green-700 rounded-full"> + </button> 
        <div>{product.quantity}</div> 
        <button disabled={product.quantity===1} onClick={()=>dispatch(reduceQuantity(product))} className="w-6 h-6 bg-red-600 rounded-full font-bold ">-</button>
        
      </div>}

      <div className='flex gap-2 mt-5'>
        {!pathname.includes("cart") && <button onClick={() => dispatch(addToCart(product))} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
          Add to cart
        </button>}
        {pathname.includes("cart") && <button onClick={() => dispatch(removeFromCart(product))} className='bg-red-600 rounded-full py-1 px-2 text-white text-bold flex-1 flex items-center justify-center'>
          <p className="mx-2">Remove</p> <RiDeleteBin2Line />
        </button>}
        {!pathname.includes("cart") && <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>}
      </div>
    </div>
  );
};

export default ProductCard;
