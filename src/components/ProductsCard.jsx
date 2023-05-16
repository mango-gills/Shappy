import { Link } from "react-router-dom";
import React from "react";

const ProductsCard = ({ items }) => {
  const { title, image, price, id, rating } = items;

  return (
    <Link to={`/product/${id}`}>
      <div className="w-[160px] h-[240px] md:w-[205px] md:h-[290px] bg-white font-josefinRegular mx-auto cursor-pointer flex flex-col items-center ease-in duration-75 border hover:border-[#ff2424] hover:shadow-lg hover:border-[1px]">
        <div className="image-container my-4 w-[170px] h-[170px]">
          <div
            className="w-[80%] h-[80%] md:w-[90%] md:h-[90%] bg-contain bg-no-repeat mix-blend-multiply bg-center mx-auto"
            style={{ backgroundImage: `url(${image})` }}
            alt="product-image"
          />
        </div>
        <div className="product-details w-full bg-white h-[75px]">
          <div className="flex flex-col justify-between h-full px-4">
            <h2
              className="font-JosefinSansSemiBold text-black text-xs md:text-sm line-clamp-2
            leading-tight"
            >
              {title}
            </h2>

            <div className="flex space-x-1 justify-between items-center">
              <p className="text-orange-600 text-base md:text-lg font-medium">
                ${price}
              </p>
              <span className="text-neutral-800 flex text-[12px] md:text-sm">
                Sold ({rating.count})
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
