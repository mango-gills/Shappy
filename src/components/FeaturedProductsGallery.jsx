import React from "react";
import { Link } from "react-router-dom";
import RandomProducts from "./RandomProducts";

const FeaturedProductsGallery = ({ randomProducts }) => {
  return (
    <div>
      <h1 className="mb-2 text-xl font-bold">Featured Products</h1>
      <div className="mx-auto flex w-full  justify-start overflow-y-scroll rounded-none bg-[#444444] scrollbar-hide hover:overflow-y-scroll  md:rounded-xl lg:justify-around">
        {/*  */}
        {randomProducts.map((product) => (
          <RandomProducts key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsGallery;
