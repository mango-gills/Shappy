import React from "react";
import FeaturedImage from "../components/HomePageComponents/FeaturedImage";
import FeaturedProducts from "../components/ProductsCarouselComponent/FeaturedProductsComponent";
import BestSellerComponent from "../components/ProductsCarouselComponent/BestSellerComponent";
import DailyDeals from "../components/HomePageComponents/DailyDeals";

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
