import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddToCart from "./AddToCart";
import RecommendedProducts from "../ProductsCarouselComponent/RecommendedProducts";

const ProductPageItemDetails = () => {
  const [item, setItem] = useState([]);

  const params = useParams();
  const { title, image, price, id, description, category, rating } = item;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, [params]);

  return (
    <>
      <div className="grid place-items-start mb-5 max-w-full font-josefinRegular">
        <div className="flex-col items-start mx-auto">
          <div className="mb-3 flex space-x-2">
            <Link to="/" className="font-semibold">
              Home
            </Link>
            <span> &gt;</span>
            <p className="font-semibold">
              {category == "jewelery"
                ? "Jewelry"
                : String(
                    category?.charAt(0).toUpperCase() + category?.slice(1)
                  )}
            </p>
            <span> &gt;</span>
            <p className="text-neutral-500">{title}</p>
          </div>
          <div className="bg-[#DFDFDF] w-full md:h-[550px] grid md:grid-cols-2 drop-shadow-md">
            <div className="h-[350px] md:h-full w-full overflow-hidden flex justify-center items-center">
              <img
                src={image}
                alt="product-image"
                className="mx-auto mix-blend-multiply w-[90%] h-[90%] md:w-[70%] md:h-[70%] object-contain"
              />
            </div>

            <div className="bg-white w-full py-6 px-8 h-full flex flex-col justify-between">
              <div className="h-full md:h-[250px] overflow-hidden mb-2">
                <p className="uppercase text-gray-500 my-1 text-xs md:text-sm">
                  {category == "jewelery" ? "jewelry" : category}
                </p>
                <h1 className="text-lg md:text-xl lg:text-2xl mt-2 font-JosefinSansSemiBold text-[#303030]">
                  {title}
                </h1>

                <h1 className="text-2xl md:text-3xl mt-3 font-JosefinSansSemiBold text-orange-500">
                  ${price}
                </h1>

                <p className="text-sm md:text-base text-[#4A4A4A]/80 mt-2 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="font-josefinRegular text-lg flex flex-col md:flex-row md:space-x-3 items-center space-y-3 md:space-y-0">
                <AddToCart item={item} />
                <button className="text-[#2b2b2b] border-[1px] border-gray-400 w-full md:w-1/2 px-8 py-4 rounded-sm leading-none">
                  Save to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecommendedProducts params={params} />
    </>
  );
};

export default ProductPageItemDetails;
