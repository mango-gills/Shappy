import {
  FeaturedProductsContext,
  ProductProvider,
  ProductsContext,
} from "../store/ProductsAPIContext";
import React, { useEffect, useState } from "react";

import ProductDetails from "./ProductDetails";
import { useContext } from "react";

const FeaturedProductsComponent = () => {
  const { featuredList } = useContext(FeaturedProductsContext);

  return (
    <div className="flex justify-between items-center overflow-x-scroll scrollbar-hide gap-x-4">
      {featuredList?.map((product) => (
        <ProductDetails key={product.id} items={product} />
      ))}
    </div>
  );
};

export default FeaturedProductsComponent;
