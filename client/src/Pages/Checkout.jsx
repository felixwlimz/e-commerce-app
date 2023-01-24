import React from 'react'
import { CheckoutLeft } from '../Components/CheckoutLeft'
import { CheckoutRight } from '../Components/CheckoutRight'



export default function Checkout() {


  return (
    <div className='w-full'>
      <div className='p-[3%] md:grid md:grid-cols-cart flex flex-col gap-6'>
        <CheckoutLeft/>
        <CheckoutRight/>
      </div>
    </div>
  )
}
