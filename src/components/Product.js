import React from 'react';
import '../style/Product.css';
import { useStateValue } from '../contexts/StateProvider';

const Product = ({id, title, price, image, rating}) => {
    const [ , dispatch ] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
    }
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(Math.round(rating)).fill('⭐️').join('')}
            </div>
            {/* @TODO add image alt */}
            <img className="product__image" src={image} alt=""/>
            <button className="product__button" onClick={addToBasket} >Add to Basket</button>
        </div>
    )
}

export default Product;