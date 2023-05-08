import React, { useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  increment,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../store/AuthContext";
import { CartContextProvider } from "../../store/CartContext";

const AddToCart = ({ item }) => {
  const navigate = useNavigate();
  const { userId } = UserAuth();
  const { cartData } = CartContextProvider();

  const dup = cartData.filter(
    (cart) => cart.item.id === item.id && cart.user_id == userId
  );

  const handleAddToCart = async () => {
    if (userId) {
      if (dup[0]?.item.id === item.id && dup[0]?.user_id == userId) {
        updateDoc(doc(db, "cart", userId, "orders", dup[0]?.id), {
          quantity: +dup[0]?.quantity + 1,
        });
      } else {
        await addDoc(collection(db, "cart", userId, "orders"), {
          item: { ...item },
          user_id: userId,
          quantity: increment(1),
          timestamp: serverTimestamp(),
        });
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <button
      className="bg-[#2b2b2b] text-white px-8 py-2 w-full rounded-sm"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
