import { useCart } from "../../hooks/useCart";
import CartProducts from "../cart-products/cart-products.component";

const CartModal = () => {
  const { cart } = useCart();
  return (
    <div className="absolute bg-white z-10 size-56 w-80 shadow-xl -right-28 top-16 rounded-md sm:-right-4">
      <div className="border-b p-5 ">
        <p className="font-bold">Cart</p>
      </div>
      <div className="h-3/5 flex flex-col text-center justify-center text-dark-grayish-blue font-bold">
        {cart.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          <CartProducts item={cart} />
        )}
      </div>
    </div>
  );
};

export default CartModal;
