import React from "react";
import FeaturedImage from "../components/FeaturedImage";
import FeaturedProducts from "../components/ProductsCarouselComponent/FeaturedProductsComponent";
import BestSellerComponent from "../components/ProductsCarouselComponent/BestSellerComponent";

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
