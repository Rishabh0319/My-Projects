import React, { useContext } from 'react';
import './App.css';
import ProductCard from './Components/ProductCard';
import CartCard from './Components/CartCard';
import products from './database/products.js';
import { Context } from './Context/Context';

const App = () => {

  const contextData = useContext(Context);
  console.log(contextData.cartDataCollector);

  return (
    <div className='app'>
      <div className='productContainer'>
        {
          products.map((data) => {
            return <ProductCard data={data} />
          })
        }
      </div>
      <div className='cartContainer'>
         {
          contextData.cartDataCollector.map((item)=>{
            return <CartCard data={item}/>
          })
         }
      </div>
    </div>
  )
}

export default App;