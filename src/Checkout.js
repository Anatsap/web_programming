import './Checkout.css';
import { useSelector, useDispatch } from "react-redux";
import { addtoCart, removefromCart, updateItemQuantity, updateCartPrices } from "./redux/cartSlice";

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
              onClick={() => dispatch(addtoCart({ id: item.id, quantity: item.quantity + 1 }))}
            >
              Add
            </button>
            <button
              className="remove-btn"
              onClick={() => dispatch(removefromCart({ id: item.id, quantity: item.quantity - 1 }))}
            >
              Remove
            </button>
            <button
              className="update"
              onClick={() => dispatch(updateItemQuantity({item: item.id, quantity: item.quantity}))}
            >
              +1
            </button>
            <button
              className="price"
              onClick={() => dispatch(updateCartPrices({item: item.id}))}
            >
              Total price
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Checkout;
