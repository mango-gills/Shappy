import React from "react";
import image3 from "../assets/image3.webp";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";

const FeaturedImage = () => {
  return (
    <div className="main-grid w-full h-[200px] sm:h-[280px] md:h-[380px] xl:h-[450px] grid gap-3">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 10000,
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
          className="w-full h-full bg-center bg-cover bg-no-repeat md:pt-32"
          style={{ backgroundImage: `url(${image6})` }}
        >
          <div className="bg-[#270C5F] text-white opacity-95 py-4 md:py-8 px-5 md:px-10 w-1/2 md:w-[600px] flex flex-col justify-between items-start  md:h-[260px] h-full">
            <div>
              <h1 className="text-xl md:text-6xl tracking-wide font-bold drop-shadow-lg select-none">
                LAST CHANCE!
              </h1>
              <p className="text-base md:text-4xl mt-1">
                End of Season Clearance Sale
              </p>
            </div>
            <button className="bg-black/95 px-4 py-2 text-sm md:text-lg font-semibold">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-full h-full bg-center bg-cover bg-no-repeat md:pt-32"
          style={{ backgroundImage: `url(${image7})` }}
        >
          <div className="bg-[#5F0C0C] text-white opacity-95 py-4 md:py-8 px-5 md:px-10 w-1/2 md:w-[600px] flex flex-col justify-between items-start  md:h-[260px] h-full">
            <div>
              <h1 className="text-xl md:text-6xl tracking-wide font-bold drop-shadow-lg select-none">
                MEGA SALE!
              </h1>
              <p className="text-base md:text-4xl mt-1">
                Save Up to 50% off Everything
              </p>
            </div>

            <button className="bg-black/95 px-4 py-2 text-sm md:text-lg font-semibold">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedImage;
