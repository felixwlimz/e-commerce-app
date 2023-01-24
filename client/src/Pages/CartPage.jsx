import React from 'react';
import { Navbar } from '../Components/Navbar';
import { CartCard } from '../Components/CartCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




export default function CartPage() {
  
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
 
  const getTotal = () => {
    let totalPrice = 0
    cart.forEach((item) => {
      totalPrice += item.productPrice * item.quantity;
    })
    return totalPrice;
  }

  const changeToString = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


  return (
    <div className='w-full'>
       <Navbar/>
       <h1 className='text-3xl px-[3%] font-bold'>Carts</h1>
        <div className="flex flex-col gap-2 p-[3%] justify-between">
          <div className='mx-4 inline-flex justify-between md:text-md text-sm'>
            <span>Image</span>
            <span>Product Name</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          {
            cart?.map(item => (
              <CartCard
                key={item._id}
                imgSrc={item.productImage}
                productName={item.productName}
                productPrice={changeToString(item.productPrice)}
                id={item._id}
                quantity = {item.quantity}
              />
            ))
          }

          <div className='flex flex-col gap-4 p-2 items-end justify-end md:text-lg text-md font-semibold'>
          <span>Subtotal : IDR {changeToString(getTotal())} </span> 
          <span>Tax 10% : IDR {changeToString(0.1 * getTotal())} </span>
          <span>Total : IDR {changeToString(getTotal() + (0.1 * getTotal()))} </span>
          <button type='button' onClick={() => navigate('/checkout', {state : cart})} className='border md:px-4 md:py-2 px-2 py-1 bg-green-600 text-white md:text-md text-sm hover:bg-gray-700 rounded-md'> Checkout </button>

          </div>
        </div>
  </div>
  )
}
