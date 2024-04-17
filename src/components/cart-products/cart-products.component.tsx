import { SneakerProps } from "../../context/productContext";
import trashIcon from "../../assets/icons/icon-delete.svg";
import { useCart } from "../../hooks/useCart";

const CartProducts = ({ item }: { item: SneakerProps[] }) => {
  const { resetCart } = useCart();
  return (
    <div>
      <div className="flex justify-center items-center gap-4 px-2">
        <img
          src={item[0].bgs[0].src}
          alt="sneaker"
          className="size-12 rounded-md"
        />
        <div>
          <p className="font-normal text-sm">{item[0].brandName}</p>
          <div className="flex gap-x-2">
            <p className="font-normal">
              ${item[0].value} x {item.length}
            </p>
            <p>${Number(item[0].value) * item.length}</p>
          </div>
        </div>
        <img src={trashIcon} alt="trash icon" onClick={resetCart} />
      </div>
      <button className="bg-orange p-2 rounded-xl text-white self-end w-11/12 mt-4">
        Checkout
      </button>
    </div>
  );
};

export default CartProducts;
