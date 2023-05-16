import { FeaturedDealsContext } from "../store/ProductsAPIContext";
import ProductsCard from "./ProductsCard";
import React from "react";
import { useContext } from "react";

const FeaturedDeals = () => {
  const { featuredDeals } = useContext(FeaturedDealsContext);

  return (
    <div className="font-josefinRegular">
      <h1 className="mt-5 mb-2 bg-white pt-2 pb-1 px-2 text-black uppercase border-b-2 border-black/80">
        Today's Deals
      </h1>

      <div className="flex overflow-x-scroll scrollbar-hide justify-between">
        {featuredDeals?.map((product) => (
          <ProductsCard key={product.id} items={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDeals;
