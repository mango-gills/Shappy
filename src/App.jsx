import "./App.css";

import {
  JosefinSansBold,
  JosefinSansLight,
  JosefinSansRegular,
  JosefinSansSemiBold,
  JosefinSansThin,
} from "./assets/fonts";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import { AuthContextProvider } from "./store/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
