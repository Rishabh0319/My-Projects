import React, { useContext } from 'react'
import { Context } from '../Context/Context';
const ProductCard = (data) => {

  const contextData = useContext(Context);

  const recData = data.data
  return (
    <div className='product-card' key={recData.productId}>
      <div className="image-cont">
        <img src={recData.image} alt="" />
      </div>
      <div className="details-cont">
        <h3 className='product-title'>{recData.name}</h3>
        <p className='product-type'>{recData.type}</p>
        <p className='product-price'>MRP : ₹ {recData.price}</p>
      </div>
      <button className='ATC-btn' onClick={() => {
        contextData.setCartDataCollector([...contextData.cartDataCollector, {
          productId: recData.productId,
          name: recData.name ,
          image: recData.image,
          type: recData.type,
          price: recData.price
        }])
      }}>Add To Cart</button>
    </div>
  )
}

export default ProductCard