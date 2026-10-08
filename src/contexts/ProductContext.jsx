import React, { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products] = useState(data);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}