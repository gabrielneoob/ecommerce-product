import { useProduct } from "../../hooks/useProduct";
import cartIcon from "../../assets/icons/white-icon-cart.svg";
import plusIcon from "../../assets/icons/icon-plus.svg";
import minusIcon from "../../assets/icons/icon-minus.svg";
import { useCart } from "../../hooks/useCart";

const ProductDetails = () => {
  const { product, setProduct } = useProduct();
  const { setItemCart, deleteItemCart } = useCart();

  return (
    <div className="p-14 flex-1 flex flex-col gap-7 max-w-xl">
      <p className="text-orange font-semibold tracking-wider text-sm">
        SNEAKER COMPANY
      </p>
      <h1 className="text-4xl font-bold text-very-dark-blue">
        {product.brandName}
      </h1>
      <p className="text-dark-grayish-blue">{product.description}</p>
      <div>
        <div className="flex gap-x-3 items-center mb-1">
          <p className="font-bold text-2xl">${product.value}</p>
          <span className="text-orange bg-orange bg-opacity-25 p-1 rounded-md text-xs font-bold">
            ${product.descount}%
          </span>
        </div>
        <p className="text-sm text-grayish-blue line-through">
          ${(Number(product.value) * 100) / Number(product.descount)}
        </p>
      </div>
      <div className="flex w-full gap-x-10 items-center sm:flex-col">
        <div className="flex bg-light-grayish-blue w-36 h-16 rounded-lg items-center shadow-lg sm:w-full sm:mb-4">
          <button
            className="flex-1 flex justify-center h-full w-full items-center"
            onClick={() => {
              if (product.cartCount > 0) {
                setProduct((previous) => {
                  return { ...previous, cartCount: previous.cartCount - 1 };
                });
              }
            }}
          >
            <img src={minusIcon} />
          </button>
          <p className="flex-1 text-center">{product.cartCount}</p>
          <button
            className="flex-1 flex justify-center h-full w-full items-center"
            onClick={() => {
              setProduct((previous) => {
                return { ...previous, cartCount: previous.cartCount + 1 };
              });
              deleteItemCart();
            }}
          >
            <img src={plusIcon} />
          </button>
        </div>
        <div
          className="flex bg-orange text-white flex-1 justify-center gap-x-2 p-5 rounded-xl cursor-pointer shadow-lg sm:w-full"
          onClick={() => {
            if (product.cartCount > 0) {
              setItemCart(product, product.cartCount);
              setProduct((previous) => {
                return { ...previous, cartCount: 0 };
              });
            }
          }}
        >
          <img src={cartIcon} alt="cart icon" />
          <p className="text-sm">Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
