import { FeaturedProductsContext } from "../store/ProductsAPIContext";
import React from "react";

import ProductDetails from "./ProductDetails";
import { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const FeaturedProductsComponent = () => {
  const { featuredList } = useContext(FeaturedProductsContext);

  return (
    <div>
      <Swiper
        slidesPerView={5}
        // spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="flex justify-between items-center mb-5 pb-5"
      >
        {featuredList?.map((product) => (
          <SwiperSlide>
            <ProductDetails key={product.id} items={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProductsComponent;
