import React from 'react';
import '../style/Checkout.css'
import { useStateValue } from '../contexts/StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            {/* @TODO replace image created by... */}
            <img
                className="checkout__ad"
                src="https://user-images.githubusercontent.com/73184313/131029015-fa2d4214-8a04-4480-b9c7-67a3ceed3384.png"
                alt="grey textured background that reads created by Lisa McGerr Full Stack Web Developer"
            />
            {basket?.length === 0 ? (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket is Empty</h2>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* @TODO render all checkout Products HERE */}
                    {basket?.map(item => ( 
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Checkout;
