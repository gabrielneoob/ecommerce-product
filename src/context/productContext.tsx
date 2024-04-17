import { ReactNode, createContext, useState } from "react";
import productsBg1 from "../assets/images/image-product-1.jpg";
import productsBg2 from "../assets/images/image-product-2.jpg";
import productsBg3 from "../assets/images/image-product-3.jpg";
import productsBg4 from "../assets/images/image-product-4.jpg";

type BgSneakerProps = {
  id: string;
  src: string;
};

export type SneakerProps = {
  brandName: string;
  description: string;
  value: string;
  descount: string;
  cartCount: number;
  bgs: BgSneakerProps[];
};

type ProductProps = {
  product: SneakerProps;
  setProduct: React.Dispatch<React.SetStateAction<SneakerProps>>;
};

export const ProductContext = createContext<ProductProps>({
  product: {
    brandName: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneaker are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    descount: "50",
    value: "125.00",
    cartCount: 0,
    bgs: [
      {
        id: "1",
        src: productsBg1,
      },
      {
        id: "2",
        src: productsBg2,
      },
      {
        id: "3",
        src: productsBg3,
      },
      {
        id: "4",
        src: productsBg4,
      },
    ],
  },
  setProduct: () => {},
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<SneakerProps>({
    brandName: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneaker are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    descount: "50",
    value: "125.00",
    cartCount: 0,
    bgs: [
      {
        id: "1",
        src: productsBg1,
      },
      {
        id: "2",
        src: productsBg2,
      },
      {
        id: "3",
        src: productsBg3,
      },
      {
        id: "4",
        src: productsBg4,
      },
    ],
  });

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
