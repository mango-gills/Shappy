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

function App() {
  return (
    <div className="App">
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
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </Layout>
            </Router>
          </CartProvider>
        </ResizeHandlerProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
