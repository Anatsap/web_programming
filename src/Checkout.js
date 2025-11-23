import './Checkout.css';
import { useSelector, useDispatch } from "react-redux";
import { addtoCart, removefromCart, increment, decrement} from "./redux/cartSlice";
import Subtotal from './redux/SubTotal';

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
              <p>{item.package}</p>
            </div>
            <button
              className="remove-btn"
              onClick={() => dispatch(removefromCart({ id: item.id, quantity: item.quantity - 1 }))}
            >
              Remove
            </button>
            <div class="counter">
              <button id="decrease"
              onClick={() => dispatch(decrement(item.id))}
              >-</button>
              <div class="count">{item.quantity}</div>
              <button id="increase"
              onClick={() => dispatch(increment(item.id))}
              >+</button>
            </div>
          </div>
        ))
      )}
      <div className='subtotal'>
      <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
