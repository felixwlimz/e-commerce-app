import React, {useEffect, useState} from 'react'
import { Navbar } from '../Components/Navbar'
import { ProductCard } from '../Components/ProductCard'
import axios from 'axios';

export default function Home() {
   
  const [products, setProduct] = useState([]);
     
  const cart = JSON.parse(localStorage.getItem('cart'));


    useEffect(() => {
        const getAllData = async () => {
            const response = await axios.get('http://localhost:8080/api/products');
            setProduct(response.data.data);
            console.log(response.data.data);

        }
        getAllData();
    }, []);

    return (
        <div className='w-full'>
            <Navbar stateContext={cart}/>
            <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-2 p-[3%] gap-4'>
                { 
                  products.map((product) => (
                    <ProductCard 
                      key= {product._id}
                      productId={product._id}
                      imgSrc={product.productImage}
                      productName={product.productName}
                      productPrice={product.productPrice}
                      location={product.location}
                      productSold={product.productSold}
                      stars={product.productRating}
                    /> 
                  ))
                }
              
            </div>
        </div>
    )
}
