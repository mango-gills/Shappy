import React from "react";
import ProductsListing from "./ProductsListing";

const AllProducts = ({ productsByCategory }) => {
  return (
    <div>
      <div>
        <h1 className="mb-2 text-xl font-bold">Just For You</h1>
        <div className="flex h-[40rem] w-full flex-wrap justify-center overflow-hidden overflow-y-scroll bg-[#444444] scrollbar-hide md:h-full md:justify-around md:overflow-visible md:rounded-xl">
          {productsByCategory.map((product) => (
            <ProductsListing key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
