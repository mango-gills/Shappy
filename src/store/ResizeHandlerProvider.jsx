import { createContext, useContext, useEffect, useState } from "react";

const ResizeContext = createContext();

export const ResizeHandlerProvider = ({ children }) => {
  const [responsiveLayout, setResponsiveLayout] = useState("");

  const handleWindowResize = () => {
    const { innerWidth } = window;

    if (innerWidth > 1024) {
      setResponsiveLayout("xl");
    }

    if (innerWidth <= 1024) {
      setResponsiveLayout("lg");
    }

    if (innerWidth <= 768) {
      setResponsiveLayout("md");
    }

    if (innerWidth <= 640) {
      setResponsiveLayout("sm");
    }

    if (innerWidth <= 480) {
      setResponsiveLayout("xs");
    }
  };

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
  }, [responsiveLayout]);

  return (
    <ResizeContext.Provider value={{ responsiveLayout }}>
      {children}
    </ResizeContext.Provider>
  );
};

export const ResizeHandler = () => {
  return useContext(ResizeContext);
};
