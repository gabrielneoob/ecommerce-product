import logo from "../../assets/icons/logo.svg";
import cartIcon from "../../assets/icons/icon-cart.svg";
import menu from "../../assets/icons/icon-menu.svg";
import userAvatar from "../../assets/images/image-avatar.png";
import closeBtn from "../../assets/icons/icon-close.svg";
import { useOpenModal } from "../../hooks/useOpenModal";
import CartModal from "../cart-modal/cart-modal.component";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

const Header = () => {
  const { openModal, toggleModal } = useOpenModal();
  const { windowSize } = useWindowSize();
  const [openSizeBar, setOpenSizeBar] = useState(false);
  const { cart } = useCart();
  const breakPoint = 850;

  return (
    <header className="flex p-10 items-center justify-between border-b mb-20 sm:mb-3 sm:p-2">
      <div className="flex gap-x-12 items-center mr-4">
        <div className="sm:flex sm:gap-x-4">
          {windowSize.width < breakPoint && (
            <img src={menu} alt="" onClick={() => setOpenSizeBar(true)} />
          )}

          {openSizeBar && windowSize.width < breakPoint && (
            <div
              className="fixed top-0 left-0 bottom-0 right-0"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <div className="bg-white w-7/12 p-4 h-full">
                <div className="mb-12">
                  <img
                    src={closeBtn}
                    alt=""
                    onClick={() => setOpenSizeBar(false)}
                  />
                </div>
                <ul className="mobile-ul">
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Wonen</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          )}
          <img src={logo} alt="sneakers logo" className="cursor-pointer" />
        </div>
        {windowSize.width > breakPoint && (
          <ul className="flex gap-x-8 text-dark-grayish-blue">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
      </div>

      <div className="flex items-center gap-x-8 sm:gap-x-4">
        <div className="relative z-20">
          {cart.length > 0 && (
            <div className="absolute size-5 bg-orange z-0 flex items-center justify-center rounded-full text-xs text-white h-4 w-5 -top-3 left-2">
              {cart.length}
            </div>
          )}
          <img
            src={cartIcon}
            alt=""
            className="relative"
            onClick={toggleModal}
          />
          {openModal && <CartModal />}
        </div>
        <img
          src={userAvatar}
          alt=""
          height={50}
          width={50}
          className="border-2 transition duration-200 ease-in-out border-transparent rounded-full hover:border-2 hover:border-orange"
        />
      </div>
    </header>
  );
};

export default Header;
