import { Link } from "react-router-dom";
import React from "react";

const ProductDetails = ({ items }) => {
  const { title, image, price, id } = items;

  return (
    <Link to={`/product/${id}`}>
      <div className="w-[210px] font-josefinRegular mx-auto text-center rounded-md cursor-pointer flex flex-col items-center hover:shadow-xl ease-in duration-75 hover:scale-110">
        <div className="image-container mt-3 mb-2 w-[170px] h-[170px]">
          <div
            className="w-[90%] h-[90%] bg-contain bg-no-repeat mix-blend-multiply bg-center mx-auto"
            style={{ backgroundImage: `url(${image})` }}
            alt="product-image"
          />
        </div>
        <div className="product-details w-full bg-white h-[85px]">
          <div className="flex flex-col justify-between h-full pt-1 px-4 pb-2">
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
