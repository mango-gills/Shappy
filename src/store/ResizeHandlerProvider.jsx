import { createContext, useContext, useEffect, useState } from "react";

const ResizeContext = createContext();

export const ResizeHandlerProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const { innerWidth } = window;

    if (innerWidth <= 1000) {
      setIsMobile(true);
    }

    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ResizeContext.Provider value={{ isMobile }}>
      {children}
    </ResizeContext.Provider>
  );
};

export const ResizeHandler = () => {
  return useContext(ResizeContext);
};
