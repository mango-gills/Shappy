import React, { useEffect, useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FeaturedProductsGallery from "./components/FeaturedProductsGallery";
import axios from "axios";

const homePage = () => {
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
    getRandomProduct(data);
  };

  const getRandomProduct = (products) => {
    const keys = Object.keys(products);
    const randomized = [];
    let prop = 0;
    const ids = [];

    for (let i = 0; i < 8; i++) {
      prop = keys[Math.floor(Math.random() * keys.length)];
      if (ids.includes(prop)) {
        prop = keys[Math.floor(Math.random() * keys.length)];
        i -= 1;
      } else {
        ids.push(prop);
      }
    }
    ids.map((id) => {
      randomized.push(products[id]);
    });

    setRandomProducts(randomized);
  };

  return (
    <main>
      <Navbar />
      <div className="mx-auto w-full sm:w-[70%] md:lg:w-[60%]">
        <Hero />
        <FeaturedProductsGallery randomProducts={randomProducts} />
        <Categories />
      </div>
      <Footer />
    </main>
  );
};

export default homePage;
