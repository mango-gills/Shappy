import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();
const FeaturedProductsContext = createContext();

const ProductProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [featuredList, setFeaturedList] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  const fakestoreAPI = "https://fakestoreapi.com/products";
  const platziAPI = "https://api.escuelajs.co/api/v1/products";

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
        fetch(fakestoreAPI)
          .then((response) => response.json())
          .then((result) => {
            setProductsList(result);
            setFeaturedList(fyShuffle(result));
            setBestSellers(fyShuffle(result));
          })
          .catch((error) => console.log("Something went wrong.", error));
      } catch (error) {
        console.log(error);
      }
    };
    return () => fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ productsList }}>
      <FeaturedProductsContext.Provider value={{ featuredList, bestSellers }}>
        {children}
      </FeaturedProductsContext.Provider>
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductProvider, FeaturedProductsContext };
