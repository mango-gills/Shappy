import React, { useEffect, useState } from "react";

import { Heart } from "phosphor-react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [item, setItem] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);

  const { title, image, price, id, description, category } = item;

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const subtractQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
    else setQuantity(0);
  };

  return (
    <div>
      <Navbar />
      <div className="grid place-items-center mt-20 max-w-full font-josefinRegular">
        <div className="bg-[#DFDFDF] max-w-[900px] h-[600px] grid grid-cols-2 drop-shadow-md">
          <div className="h-full w-full overflow-hidden flex justify-center items-center">
            <img
              src={image}
              alt="product-image"
              className="mx-auto mix-blend-multiply w-[80%] h-[80%] object-contain"
            />
          </div>

          <div className="bg-white w-full py-6 px-8 h-full flex flex-col justify-between">
            <div className="h-[300px] overflow-hidden mb-2">
              <h1 className="text-2xl font-josefinBold text-[#303030]">
                {title}
              </h1>
              <p className="uppercase text-gray-500 my-1">{category}</p>
              <p className="text-sm text-[#4A4A4A] mt-2 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex justify-between flex-1 flex-col">
              <h1 className="text-5xl font-josefinBold text-[#303030]">
                <span className="font-JosefinSansSemiBold text-3xl">$</span>
                {price}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {" "}
                  <p className="text-lg font-JosefinSansSemiBold text-gray-800">
                    Quantity
                  </p>
                  <div className="bg-gray-300 rounded-sm ml-2 text-lg font-bold flex items-center">
                    <button className="px-4" onClick={subtractQuantity}>
                      -
                    </button>
                    <input
                      type="number"
                      disabled
                      value={quantity}
                      className="bg-white w-16 py-2 text-center text-2xl focus:outline-none text-gray-800"
                    />
                    <button className="py-2 px-4" onClick={addQuantity}>
                      +
                    </button>
                  </div>
                </div>
                <Heart size={32} />
              </div>
            </div>

            <div className="flex gap-3 font-bold text-lg flex-1 items-end">
              <button className="bg-[#939393] text-white px-8 py-4 rounded-sm ">
                Buy Now
              </button>
              <button className="flex-1 bg-[#5F5F5F] text-white px-8 py-4 w-full rounded-sm">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
