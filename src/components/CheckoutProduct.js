import React from 'react';
import '../style/CheckoutProduct.css';
import { useStateValue } from '../contexts/StateProvider';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [ , dispatch ] = useStateValue();

    console.log(id, title, image, price, rating);

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: id
        })
    }

    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct__image " src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(Math.round(rating)).fill('⭐️').join('')}
                </div>
                <button onClick={removeFromBasket} className="checkoutProduct__button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;