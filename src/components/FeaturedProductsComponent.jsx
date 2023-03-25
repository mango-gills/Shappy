import { FeaturedProductsContext } from "../store/ProductsAPIContext";
import React from "react";

import ProductDetails from "./ProductDetails";
import { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const FeaturedProductsComponent = () => {
  const { featuredList } = useContext(FeaturedProductsContext);

  return (
    <div>
      <Swiper
        slidesPerView={5}
        // spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[]}
        className="flex justify-between items-center mb-5 pb-5"
      >
        {featuredList?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductDetails items={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProductsComponent;
