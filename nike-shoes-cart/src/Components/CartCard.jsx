import React from 'react';

const CartCard = (data) => {
    // console.log(data);
    return (
        <div className='cartcard'>
            <div className="cartcard-image">
                <img src={data.data.image} alt="" />
            </div>
            <div className="cartcard-details">
                <h3 className='product-title'>{data.data.name}</h3>
                <p className='product-type'>{data.data.type}</p>
                <p className='product-price'>MRP : ₹ {data.data.price}</p>
            </div>
            <ion-icon style={{fontSize:'2rem', cursor:'pointer'}} name="trash-outline"></ion-icon>
        </div>
    )
}

export default CartCard