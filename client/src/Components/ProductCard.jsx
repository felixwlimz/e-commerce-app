import React from 'react'
import { RiStarSFill } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import { Link } from 'react-router-dom';


export const ProductCard = ({productId,imgSrc, productName, productPrice, stars, productSold, location}) => {
    
    const changeToString = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className='max-w-[190px] border border-gray-200 rounded-lg shadow-md'>
            <a href='#img'>
                <img className='rounded-t-lg' src={imgSrc} alt='product' />
            </a>
            <div className="p-4">
                <Link to={`/product/${productId}`} className="font-bold">{productName}</Link>
                <p className='text-gray-600 font-semibold'>IDR {changeToString(productPrice)}</p>
                <div className='buttons inline-flex gap-4 justify-between'>
                    <span className='text-yellow-600 text-sm inline-flex gap-2'>
                        <RiStarSFill />
                        <p className='text-xs font-semibold text-black'>{stars} of 5</p>
                    </span>
                    <span className='text-xs font-semibold'>{productSold.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sold</span>
                </div>
                <span className='text-gray-400 text-xs inline-flex gap-1'>
                    <GoLocation/> {location}
                </span>
            </div>
        </div>
    )
}
