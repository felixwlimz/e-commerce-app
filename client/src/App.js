import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import Checkout from './Pages/Checkout';

function App() {
  return (
   <div className='font-poppins'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:productId' element={<ProductPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
   </div>
  );
}

export default App;
