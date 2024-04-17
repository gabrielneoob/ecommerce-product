import { ReactNode, createContext, useState } from "react";

type ModalContextProps = {
  openModal: boolean;
  toggleModal: () => unknown;
};

export const ModalContext = createContext<ModalContextProps>({
  openModal: false,
  toggleModal: () => {},
});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const toggleModal = () => {
    setOpenModal((previous) => !previous);
  };
  const [openModal, setOpenModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        openModal,
        toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
