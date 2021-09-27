import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0, Item;

    for (const developer of cart) {
        total = total + developer.fee;
        Item = developer.name;
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <p>Total: ${total.toFixed(2)}</p>
            <h5>Item Name : {Item}</h5>

        </div>
    );
};
export default Cart;