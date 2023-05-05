import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Layout from "./layout/Layout";

import { AuthContextProvider } from "./store/AuthContext";
import { ResizeHandlerProvider } from "./store/ResizeHandlerProvider";
import { CartProvider } from "./store/CartContext";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ResizeHandlerProvider>
          <CartProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route element={<ProtectedRoutes />}>
                    <Route path="/cart" element={<Cart />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </Router>
          </CartProvider>
        </ResizeHandlerProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
