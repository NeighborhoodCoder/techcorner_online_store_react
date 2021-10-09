import "./cart.css";
import { useContext } from "react";
import storeContext from "../context/storeContext";
import ItemOnCart from "./itemOnCart";

const Cart = (props) => {
  const cart = useContext(storeContext).cart;

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.amount * prod.price;
    }
    return total.toFixed(2);
  };

  return (
    <div className="cart-page container">
      <h1>Ready To Order?</h1>
      <h6>You currently have {cart.length} items in your cart</h6>
      <hr />
      <div className="row my-3">
        <div className="cart-item-container col-10">
          {cart.map((prod) => (
            <ItemOnCart key={prod._id} data={prod} />
          ))}
        </div>
        <div className="total-container col-2">
          <h4>Order Total:</h4>
          <h3>$ {getTotal()}</h3>
          <hr />
          <button className="btn btn-block btn-primary">Submit Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
