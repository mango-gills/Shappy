import { ProductProvider, ProductsContext } from "../store/ProductsAPIContext";

import FeaturedImage from "../components/FeaturedImage";
import FeaturedProducts from "../components/FeaturedProductsComponent";
import React from "react";
import BestSellerComponent from "../components/BestSellersComponent/BestSellerComponent";

const Home = () => {
  return (
    <main>
      <ProductProvider>
        <FeaturedImage />
        <FeaturedProducts />
        <BestSellerComponent />
      </ProductProvider>
    </main>
  );
};

export default Home;
