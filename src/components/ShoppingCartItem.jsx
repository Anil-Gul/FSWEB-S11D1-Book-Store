import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { CartContext } from "../contexts/CartContext";

const ShoppingCartItem = (props) => {
  const { removeItem } = useContext(CartContext);

  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.id)}>
          Remove from cart
        </button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default ShoppingCartItem;