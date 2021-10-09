import "./itemOnCart.css";

const ItemOnCart = (props) => {
  const getTotal = () => {
    let total = props.data.price * props.data.amount;
    return total.toFixed(2);
  };

  return (
    <div className="item-on-cart-page row">
      <img
        className="col-1"
        src={"/img/" + props.data.image}
        alt={props.data.title}
      />

      <div className="cart-item-text col-7">
        <h6>{props.data.title}</h6>
        <label>{props.data.category}</label>
      </div>

      <label className="col-1">Price: ${props.data.price}</label>
      <label className="col-1">Amount: {props.data.amount}</label>
      <label className="col-1">Total: {getTotal()}</label>
      <div className="col-1">
        <button className="btn btn-sm btn-danger">Remove</button>
      </div>
    </div>
  );
};

export default ItemOnCart;
