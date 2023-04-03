import React, { useContext, useState } from "react";
import { FeaturedProductsContext } from "../../store/ProductsAPIContext";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import ProductDetails from "../ProductDetails";

const BestSellerComponent = () => {
  const { bestSellers } = useContext(FeaturedProductsContext);

  const [swiperRef, setSwiperRef] = useState(null);

  const prevSlide = () => {
    swiperRef.slidePrev();
  };

  const nextSlide = () => {
    swiperRef.slideNext();
  };

  return (
    <>
      <div className="w-full mt-5 mb-3 text-lg pt-1 text-black font-JosefinSansSemiBold flex justify-between">
        Best Sellers
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
      <Swiper
        slidesPerView={5}
        // spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        className="flex justify-between items-center mb-5 pb-5"
      >
        {bestSellers?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductDetails items={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BestSellerComponent;
