import React, { useEffect, useState } from "react";

import Navbar from "../components/NavbarComponents/Navbar";
import ProductPageItemDetails from "../components/ProductPageComponents/ProductPageItemDetails";

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <ProductPageItemDetails />
    </>
  );
};

export default ProductPage;
