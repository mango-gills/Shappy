import React, { useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  increment,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ item, userId }) => {
  const navigate = useNavigate();

  console.log(item);

  const handleAddToCart = async () => {
    if (userId !== "") {
      await addDoc(collection(db, "cart"), {
        item: { ...item },
        user_id: userId,
        quantity: increment(1),
        timestamp: serverTimestamp(),
      });

      console.log("Item was added to cart");
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
