import { createContext, useState, useContext, useEffect } from "react";
import { UserAuth } from "./AuthContext";

import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const { userId } = UserAuth();
  const onCart = cartData.length;

  const cartRef = collection(db, "cart");
  const cartQuery = query(
    cartRef,
    where("user_id", "==", userId),
    orderBy("timestamp")
  );

  // onSnapshot(cartQuery, (snapshot) => {
  //   const cart = [];
  //   snapshot.docs.forEach((doc) => {
  //     cart.push({ ...doc.data(), id: doc.id });
  //   });
  //   setCartData(cart);
  // });

  getDocs(cartQuery).then((snapshot) => {
    const cart = [];
    snapshot.docs.forEach((doc) => {
      cart.push({ ...doc.data(), id: doc.id });
    });
    setCartData(cart);
  });

  return (
    <CartContext.Provider value={{ cartData, onCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContextProvider = () => {
  return useContext(CartContext);
};
