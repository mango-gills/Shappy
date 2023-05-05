import React from "react";
import { UserAuth } from "../store/AuthContext";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

const ProtectedRoutes = () => {
  const { userId } = UserAuth();

  return userId ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
