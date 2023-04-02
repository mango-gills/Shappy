import React from "react";
import Navbar from "../components/NavbarComponents/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main className="pt-6 pb-3 w-full lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1280px] px-5 lg:px-0 mx-auto">
        {props.children}
      </main>
    </>
  );
};

export default Layout;
