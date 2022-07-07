import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  const [total, setTotal] = useState();
  const [shoppingCart, setShoppingCart] = useState([]);
  const [selectValue, setSelectValue] = useState(1);

  useEffect(() => {
    getCartData();
  }, []);

  const cartData = [];
  let subTotal = 0;

  const getCartData = () => {
    for (let i = 0; i < localStorage.length; i++) {
      cartData[i] = JSON.parse(localStorage.getItem(`${i}`));
    }
    setShoppingCart(cartData);
    getTotalPrice(cartData);
  };

  const getTotalPrice = (data) => {
    data.forEach((value) => {
      subTotal += value.price * value.quantity;
    });
    setTotal(subTotal);
  };

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  const renderElement = () => {
    if (shoppingCart.length == 0) {
      return <h1>Your cart is empty</h1>;
    } else {
      return shoppingCart.map((item) => (
        <div
          className="mx-auto flex h-full w-[18rem] flex-col items-center justify-center space-y-2 align-middle text-lg md:w-[40rem] lg:w-[45rem] lg:flex-row lg:justify-between"
          key={item.id}
        >
          <div className="my-2 aspect-square h-28 w-28 rounded-md bg-white p-2 lg:h-32 lg:w-32">
            <img
              src={item.image}
              alt=""
              className="mx-auto h-full w-full object-contain"
            />
          </div>
          <p className="text-center text-sm md:w-[20rem] lg:pl-4 lg:text-lg lg:font-medium">
            {item.title}
          </p>
          <p className="text-base font-medium lg:pl-4 lg:text-lg">
            ${item.price}
          </p>

          <p
            name="quantity"
            id="quantity"
            className="text-md mr-2  rounded-md p-2 text-center text-gray-600"
          >
            {" "}
            x {item.quantity}{" "}
          </p>
          <div>
            <button className="rounded-md bg-neutral-400 p-2 text-sm text-white">
              Remove
            </button>
          </div>
        </div>
      ));
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto flex w-[80%] flex-col items-center justify-center space-y-4 rounded-lg bg-neutral-200 p-4 text-base font-bold lg:w-[60%]">
        {renderElement()}
        <hr className="my-5 w-[80%] border-[1px] border-neutral-400" />
        <div className="items-center text-center align-middle text-lg lg:flex lg:w-[80%] lg:justify-between">
          <h1 className="">Subtotal: ${total}</h1>
          <button className="mt-2 w-full rounded-md bg-blue-500 p-2 text-base text-white md:w-[12rem]">
            Checkout
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
