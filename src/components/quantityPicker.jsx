import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
  // state variables
  let [quantity, setQuantity] = useState(1);

  //   logic (fns)
  const handleLess = () => {
    let val = quantity - 1;
    setQuantity(val);
    props.onChange(val);
    console.log(`Quantity Reduced To: ${val}`);
  };

  const handleMore = () => {
    let val = quantity + 1;
    setQuantity(val);
    props.onChange(val);
    console.log(`Quantity Increased To: ${val}`);
  };

  //   effects

  //   return
  return (
    <div className="quantity-picker">
      <button
        disabled={quantity === 1}
        onClick={handleLess}
        className="btn btn-sm btn-secondary btn-less"
      >
        -
      </button>
      <label>{quantity}</label>
      <button
        onClick={handleMore}
        className="btn btn-sm btn-secondary btn-more"
      >
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
