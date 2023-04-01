import React, { useState } from "react";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ item }) => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserId(user.uid);
    } else {
      setUserId("");
    }
  });

  const handleAddToCart = async () => {
    if (userId == "") {
      navigate("/login");
    } else {
      await addDoc(collection(db, "user_cart", userId, "cart_items"), {
        itemId: item.id,
        timestamp: serverTimestamp(),
      });
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
