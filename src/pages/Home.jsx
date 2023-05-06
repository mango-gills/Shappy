import { ProductProvider } from "../store/ProductsAPIContext";

import FeaturedImage from "../components/FeaturedImage";
import FeaturedProducts from "../components/FeaturedProductsComponent";
import React from "react";
import BestSellerComponent from "../components/BestSellersComponent/BestSellerComponent";

const Home = () => {
  return (
    <>
      <FeaturedImage />
      <FeaturedProducts />
      <BestSellerComponent />
    </>
  );
};

export default Home;
