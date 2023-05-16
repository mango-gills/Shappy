import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
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

  const handleSnapshot = useCallback((snapshot) => {
    const cart = [];
    snapshot.docs.forEach((doc) => {
      cart.push({ ...doc.data(), id: doc.id });
    });
    setCartData(cart);
  }, []);

  useEffect(() => {
    if (userId) {
      const cartRef = collection(db, "cart", userId, "orders");
      const unsubscribe = onSnapshot(cartRef, handleSnapshot);

      return () => {
        unsubscribe();
      };
    }
  }, [userId, handleSnapshot]);

  return (
    <CartContext.Provider value={{ cartData, onCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContextProvider = () => {
  return useContext(CartContext);
};
