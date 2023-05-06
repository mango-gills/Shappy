import React, { useContext, useEffect, useState } from "react";
import { FeaturedProductsContext } from "../../store/ProductsAPIContext";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import ProductDetails from "../ProductDetails";
import { ResizeHandler } from "../../store/ResizeHandlerProvider";

const RecommendedProducts = ({ params }) => {
  const [shuffledItems, setShuffledItems] = useState([]);

  const { recommendedList, fyShuffle, isLoading } = useContext(
    FeaturedProductsContext
  );
  const { isMobile } = ResizeHandler();

  useEffect(() => {
    setTimeout(() => {
      setShuffledItems(fyShuffle(recommendedList));
    }, 400);
  }, [params]);

  return (
    <>
      <div className="w-full mt-8 mb-1 text-lg pt-1 text-black font-JosefinSansSemiBold flex justify-between ">
        You might also like
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
          className="flex justify-between items-center mb-3 py-2"
        >
          {shuffledItems?.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductDetails items={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default RecommendedProducts;
