import React from "react";
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
    <div className="main-grid w-full h-[200px] sm:h-[280px] md:h-[380px] xl:h-[450px] grid  gap-3">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="bg-gray-400 w-full col-span-2 rounded-sm"
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
          className="w-full h-full bg-center bg-cover bg-no-repeat px-24 pt-32"
          style={{ backgroundImage: `url(${image7})` }}
        >
          <div>
            <h1 className="text-white/90 text-6xl tracking-wider font-extrabold drop-shadow-lg select-none">
              Limited Time Only!
            </h1>
            <p className="text-3xl text-black/80">
              Discounts on Your Favorite Products
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedImage;
