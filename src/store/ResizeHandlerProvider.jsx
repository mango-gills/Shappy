import { createContext, useContext, useEffect, useState } from "react";

const ResizeContext = createContext();

export const ResizeHandlerProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
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
