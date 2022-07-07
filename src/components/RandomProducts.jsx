import React from "react";
import { Link } from "react-router-dom";

const RandomProducts = ({ product }) => {
  return (
    <Link to={`/productpage/${product.id}`} className="h-34 w-32 p-4 md:w-32">
      <div className="aspect-square h-24 w-24 overflow-hidden rounded bg-white p-2">
        <img
          alt="ecommerce"
          className="h-full w-full object-contain object-center"
          src={product.image}
        />
      </div>
      <div className="mt-2 text-white">
        <h2 className="title-font text-sm font-medium line-clamp-2 md:line-clamp-2">
          {product.title}
        </h2>
        <p className="mt-1 font-medium ">${product.price}</p>
      </div>
    </Link>
  );
};

export default RandomProducts;
