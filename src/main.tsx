import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModalContextProvider } from "./context/modalContext.tsx";
import { ProductProvider } from "./context/productContext.tsx";
import { CartProvider } from "./context/cartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>
);
