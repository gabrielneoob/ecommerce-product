import { useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import leftArrow from "../../assets/icons/icon-previous.svg";
import rightArrow from "../../assets/icons/icon-next.svg";

export type ProductProps = {
  openProductModal: boolean;
  setOpenProductModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductModal = ({
  setOpenProductModal,
  openProductModal,
}: ProductProps) => {
  const { product } = useProduct();
  const [productIndex, setProductIndex] = useState(0);

  return (
    <div className="pl-14">
      <div className="w-full flex justify-end">
        <span
          className="text-end block mb-3 text-orange font-bold cursor-pointer text-xl w-max"
          onClick={() => setOpenProductModal(false)}
        >
          X
        </span>
      </div>
      <div className="size-96 mb-7 relative">
        <div
          className="size-10 rounded-full bg-light-grayish-blue absolute -left-5 top-44 flex items-center justify-center cursor-pointer"
          onClick={() => {
            if (productIndex > 0) {
              setProductIndex((previous) => previous - 1);
            }
          }}
        >
          <img src={leftArrow} alt="" />
        </div>
        <img
          src={product.bgs[productIndex].src}
          className="rounded-lg shadow-lg"
          alt="sneaker"
        />
        <div
          className="size-10 rounded-full bg-light-grayish-blue absolute -right-4 top-44 flex items-center justify-center cursor-pointer"
          onClick={() => {
            if (productIndex < 3) {
              setProductIndex((previous) => previous + 1);
            }
          }}
        >
          <img src={rightArrow} alt="" />
        </div>
      </div>
      <div className="flex gap-x-5">
        {product.bgs.map((item) => (
          <img
            src={item.src}
            className="size-20 rounded-lg shadow-lg "
            key={item.src}
            onClick={() => setProductIndex(Number(item.id) - 1)}
            style={{
              opacity:
                Number(item.id) - 1 === productIndex && openProductModal
                  ? "0.5"
                  : "1",
              border:
                Number(item.id) - 1 === productIndex && openProductModal
                  ? "2px solid hsl(26, 100%, 50%)"
                  : "0px solid transparent",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductModal;
