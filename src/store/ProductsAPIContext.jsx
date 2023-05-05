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
    const fetchData = () => {
      try {
        fetch("https://fakestoreapi.com/products")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response is not ok.");
            }
            return response.json();
          })
          .then((result) => {
            setProductsList(result);
            setFeaturedList(fyShuffle(result));
            setBestSellers(fyShuffle(result));
            setIsLoading(false);
          })
          .catch((error) => {
            console.log("Something went wrong.", error);
            setIsLoading(false);
          });
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
