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
import { ProductProvider } from "./store/ProductsAPIContext";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductProvider>
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
                      <Route path="/order-success" element={<OrderSuccess />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              </Router>
            </CartProvider>
          </ResizeHandlerProvider>
        </ProductProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
