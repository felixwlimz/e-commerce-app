import React from 'react'
import { Navbar } from '../Components/Navbar';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FiShoppingCart } from 'react-icons/fi';
import { RiStarSFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice';


export default function ProductPage() {

  const { productId } = useParams()
  const dispatch = useDispatch();

  const [productDetail, setProductDetail] = useState({});

  const getDatabyId = useCallback(async () => {
    const product = await axios.get(`http://localhost:8080/api/products/${productId}`);
    setProductDetail(product.data.data);
  }, [productId])


  useEffect(() => {
    getDatabyId();
  }, [productId, getDatabyId]);



  return (
    <div className='w-full'>
      <Navbar stateContext={productDetail}/>

      <div className="container lg:grid lg:grid-cols-2 flex flex-col items-center lg:m-0 justify-evenly p-[3%] gap-6">
        <img src={productDetail.productImage} className='lg:h-[400px] lg:w-[400px] w-[250px] h-[250px]' alt='product-img' />
        <div className="flex flex-col lg:justify-around items-start lg:gap-8 gap-4">
          <h1 className='text-2xl font-bold'>{productDetail.productName}</h1>
          <div className="inline-flex gap-3">
            <span className='text-yellow-600 pr-2 inline-flex gap-2 border-r-2'>
              <RiStarSFill />
              <p className='text-sm font-semibold text-black'>{productDetail.productRating} of 5</p>
            </span>
            <span className='text-black inline-flex gap-2 text-sm font-semibold'>
              {productDetail.productSold} Sold
            </span>
          </div>
          <h2 className='text-xl font-bold text-gray-500'>IDR {productDetail.productPrice}</h2>
          <div className='inline-flex gap-2'>
            <button type='button' className='p-2 text-green-600 border-2 rounded-lg hover:bg-gray-100 inline-flex gap-2' onClick={() => dispatch(addToCart(productDetail))}><FiShoppingCart className='mt-1' /> Add To Cart</button>
            <button type='button' className='px-2 bg-green-600 text-white rounded-lg'>Buy Now</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
