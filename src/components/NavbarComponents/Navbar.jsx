import React from "react";
import { Link } from "react-router-dom";

import { CartContextProvider } from "../../store/CartContext";
import { UserAuth } from "../../store/AuthContext";

import {
  Heart,
  MagnifyingGlass,
  ShoppingBagOpen,
  ShoppingCartSimple,
} from "phosphor-react";

const Navbar = () => {
  const { onCart } = CartContextProvider();
  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <nav className="w-full border-b-2 border-neutral-300 drop-shadow-sm px-5 lg:px-0">
      <div className="pt-6 pb-3 w-full lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto text-[#7A7A7A]">
        <div className="flex items-center justify-between border-b-[1px] border-neutral-400 pb-2 mb-2">
          <Link to={"/"} className="flex items-center">
            <ShoppingBagOpen
              color="#000000"
              weight="duotone"
              size={50}
              className="mr-1"
            />
            <h1 className="font-josefinBold text-3xl text-black mt-1">
              Shappy
            </h1>
          </Link>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-2">
              <Heart color="#808080" weight="fill" size={30} />
              <Link to={"/cart"} className="relative">
                {onCart > 0 && (
                  <div className="absolute -top-1 -right-2 bg-green-500/90 rounded-full h-5 w-5 text-white flex items-center justify-center p-2">
                    <p className="text-xs font-bold">{onCart}</p>
                  </div>
                )}
                <ShoppingCartSimple size={30} />
              </Link>
            </div>

            {user ? (
              <div className="flex space-x-2">
                <p>{user.email}</p>
                <p className="cursor-pointer" onClick={handleLogout}>
                  logout
                </p>
              </div>
            ) : (
              <div className="flex space-x-1">
                <Link to={"/login"} className="hover:text-black duration-150">
                  <p>Login</p>
                </Link>
                <p>|</p>
                <Link to={"/signup"} className="hover:text-black duration-150">
                  <p>Signup</p>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <ul className="flex space-x-8">
            <li className="cursor-pointer hover:text-black">All</li>
            <li className="cursor-pointer hover:text-black">Electronics</li>
            <li className="cursor-pointer hover:text-black">Jewelry</li>
            <li className="cursor-pointer hover:text-black">Men's Clothing</li>
            <li className="cursor-pointer hover:text-black">
              Women's Clothing
            </li>
          </ul>

          {/* Search bar */}
          <div className="flex bg-neutral-200 justify-between w-[35%] rounded-md overflow-hidden">
            <input
              className="w-[90%] bg-transparent focus:outline-none ml-2 placeholder:text-sm px-2"
              type="text"
              placeholder="Search"
            />
            <div className="bg-[#A6A0A0] py-2 px-3 cursor-pointer hover:bg-black duration-150 transition">
              <MagnifyingGlass color="white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
