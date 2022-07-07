import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  const { productID } = useParams();

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [rating, setRating] = useState([]);
  const [count, setCount] = useState();
  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useState([]);

  const fetchDataFromApi = async () => {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/" + productID
    );
    setCart(data);
    const { title, price, description, image, category, rating } = data;
    setTitle(title);
    setPrice(price);
    setDescription(description);
    setImage(image);
    setCategory(category);
    setRating(rating);
    setCount(count);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const addToCart = () => {
    cart.quantity = quantity;
    let checker = localStorage.length;
    alert("Item added to cart");
    if (checker === 0) {
      localStorage.setItem(`${0}`, JSON.stringify(cart));
    } else {
      localStorage.setItem(`${checker}`, JSON.stringify(cart));
    }
  };

  return (
    <main className="h-full">
      <Navbar />
      <section className="mx-auto grid h-[60rem] w-[22rem] items-center bg-neutral-100 p-2 text-black md:h-[50rem] md:w-[60%] lg:h-[35rem] lg:w-[70%] lg:grid-cols-2 lg:items-start xl:w-[60%]">
        <div className="left-grid-container flex h-[25rem] w-[full] flex-col-reverse items-center justify-center overflow-hidden  lg:mt-4 lg:h-[full] lg:flex-row ">
          {/* Main image container of product */}
          <div className="img-container aspect-square h-[20rem] w-[20rem] overflow-hidden rounded-lg bg-white shadow-xl md:w-[28rem] lg:h-[24rem] lg:w-[27rem]">
            <img
              src={image}
              alt="product-image"
              className="block h-full w-full object-contain object-center p-4"
            />
          </div>
        </div>

        <div className="right-grid-container mx-auto flex h-full  w-[full] flex-col justify-start space-y-4 px-6 pb-2 text-center lg:mt-4 lg:h-[25rem] lg:w-[full] lg:text-left">
          {/* Title, Rating, Count and Description containers. */}
          <div className="product-details space-y-4 lg:mb-4">
            <h1 className="text-base font-bold lg:text-2xl">{title}</h1>
            <div className="reviews mx-auto flex justify-center space-x-4 text-[#da0037] lg:justify-start">
              <h2>
                <span className="text-medium font-bold lg:text-xl">
                  {rating.rate}
                </span>{" "}
                out of 5
              </h2>
              <p>|</p>
              <h2>
                <span className="text-medium font-bold lg:text-xl">
                  {rating.count}
                </span>{" "}
                Ratings
              </h2>
            </div>
            <p className="mx-auto text-justify text-sm leading-6 lg:text-sm">
              {description}
            </p>
          </div>

          {/* Price, Quantity, Add to Cart button containers. */}
          <div className="price-to-cart mt-2 items-center space-y-2 text-2xl font-bold text-[#da0037] lg:flex lg:w-[100%] lg:justify-start lg:space-y-0 lg:space-x-4 lg:text-3xl">
            <p className="flex flex-col-reverse lg:flex-col lg:pb-4">
              <span className="text-base font-normal text-neutral-600 line-through">
                ${price * 0.5 + price}
              </span>{" "}
              ${price}
            </p>
            <div>
              <select
                name="quantity"
                id="quantity"
                className="m-4 rounded-md bg-white p-2 text-center text-base text-gray-600"
                onChange={handleChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              {/* <AddToCartButton title={title} image={image} price={price} id={productID}></AddToCartButton> */}
              <button
                className="rounded border-0 bg-blue-500 py-2 px-4 text-sm font-semibold text-white hover:bg-blue-600 lg:text-base"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default ProductPage;
