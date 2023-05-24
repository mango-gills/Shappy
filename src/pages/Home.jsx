import React from "react";
import FeaturedImage from "../components/FeaturedImage";
import FeaturedProducts from "../components/ProductsCarouselComponent/FeaturedProductsComponent";
import BestSellerComponent from "../components/ProductsCarouselComponent/BestSellerComponent";
import DailyDeals from "../components/DailyDeals";

const Home = () => {
  return (
    <>
      <FeaturedImage />
      <FeaturedProducts />
      <BestSellerComponent />
      <DailyDeals />
    </>
  );
};

export default Home;
