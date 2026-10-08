import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  // s11d1 anahtarı ile localStorage üzerinde tutuyoruz
  const [cart, setCart] = useLocalStorage("s11d1", []);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}