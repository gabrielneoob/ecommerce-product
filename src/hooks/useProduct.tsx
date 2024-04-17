import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("error");
  }

  return context;
};
