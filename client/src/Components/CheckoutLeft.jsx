import React from 'react'
import { useState } from 'react'
import { CreditCardForm } from './CreditCardForm';
import { FaLock } from 'react-icons/fa';

export const CheckoutLeft = () => {
   
    const [showForm, setShowForm] = useState(false);


  return (
      <form action="" className="flex flex-col gap-2 justify-between">
          <div className="p-2">
              <h1 className='text-4xl font-bold'>Checkout</h1>
          </div>
          <div className='p-2 flex flex-col gap-2'>
              <p className='text-gray-700 m-auto md:w-[60%] text-lg font-semibold'>Instant Checkout with</p>
              <div className='inline-flex gap-2 justify-around md:w-[60%]'>
                  <button className='border border-gray-200 rounded-md'><img src="https://obrolanbisnis.com/wp-content/uploads/2021/04/Logo-ShopeePay.png" alt="" className='h-[40px] w-[80px]' /></button>
                  <button className='border border-gray-200 rounded-md'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png" alt="" className='h-[30px] w-[100px]' /></button>
                  <button className='border border-gray-200 rounded-md'><img src="https://image.cermati.com/v1534321809/pm2gnkl5edgago9h4lho.png" alt='' className='h-[40px] w-[80px]' /></button>
                  <button className='border border-gray-200 rounded-md'><img src="https://www.linkaja.id/uploads/images/merchant/YW50aWtvZGVfXzE1NTEyNDQ5NjBfbG9nby1saW5rYWphLXBuZw.png" alt='' className='h-[40px] w-[60px]' /></button>
              </div>
          </div>
          <p className='m-auto w-[50%] text-lg font-semibold'>Or Pay With</p>
          <div className="p-2 block">
              <p className='font-semibold ml-1'>Email</p>
              <input type="email" className='border border-gray-300 rounded-md p-2 md:w-[60%] w-[400px] m-1' placeholder='Enter your Email' required />
          </div>
          <div className="p-2 block">
              <p className='font-semibold ml-1'>Name</p>
              <input type="text" className='border border-gray-300 rounded-md p-2 md:w-[60%] w-[400px]  m-1' placeholder='Name' required />
          </div>
          <div className="p-2 block">
              <p className='font-semibold ml-1'>Company</p>
              <input type="text" className='border border-gray-300 rounded-md p-2 md:w-[60%] w-[400px] m-1' placeholder='Company' />
          </div>
          <div className="p-2 block">
              <p className='font-semibold ml-1'>Shipment Address</p>
              <textarea rows={6} cols={5}  className='border border-gray-300 rounded-md p-2 md:w-[60%] w-[400px]  m-1' placeholder='Address' required />
          </div>
          <div className="p-2  inline-flex justify-evenly md:w-[60%]">
              <div>
                  <p className='font-semibold ml-1'>City</p>
                  <input type="text" className='border border-gray-300 rounded-md p-2 w-[80%] m-1' placeholder='City' required />
              </div>
              <div>
                  <p className='font-semibold ml-1'>Province</p>
                  <input type="text" className='border border-gray-300 rounded-md p-2 w-[80%] m-1' placeholder='Province' required />
              </div>
              <div>
                  <p className='font-semibold ml-1'>Postal Code</p>
                  <input type="text" className='border border-gray-300 rounded-md p-2 w-full m-1' placeholder='Postal Code' required />
              </div>
          </div>
          <p className='text-gray-700 text-lg md:w-[60%]  p-2 font-semibold'>Payment Method</p>
         <div className="mx-2 my-1 p-2 inline-flex gap-3 border border-gray-300 md:w-[60%] w-[400px] justify-between rounded-lg">
            <span>
                  <input type="radio" className="radio" name='payment' value='credit-card' id='credit-card' onClick={() => setShowForm(true)} />
                  <span className='ml-3 ' >Credit Card</span>
            </span>
          
            <span className='inline-flex justify-end items-end gap-4'>
                  <img className='h-[20px] w-[60px]'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' alt='visa'/>
                  <img className='h-[20px] w-[40px]' src='https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png' alt='mastercard' />
                  <img className='h-[20px] w-[50px]' src='https://upload.wikimedia.org/wikipedia/commons/8/83/Gerbang_Pembayaran_Nasional_logo.svg' alt='gpn' />
            </span>
         </div>
          {showForm && <CreditCardForm/>}
         <div className='mx-2 my-1 p-2 border border-gray-300 rounded-lg md:w-[60%] w-[400px]'>
              <input type="radio" value='paypal' name='payment' id='paypal'/>
              <span className='ml-3 '>Paypal</span>
         </div>

         <button type='button' className='md:ml-auto m-auto mt-2 bg-green-600 p-2 rounded-lg text-white inline-flex gap-2'><FaLock className='mt-1'/> Proceed to Payment</button>
      </form>
  )
}
