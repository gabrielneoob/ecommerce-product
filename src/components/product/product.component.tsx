import leftArrow from "../../assets/icons/icon-previous.svg";
import rightArrow from "../../assets/icons/icon-next.svg";
import { useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import { ProductProps } from "../product-modal/product-modal.component";
import { useWindowSize } from "../../hooks/useWindowSize";

const Product = ({ openProductModal, setOpenProductModal }: ProductProps) => {
  const { product } = useProduct();
  const [productIndex, setProductIndex] = useState(0);
  const { windowSize } = useWindowSize();

  return (
    <div className=" px-7" style={{ flex: "0.4" }}>
      <div
        className="size-96 mb-7 sm:h-auto relative"
        onClick={() => {
          if (windowSize.width > 850) {
            setOpenProductModal(true);
          }
        }}
      >
        {windowSize.width < 850 && (
          <div
            className="size-10 rounded-full bg-light-grayish-blue absolute left-3 top-44 flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (productIndex > 0) {
                setProductIndex((previous) => previous - 1);
              }
            }}
          >
            <img src={leftArrow} alt="" />
          </div>
        )}
        <img
          src={product.bgs[productIndex].src}
          className="rounded-lg shadow-lg"
          alt="sneaker"
        />
        {windowSize.width < 850 && (
          <div
            className="size-10 rounded-full bg-light-grayish-blue absolute right-3 top-44 flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (productIndex < 3) {
                setProductIndex((previous) => previous + 1);
              }
            }}
          >
            <img src={rightArrow} alt="" />
          </div>
        )}
      </div>
      {windowSize.width > 850 && (
        <div className="flex gap-x-5">
          {product.bgs.map((item) => (
            <img
              src={item.src}
              className="size-20 rounded-lg shadow-lg"
              key={item.src}
              onClick={() => setProductIndex(Number(item.id) - 1)}
              style={{
                opacity:
                  Number(item.id) - 1 === productIndex && !openProductModal
                    ? "0.5"
                    : "1",
                border:
                  Number(item.id) - 1 === productIndex && !openProductModal
                    ? "2px solid hsl(26, 100%, 50%)"
                    : "0px solid transparent",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
