import { Link } from "react-router-dom";
import React from "react";

const ProductDeals = ({ items }) => {
  const { title, image, price, id } = items;

  return (
    <div>
      {" "}
      <div
        className="bg-white w-[220px] font-josefinRegular 
     rounded-sm cursor-pointer ease-in duration-150 py-2 drop-shadow-sm border-[1px] border-black/20 mb-10"
      >
        <Link to={`/product/${id}`}>
          <div className="image-container my-2 w-[190px] h-[190px] mx-auto">
            <div
              className="w-full h-full bg-contain bg-no-repeat mix-blend-multiply bg-center mx-auto"
              style={{ backgroundImage: `url(${image})` }}
              alt="product-image"
            />
          </div>
          <div className="product-details w-full h-[105px] border-t-[1px] border-black/50">
            <div className="flex flex-col justify-between h-full pt-2 px-2">
              <h2 className="text-sm line-clamp-2 text-black/90">{title}</h2>
              <div className="text-black/90">
                <p className="text-md ">
                  $
                  <span className="text-lg font-JosefinSansSemiBold leading-tight">
                    {price}
                  </span>
                </p>
                <div className="text-sm flex space-x-1 text-black/80">
                  <p className="line-through">
                    {(price + price * 0.1).toFixed(2)}
                  </p>
                  <span>|</span>
                  <p>10% OFF</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductDeals;
