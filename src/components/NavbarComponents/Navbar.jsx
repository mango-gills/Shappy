import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { UserAuth } from "../../store/AuthContext";

import { List, MagnifyingGlass, X } from "phosphor-react";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const { user } = UserAuth();
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const openMobileMenu = () => {
    setMenuIsOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleWindowLoad = () => {
      setMenuIsOpen(false);
    };

    window.addEventListener("load", handleWindowLoad);

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  return (
    <nav className="w-full drop-shadow-sm px-5 lg:px-0 relative z-20">
      <div className="pt-8 pb-6 w-full lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto text-[#7A7A7A]">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="flex items-center w-[125px] sm:w-[180px]">
            <div>
              <img
                src="/shappy-logo.svg"
                alt="shappy-logo"
                className="w-full"
              />
              <small className="tracking-tight text-[10px] sm:text-sm">
                Shop Smarter, Shop Happier!
              </small>
            </div>
          </Link>

          <div className="hidden md:flex items-center md:space-x-5">
            <div className="flex lg:border-[1px] border-black/40 justify-between w-[52px] lg:w-[400px] xl:w-[450px] rounded-sm overflow-hidden p-1">
              <input
                className="w-[90%] bg-transparent focus:outline-none ml-2 placeholder:text-sm px-1 hidden lg:block"
                type="text"
                placeholder="Search"
              />
              <div className="bg-[#A6A0A0] py-2 px-3 cursor-pointer hover:bg-black duration-150 transition rounded-xs">
                <MagnifyingGlass color="white" size={16} />
              </div>
            </div>

            <NavbarLinks
              isMenuOpen={isMenuOpen}
              setMenuIsOpen={setMenuIsOpen}
            />
          </div>

          {user ? (
            <div className="md:hidden flex items-center">
              {!isMenuOpen ? (
                <List
                  size={40}
                  weight="fill"
                  className="cursor-pointer text-black lg:hidden z-40"
                  onClick={openMobileMenu}
                />
              ) : (
                <X
                  size={40}
                  weight="fill"
                  className="cursor-pointer text-black lg:hidden z-40"
                  onClick={openMobileMenu}
                />
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4 text-lg font-semibold text-neutral-700">
              <Link to={"/login"} className="hover:text-black duration-150">
                <p>Login</p>
              </Link>
              <Link
                to={"/signup"}
                className="duration-200 ease-in rounded-md px-5 py-1 bg-black/70 text-white hover:bg-black"
              >
                <p>Signup</p>
              </Link>
            </div>
          )}
        </div>

        {/* mobile menu */}
        <div className={!isMenuOpen ? "hidden" : "md:hidden py-4"}>
          <NavbarLinks isMenuOpen={isMenuOpen} setMenuIsOpen={setMenuIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
