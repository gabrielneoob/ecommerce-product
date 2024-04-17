import { useContext } from "react";
import { ModalContext } from "../context/modalContext";

export const useOpenModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Context only used inside a provider");
  }

  return context;
};
