import React from 'react'
import './SubTotal.css'
import { useSelector } from 'react-redux';
import { getTotal } from './cartSlice';
import { Link } from 'react-router-dom';

function Subtotal(){
    const cart = useSelector(state => state.cart.cart)
    const totalItem = cart.reduce((amount, item) => amount + item.quantity, 0);
    const totalPrice = cart.reduce((amount, item) => amount + item.quantity * item.price, 0);
    return(
        <div className='subtotal'>
            <div className='subtotal_area'>
                <p>Subtotal ({totalItem} items) : ${totalPrice}</p>
                <Link to={'/order'}>
                <button>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    )
}
export default Subtotal;