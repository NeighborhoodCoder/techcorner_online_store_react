import "./item.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useState } from "react";
import storeContext from "../context/storeContext";

const Item = (props) => {
  // state variables
  const [amount, setAmount] = useState(1);
  const cart = useContext(storeContext).cart;
  const addProductToCart = useContext(storeContext).addProductToCart;

  // logic (fns)
  const getAmount = (a) => {
    setAmount(a);
    console.log(`Quantity is now ${a}`);
  };

  const getTotal = () => {
    let price = props.data.price;
    let total = price * amount;
    return total.toFixed(2);
  };

  const btnCart = () => {
    let prod = { ...props.data };
    prod.amount = amount;
    addProductToCart(prod);
  };

  // effects

  // return
  return (
    <div className="item">
      <img src={"/img/" + props.data.image} alt="" />
      <h5>{props.data.title}</h5>
      <label className="price">${props.data.price}</label>
      <br />
      <label className="shipping">Free Shipping</label>
      <hr />
      <div className="item-buttons">
        <label className="total">Total: ${getTotal()}</label>
        <QuantityPicker onChange={getAmount} />
        <button onClick={btnCart} className="btn btn-sm btn-success">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
