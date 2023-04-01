import { ProductProvider, ProductsContext } from "../store/ProductsAPIContext";

import FeaturedImage from "../components/FeaturedImage";
import FeaturedProducts from "../components/FeaturedProductsComponent";
import Navbar from "../components/NavbarComponents/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="App">
      <ProductProvider>
        <Navbar />
        <main className="pt-6 pb-3 w-full lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1280px] px-5 lg:px-0 mx-auto text-[#7A7A7A]">
          <FeaturedImage />

          <div className="bg-neutral-300 w-full mt-5 mb-3 text-lg pt-1 px-2 text-black font-JosefinSansSemiBold">
            Featured Products
          </div>
          <FeaturedProducts />
        </main>
      </ProductProvider>
    </div>
  );
};

export default Home;
