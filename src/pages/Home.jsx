import React from "react";
import FeaturedImage from "../components/HomePageComponents/FeaturedImage";
import FeaturedProducts from "../components/ProductsCarouselComponent/FeaturedProductsComponent";
import BestSellerComponent from "../components/ProductsCarouselComponent/BestSellerComponent";
import DailyDeals from "../components/HomePageComponents/DailyDeals";
import InfoBar from "../components/HomePageComponents/InfoBar";
import CategoryComponent from "../components/HomePageComponents/CategoryComponent";

const Home = () => {
  return (
    <>
      <FeaturedImage />
      <FeaturedProducts />
      <BestSellerComponent />
      <DailyDeals />
      <InfoBar />
      <CategoryComponent />
    </>
  );
};

export default Home;
