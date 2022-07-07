import React, { useEffect, useState } from "react";
import axios from "axios";
import AllProducts from "./AllProducts";

const Categories = () => {
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  let URL = "https://fakestoreapi.com/products";

  const getAllCategory = async () => {
    const { data } = await axios.get(URL);
    setProductsByCategory(data);
  };

  function handleInput(e) {
    if (e.target.value == "products") {
      URL = "https://fakestoreapi.com/products";
      getAllCategory();
    } else {
      URL = chosenCategory(e.target.value);
      getAllCategory();
    }
  }

  const chosenCategory = (str) => {
    return `https://fakestoreapi.com/products/category/${str}`;
  };

  return (
    <div className="mx-auto rounded-2xl py-4 text-black">
      <h1 className="mb-2 ml-2 w-full text-xl font-semibold">Categories</h1>

      <div className="container mx-auto flex w-[90%] cursor-pointer flex-wrap justify-start text-black  md:w-[85%] lg:w-[100%]">
        <button
          className="button-style"
          value={"products"}
          onClick={(e) => handleInput(e)}
        >
          All Products
        </button>

        <button
          className="button-style"
          value={"electronics"}
          onClick={(e) => handleInput(e)}
        >
          Electronics
        </button>

        <button
          className="button-style"
          value={"jewelery"}
          onClick={(e) => handleInput(e)}
        >
          Jewelry
        </button>

        <button
          className="button-style"
          value={"men's clothing"}
          onClick={(e) => handleInput(e)}
        >
          Men's Clothing
        </button>

        <button
          className="button-style"
          value={"women's clothing"}
          onClick={(e) => handleInput(e)}
        >
          Women's Clothing
        </button>
      </div>

      <AllProducts productsByCategory={productsByCategory} />
    </div>
  );
};

export default Categories;
