import React from "react";
import FeaturedImage from "../components/HomePageComponents/FeaturedImage";
import FeaturedProducts from "../components/ProductsCarouselComponent/FeaturedProductsComponent";
import BestSellerComponent from "../components/ProductsCarouselComponent/BestSellerComponent";
import DailyDeals from "../components/HomePageComponents/DailyDeals";
import InfoBar from "../components/HomePageComponents/InfoBar";

const Home = () => {
  return (
    <>
      <FeaturedImage />
      <FeaturedProducts />
      <BestSellerComponent />
      <DailyDeals />
      <InfoBar />
    </>
  );
};

export default Home;
