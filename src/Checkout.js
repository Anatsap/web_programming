import './Checkout.css';
import { useSelector, useDispatch } from "react-redux";
import { removefromCart } from "./redux/cartSlice";
import Order from './cart_pages/Order';
import {Link} from 'react-router-dom';

function Checkout() {
  const cartitems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Cart items</h2>

      {cartitems.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888" }}>Cart is empty </p>
      ) : (
        cartitems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="cart-details">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
            <button
              className="remove-btn"
              onClick={() => dispatch(removefromCart({ id: item.id }))}
            >
              Remove
            </button>
          </div>

        ))
      )}
            <Link to={`/order`}>
            <button
              className="order-btn"
            >
              Proceed to order
            </button>
            </Link>
    </div>
  );
}

export default Checkout;
