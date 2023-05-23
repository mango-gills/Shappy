import { Link } from "react-router-dom";
import React from "react";

const ProductsCard = ({ items }) => {
  const { title, image, price, id, rating } = items;

  return (
    <Link to={`/product/${id}`}>
      <div className="w-[160px] h-[230px] md:w-[205px] md:h-[270px] bg-white font-josefinRegular mx-auto cursor-pointer flex flex-col items-center ease-in duration-75 border hover:border-neutral-500 hover:shadow-lg hover:border-[1px]">
        <div className="image-container w-full px-4 py-6 bg-neutral-200 mb-4">
          <div
            className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] bg-contain bg-no-repeat mix-blend-multiply bg-center mx-auto"
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

            <div className="flex space-x-1 justify-between items-center mb-2 sm:mb-0">
              <p className="text-orange-500 font-medium">
                $<span className="text-base md:text-lg">{price}</span>
              </p>
              <span className="text-neutral-500 flex text-[10px] md:text-xs">
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
