import React, { useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { X } from "phosphor-react";
import { UserAuth } from "../store/AuthContext";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const { userId } = UserAuth();

  const cartRef = collection(db, "cart");
  const cartQuery = query(
    cartRef,
    where("user_id", "==", userId),
    orderBy("timestamp")
  );

  onSnapshot(cartQuery, (snapshot) => {
    const cart = [];
    snapshot.docs.forEach((doc) => {
      cart.push({ ...doc.data(), id: doc.id });
    });
    setCartData(cart);
  });

  return (
    <>
      <div className="2xl:max-w-[1280px] mx-auto py-5 w-full px-5">
        <h1 className="mb-5 text-3xl font-josefinBold">
          Your Shopping Cart has {cartData.length} items.
        </h1>

        <div className="w-[500px]">
          {cartData?.map((cart) => (
            <div
              key={cart.id}
              className="flex items-start justify-between border-t-[1px] py-6 last:border-b-[1px]"
            >
              <div className="flex items-start">
                <div className="image-container w-[140px] h-[140px] bg-gray-100 rounded-sm ">
                  <div
                    className="w-[90%] h-[90%] bg-contain bg-no-repeat mix-blend-multiply bg-center mx-auto"
                    style={{ backgroundImage: `url(${cart.item.image})` }}
                    alt="product-image"
                  />
                </div>

                <div className="ml-3">
                  <h1 className="w-[180px] text-xs font-josefinBold text-black/80">
                    {cart.item.title}
                  </h1>
                  <p>${cart.item.price}</p>
                </div>
              </div>

              <select
                id="quantity"
                className="bg-gray-50 border max-w-[50px] h-[30px] border-gray-300 text-gray-900 text-xs rounded-md block w-full text-center"
              >
                <option defaultValue={true} value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <X size={18} className="cursor-pointer opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
