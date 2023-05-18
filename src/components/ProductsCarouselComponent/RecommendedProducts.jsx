import React, { useContext, useEffect, useState } from "react";
import { FeaturedProductsContext } from "../../store/ProductsAPIContext";

import "swiper/swiper-bundle.min.css";

import ProductsCard from "../ProductsCard";

const RecommendedProducts = ({ params }) => {
  const [shuffledItems, setShuffledItems] = useState([]);

  const { recommendedList, fyShuffle, isLoading } = useContext(
    FeaturedProductsContext
  );

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
        <div className="flex flex-wrap gap-4 justify-between items-center mb-3 py-2">
          {shuffledItems?.map((product) => (
            <ProductsCard items={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default RecommendedProducts;
