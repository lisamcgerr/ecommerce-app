import React from 'react';
import '../style/Product.css';

const Product = ({id, title, price, image, rating}) => {

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
            <button className="product__button" >Add to Basket</button>
        </div>
    )
}

export default Product;