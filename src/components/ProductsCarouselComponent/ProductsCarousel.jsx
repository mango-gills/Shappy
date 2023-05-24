import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import ProductsCard from "../ProductsCard";
import { ResizeHandler } from "../../store/ResizeHandlerProvider";

const ProductsCarousel = (props) => {
  const { responsiveLayout } = ResizeHandler();
  const [slidesPerView, setSlidesPerview] = useState(6);

  useEffect(() => {
    if (responsiveLayout === "" || responsiveLayout === "xl") {
      setSlidesPerview(6);
    }

    if (responsiveLayout === "xs") {
      setSlidesPerview(2);
    } else if (responsiveLayout === "sm") {
      setSlidesPerview(3);
    } else if (responsiveLayout === "md") {
      setSlidesPerview(4);
    } else if (responsiveLayout === "lg") {
      setSlidesPerview(5);
    }
  }, [responsiveLayout, slidesPerView]);

  return (
    <>
      {props.isLoading ? (
        <div
          className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      ) : (
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{
            clickable: true,
          }}
          modules={[]}
          onSwiper={(swiper) => props.setSwiperRef(swiper)}
          className="flex justify-between items-center mb-3 py-2"
        >
          {props.data?.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductsCard items={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default ProductsCarousel;
