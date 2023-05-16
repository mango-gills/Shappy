import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();
const FeaturedProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [featuredList, setFeaturedList] = useState([]);
  const [recommendedList, setRecommended] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const platziAPI = "https://api.escuelajs.co/api/v1/products";

  //Fisher-Yates algorithm
  const fyShuffle = (arr) => {
    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr.slice(0, 10);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios
        .get("https://fakestoreapi.com/products")
        .catch((error) => {
          console.log(error.message);
        });
      setProductsList(data);
      setFeaturedList(fyShuffle(data));
      setBestSellers(fyShuffle(data));
      setRecommended(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider value={{ productsList, isLoading }}>
      <FeaturedProductsContext.Provider
        value={{
          featuredList,
          bestSellers,
          recommendedList,
          fyShuffle,
          isLoading,
        }}
      >
        {children}
      </FeaturedProductsContext.Provider>
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductProvider, FeaturedProductsContext };
