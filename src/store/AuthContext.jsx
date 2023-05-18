import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebaseConfig";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);
  const [authError, setAuthError] = useState("");

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        window.location.href = "/";
      })
      .catch((error) => {
        switch (error.message) {
          case "Firebase: Error (auth/email-already-in-use).":
            setAuthError("email-error");
            break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            setAuthError("weak-password");
            break;
          default:
            setAuthError("An error occured. Try again.");
            break;
        }
      });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) =>
      console.log(error.message)
    );
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserId(user.uid);
    } else {
      setUserId(null);
    }
  });

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        login,
        userId,
        authError,
        setAuthError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
