import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();
const FeaturedProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [featuredList, setFeaturedList] = useState([]);
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
    return arr.slice(0, 8);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios
          .get("https://fakestoreapi.com/products")
          .catch((error) => {
            console.log(error.message);
          });
        console.log(data);
        setProductsList(data);
        setFeaturedList(fyShuffle(data));
        setBestSellers(fyShuffle(data));

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    return () => fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ productsList, isLoading }}>
      <FeaturedProductsContext.Provider
        value={{ featuredList, bestSellers, isLoading }}
      >
        {children}
      </FeaturedProductsContext.Provider>
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductProvider, FeaturedProductsContext };
