import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddToCart from "./AddToCart";
import RecommendedProducts from "../RecommendedProductsComponent/RecommendedProducts";

const ProductPageItemDetails = () => {
  const [item, setItem] = useState([]);

  const params = useParams();
  const { title, image, price, id, description, category } = item;

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
              {category == "jewelery" ? "Jewelry" : category}
            </p>
            <span> &gt;</span>
            <p className="text-neutral-500">{title}</p>
          </div>
          <div className="bg-[#DFDFDF] max-w-[950px] h-[550px] grid grid-cols-2 drop-shadow-md">
            <div className="h-full w-full overflow-hidden flex justify-center items-center">
              <img
                src={image}
                alt="product-image"
                className="mx-auto mix-blend-multiply w-[80%] h-[80%] object-contain"
              />
            </div>

            <div className="bg-white w-full py-6 px-8 h-full flex flex-col justify-between">
              <div className="h-[300px] overflow-hidden mb-2">
                <p className="uppercase text-gray-500 my-1 text-sm">
                  {category}
                </p>
                <h1 className="text-xl mt-2 font-JosefinSansSemiBold text-[#303030]">
                  {title}
                </h1>

                <h1 className="text-2xl mt-3 font-JosefinSansSemiBold text-orange-500">
                  ${price}
                </h1>

                <p className="text-xs text-[#4A4A4A]/80 mt-2 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="font-josefinRegular text-lg items-end space-y-4">
                <AddToCart item={item} />
                <button className="text-[#2b2b2b] border-[1px] border-gray-400 px-8 py-2 w-full rounded-sm">
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
