import { ProductProvider, ProductsContext } from "../store/ProductsAPIContext";

import FeaturedImage from "../components/FeaturedImage";
import FeaturedProducts from "../components/FeaturedProductsComponent";
import React from "react";

const Home = () => {
  return (
    <>
      <ProductProvider>
        <FeaturedImage />

        <div className="bg-neutral-300 w-full mt-5 mb-3 text-lg pt-1 px-2 text-black font-JosefinSansSemiBold">
          Featured Products
        </div>
        <FeaturedProducts />
      </ProductProvider>
    </>
  );
};

export default Home;
