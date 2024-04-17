import { ReactNode, createContext, useState } from "react";
import { SneakerProps } from "./productContext";

type CartContextProps = {
  cart: SneakerProps[];
  setCart: React.Dispatch<React.SetStateAction<SneakerProps[]>>;
  setItemCart: (product: SneakerProps, total: number) => unknown;
  resetCart: () => unknown;
  deleteItemCart: () => unknown;
};

export const CartContext = createContext<CartContextProps>({
  cart: [],
  resetCart: () => {},
  setCart: () => {},
  setItemCart: () => {},
  deleteItemCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<SneakerProps[]>([]);

  const resetCart = () => {
    setCart([]);
  };

  const setItemCart = (product: SneakerProps, total: number) => {
    // setCart([...cart, product]);
    if (total > 0) {
      setCart((previous) => {
        for (let i = 0; i < total; i++) {
          previous = [...previous, product];
        }

        return previous;
      });
    }
  };

  const deleteItemCart = () => {
    // setCart(newCartItem);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        resetCart,
        setCart,
        setItemCart,
        deleteItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
