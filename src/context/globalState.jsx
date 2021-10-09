import storeContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    id: 4321,
    name: "Kenny",
    email: "ken@gmail.com",
  });

  const addToCart = (product) => {
    let newCart = [...cart];
    let found = false;

    for (let i = 0; i < newCart.length; i++) {
      let prod = newCart[i];
      if (prod._id === product._id) {
        console.log("Item already in cart");
        prod.amount += product.amount;
        found = true;
        console.log(newCart);
      }
    }
    if (!found) {
      console.log("Added new item to cart");
      newCart.push(product);
    }

    setCart(newCart);
  };

  return (
    <storeContext.Provider
      value={{
        cart: cart,
        user: user,

        addProductToCart: addToCart,
        removeProductFromCart: (productId) => {},
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};

export default GlobalState;
