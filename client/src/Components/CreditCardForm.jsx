import React from 'react'

export const CreditCardForm = () => {
  return (
      <form action="" className={`flex flex-col gap-2 justify-between`}>
          <div className="p-2 block">
              <p className='font-semibold ml-1'>Credit Card Number</p>
              <input type="text" className='border border-gray-300 rounded-md p-2 md:w-[60%] w-[400px] m-1' placeholder='1234 5678 9101' required />
          </div>
          <div className="inline-flex gap-2 p-2 md:w-[50%]">
              <div>
                  <p className='font-semibold ml-1'>Expiration Date</p>
                  <input type="text" className='border border-gray-300 rounded-md p-2 w-[50%] m-1' placeholder='Date' required />
              </div>
              <div>
                  <p className='font-semibold ml-1'>CVV</p>
                  <input type="password" className='border border-gray-300 rounded-md p-2 w-[50%] m-1' placeholder='CVV' required />
              </div>
              </div>
     </form>
  )
}
