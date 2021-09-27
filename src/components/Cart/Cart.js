import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;

    for (const developer of cart) {
        total = total + developer.fee;
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <p>Total: ${total.toFixed(2)}</p>

        </div>
    );
};
export default Cart;