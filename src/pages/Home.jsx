import { ProductProvider, ProductsContext } from "../store/ProductsAPIContext";

import FeaturedImage from "../components/FeaturedImage";
import FeaturedProducts from "../components/FeaturedProductsComponent";
import React from "react";
import BestSellerComponent from "../components/BestSellersComponent/BestSellerComponent";

const Home = () => {
  return (
    <>
      <ProductProvider>
        <FeaturedImage />
        <FeaturedProducts />
        <div className="w-full border-t-2"></div>
        <BestSellerComponent />
      </ProductProvider>
    </>
  );
};

export default Home;
