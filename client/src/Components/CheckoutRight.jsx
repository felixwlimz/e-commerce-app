import React from 'react';
import { useLocation } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

export const CheckoutRight = () => {
  
  const location = useLocation();
  console.log(location.state);

  const getTotal = () => {
    let totalPrice = 0
    location.state.forEach((item) => {
      totalPrice += item.productPrice * item.quantity;
    })
    return totalPrice;
  }

  const changeToString = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className='flex flex-col gap-6 bg-green-600 h-[75%] w-full p-2 rounded-lg'>
      <div className="flex flex-col p-2">
        <h1 className ='text-xl font-semibold text-white'>Cart Summary</h1>
         {location.state.map(item => (
          <div key={item._id} className='inline-flex gap-2 py-2 justify-evenly text-white mt-3 mb-1 border-b-2'>
             <p>{item.productName}</p>
             <p>{item.quantity}</p>
             <p>IDR {changeToString(item.productPrice)}</p>           
          </div>
         ))}
      </div>
      <div className='p-2 flex flex-col gap-3 text-white font-lg font-semibold items-end justify-end'>
        <p>Subtotal : IDR {changeToString(getTotal())}</p>
        <p>Tax 10% : IDR {changeToString(getTotal() * 0.1)}</p>
        <p>Total : IDR {changeToString(getTotal() + (0.1 * getTotal()))}</p>
      </div>
       <div className="p-2">
         <h1 className='text-xl text-white'>Enter your Promo Code</h1>
         <input type="text" name="" id="" className='p-2 rounded-lg mt-3 w-full' placeholder='Promo Code' />
         <button className='mt-4 p-2 bg-white text-gray-800 border border-gray-700 rounded-lg'>Get Promo Code</button>
       </div>
      <p className='text-lg text-white text-center'>Scan with This QRCode for more Promos</p>
       <div className='p-2 mx-auto'>
     
        <QRCodeSVG value='https://www.tokopedia.com/'/>
       </div>
    </div>
  )
}
