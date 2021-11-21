import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    // let total = cart.reduce((previous, current) => previous + current.price, 0)
    let total = 0;
    let totalQuantity = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        // total = total + product.price * totalQuantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;


    }
    // condation dea kora jai 
    // const shipping = props.cart.length * 15;
    // this is condation 
    const shipping = total > 0 ? 15 : 0;
    const text = (total + shipping) * 0.10;
    const grandTotal = total + shipping + text;
    return (
        <div>
            <h2>Order Summary </h2>
            <h2>order item:{totalQuantity}</h2>
            <br></br>
            <h3>Items:$ {total.toFixed(2)}</h3>
            <h4>Shipping: $ {shipping.toFixed(2)}</h4>
            <h5>Text : $ {text.toFixed(2)}</h5>
            <h2>Grand Total : $ {grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;