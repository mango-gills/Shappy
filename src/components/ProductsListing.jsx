import React from "react";
import { Link } from "react-router-dom";

const ProductsListing = ({ product }) => {
  return (
    <Link
      to={`/productpage/${product.id}`}
      className="m-4 mx-auto h-[10rem] w-[90%] items-center overflow-hidden rounded-xl md:m-2 md:h-[14rem] md:w-[10rem] lg:m-4 lg:w-[12rem]"
    >
      <div className="grid h-full w-full grid-cols-2 bg-neutral-300 pr-6 md:grid-cols-1 md:pr-0">
        <div className="aspect-square h-[10rem] w-[full] bg-white md:h-[8rem] md:w-full">
          <img
            alt="ecommerce"
            className="h-full w-full object-contain object-center p-2"
            src={product.image}
          />
        </div>
        <div className="mt-4 flex h-[8rem] w-full flex-col justify-between md:mt-0 md:h-[6rem] md:items-center md:pb-2">
          <h1 className="title-font text-md lg:line-clamp- font-semibold line-clamp-3 md:text-center md:text-sm md:line-clamp-2">
            {product.title}
          </h1>
          <p className="mt-2 text-lg text-[#da0037]">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductsListing;
