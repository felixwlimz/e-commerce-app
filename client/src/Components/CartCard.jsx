import React from 'react';
import { decrementQuantity, incrementQuantity, removeItem } from '../redux/slice';
import { useDispatch } from 'react-redux';

export const CartCard = (props) => {
  
const dispatch = useDispatch();


  return (
    <div className='w-full border border-gray-300 rounded-lg'>
      <div className='w-full p-3 flex flex-row justify-between'>
        <img src={props.imgSrc} alt='cart-img' className='md:w-[80px] md:h-[80px] h-[50px] w-[50px]' />
        <span className=' font-semibold text-center md:text-md  md:mt-6 mt-2'>{props.productName}</span>
        <div className='inline-flex items-center gap-3'>
          <button className='border md:px-2 px-1 bg-green-600 md:h-[30%] text-white font-bold rounded-md' onClick={() => dispatch(decrementQuantity(props.id))}> -</button>
          <p className='md:text-md text-sm'>{props.quantity}</p>
          <button className='border md:px-2 px-1 bg-green-600 md:h-[30%] text-white font-bold rounded-md' onClick={() => dispatch(incrementQuantity(props.id))}> +</button>
        </div>
        <span className='my-auto md:ml-0 ml-4 font-bold md:text-lg text-sm'>IDR {props.productPrice}</span>
        <button className='border md:p-2 p-1 bg-red-600 md:h-[30%] h-[25%] md:text-md text-sm mt-5 hover:bg-gray-700 text-white font-bold rounded-md' onClick={()=> dispatch(removeItem(props.id))}>Remove</button>
      </div>
    </div>
  )
}
