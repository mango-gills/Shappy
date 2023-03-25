import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";

const FeaturedImage = () => {
  return (
    <div>
      <div className="main-grid w-full h-[260px] xl:h-[350px] grid grid-cols-3 gap-3">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="bg-gray-400 w-full col-span-2 rounded-lg"
        >
          <SwiperSlide
            className="w-full h-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${image3})` }}
          ></SwiperSlide>
          <SwiperSlide
            className="w-full h-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${image6})` }}
          ></SwiperSlide>
          <SwiperSlide
            className="w-full h-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${image7})` }}
          ></SwiperSlide>
        </Swiper>
        <div className="small w-full h-full grid grid-rows-2 gap-3">
          <div
            className="  bg-blue-300 w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          <div
            className="  bg-blue-300 w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;
