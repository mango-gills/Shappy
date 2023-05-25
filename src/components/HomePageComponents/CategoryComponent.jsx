import React from "react";
import clothesImage from "../../assets/category-clothes.png";
import electronicsImage from "../../assets/category-electronics.png";
import jewelriesImage from "../../assets/category-jewelries.png";

const CategoryComponent = () => {
  return (
    <div className="grid grid-cols-3 mb-8">
      <div className="col-span-1">
        <img src={clothesImage} alt="category-image" />
        <div className="bg-[#FF8531] p-3 space-y-3">
          <h2 className="font-bold text-xs md:text-base lg:text-xl">
            Shop for Clothing
          </h2>
          <button className="px-4 py-2 font-semibold text-white uppercase bg-black/90 text-[10px] md:text-xs">
            Shop Now
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <img src={electronicsImage} alt="category-image" />
        <div className="bg-[#9DBFD8] p-3 space-y-3">
          <h2 className="font-bold text-xs md:text-base lg:text-xl">
            Shop for Electronics
          </h2>
          <button className="px-4 py-2 font-semibold text-white uppercase bg-black/90 text-[10px] md:text-xs">
            Shop Now
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <img src={jewelriesImage} alt="category-image" />
        <div className="bg-[#7C7C74] p-3 space-y-3">
          <h2 className="font-bold text-xs md:text-base lg:text-xl">
            Shop for Jewelries
          </h2>
          <button className="px-4 py-2 font-semibold text-white uppercase bg-black/90 text-[10px] md:text-xs">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
