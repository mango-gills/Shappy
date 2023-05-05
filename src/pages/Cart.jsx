import React from "react";
import { CartContextProvider } from "../store/CartContext";
import CartProduct from "../components/CartPageComponents/CartProduct";

const Cart = () => {
  const { cartData } = CartContextProvider();
  let totalPayment = 0;

  totalPayment = cartData.reduce((total, cart) => cart.item.price + total, 0);

  return (
    <>
      <div className="2xl:max-w-[1280px] mx-auto py-5 w-full px-5">
        <h1 className="mb-5 text-3xl font-josefinBold">
          Your Shopping Cart has {cartData.length} items.
        </h1>

        <div className="w-[500px]">
          {cartData?.map((cart) => (
            <CartProduct key={cart.id} cart={cart} />
          ))}
        </div>

        <div>
          <h1 className="text-2xl">
            Estimated Total: <span className="font-bold">${totalPayment}</span>{" "}
          </h1>
          <button className="bg-black text-white px-12 py-4 mt-4">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
