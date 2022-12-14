import React from 'react';
import '../style/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../contexts/StateProvider';
import { getBasketTotal } from '../contexts/reducer';

const Subtotal = () => {

    const [{basket}] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length}) items: <strong>{value}</strong></p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix="$" />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;