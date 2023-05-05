import { FeaturedProductsContext } from "../store/ProductsAPIContext";
import React, { useState, useContext } from "react";

import ProductDetails from "./ProductDetails";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { ResizeHandler } from "../store/ResizeHandlerProvider";

const FeaturedProductsComponent = () => {
  const { featuredList, isLoading } = useContext(FeaturedProductsContext);
  const { isMobile } = ResizeHandler();

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

      {isLoading ? (
        <div
          className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      ) : (
        <Swiper
          slidesPerView={isMobile ? 2 : 6}
          // spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[]}
          onSwiper={(swiper) => setSwiperRef(swiper)}
          className="flex justify-between items-center mb-3 py-2"
        >
          {featuredList?.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductDetails items={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default FeaturedProductsComponent;
