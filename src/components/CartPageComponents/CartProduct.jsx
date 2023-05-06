import React from "react";
import { X } from "phosphor-react";
import { db } from "../../firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";

const CartProduct = ({ cart }) => {
  const handleDelete = (id) => {
    const cartRef = doc(db, "cart", id);
    deleteDoc(cartRef)
      .then(() => {
        console.log("Item has been deleted from the cart.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-start justify-between border-t-[1px] py-6 last:border-b-[1px]">
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
        defaultValue={cart.item.quantity}
        id="quantity"
        className="bg-gray-50 border max-w-[50px] h-[30px] border-gray-300 text-gray-900 text-xs rounded-md block w-full text-center"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <X
        size={18}
        className="cursor-pointer opacity-60"
        onClick={() => handleDelete(cart.id)}
      />
    </div>
  );
};

export default CartProduct;