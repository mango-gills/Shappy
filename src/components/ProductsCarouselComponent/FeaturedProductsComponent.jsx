import { FeaturedProductsContext } from "../../store/ProductsAPIContext";
import React, { useState, useContext } from "react";

import ProductsCard from "../ProductsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import ProductsCarousel from "./ProductsCarousel";

const FeaturedProductsComponent = () => {
  const { featuredList, isLoading } = useContext(FeaturedProductsContext);

  const [swiperRef, setSwiperRef] = useState(null);

  const prevSlide = () => {
    swiperRef.slidePrev();
  };

  const nextSlide = () => {
    swiperRef.slideNext();
  };

  return (
    <>
      <div className="w-full mt-5 mb-1 text-lg pt-1 text-black font-JosefinSansSemiBold flex justify-between ">
        Featured Products
        <div className="flex space-x-1">
          <CaretCircleLeft
            size={30}
            className="cursor-pointer"
            onClick={prevSlide}
          />
          <CaretCircleRight
            size={30}
            className="cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>

      <ProductsCarousel
        isLoading={isLoading}
        data={featuredList}
        setSwiperRef={setSwiperRef}
      />
    </>
  );
};

export default FeaturedProductsComponent;
