import React, { useContext } from "react";
import { ScCartCheckout } from "./scParts";
import Item from "./ShoppingCartItem";
import { CartContext } from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      <ScCartCheckout>
        <h1>My Cart</h1>
        <p>Total: ${getCartTotal()}</p>
      </ScCartCheckout>

      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ShoppingCart;