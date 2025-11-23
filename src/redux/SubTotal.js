import React from 'react'
import './SubTotal.css'
import { useSelector } from 'react-redux';
import { getTotal } from './cartSlice';

function Subtotal(){
    const cart = useSelector(state => state.cart.cart)
    const totalItem = cart.reduce((amount, item) => amount + item.quantity, 0);
    const totalPrice = cart.reduce((amount, item) => amount + item.quantity * item.price, 0);
    return(
        <div className='subtotal'>
            <div className='subtotal_area'>
                <p>Subtotal ({totalItem} items) : ${totalPrice}</p>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}
export default Subtotal;