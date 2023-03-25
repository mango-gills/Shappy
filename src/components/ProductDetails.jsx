import { Link } from "react-router-dom";
import React from "react";

const ProductDetails = ({ items }) => {
  const { title, image, price, id } = items;

  return (
    <Link to={`/product/${id}`}>
      <div className="bg-neutral-300 w-[210px] mx-auto font-josefinRegular border-[1px] border-black/10 rounded-sm cursor-pointer flex flex-col items-center hover:border-black/80 ease-in duration-150">
        <div className="image-container my-3 w-[165px] h-[165px]">
          <div
            className="w-[90%] h-[90%] bg-contain bg-no-repeat mix-blend-multiply bg-center mx-auto"
            style={{ backgroundImage: `url(${image})` }}
            alt="product-image"
          />
        </div>
        <div className="product-details w-full bg-white h-[85px]">
          <div className="flex flex-col justify-between h-full pt-3 px-4 pb-1">
            <h2 className="font-josefinBold text-sm line-clamp-2 text-gray-700">
              {title}
            </h2>
            <p className="text-md">
              $<span className="text-xl font-JosefinSansSemiBold">{price}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductDetails;
