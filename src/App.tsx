import { useState } from "react";
import Container from "./components/container/container.component";
import Header from "./components/header/header.component";
import ProductDetails from "./components/product-details/product-details";
import Product from "./components/product/product.component";
import ProductModal from "./components/product-modal/product-modal.component";
import Footer from "./components/footer/footer.component";
// import { useWindowSize } from "./hooks/useWindowSize";

const App = () => {
  const [openProductModal, setOpenProductModal] = useState(false);
  // const { windowSize } = useWindowSize();

  return (
    <div className="">
      {openProductModal && (
        <div
          className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <ProductModal
            openProductModal={openProductModal}
            setOpenProductModal={setOpenProductModal}
          />
        </div>
      )}
      <Container>
        <Header />
        <div className="flex gap-x-4 sm:flex-col sm:items-center">
          <Product
            openProductModal={openProductModal}
            setOpenProductModal={setOpenProductModal}
          />
          <ProductDetails />
          <Footer />
        </div>
      </Container>
    </div>
  );
};

export default App;
