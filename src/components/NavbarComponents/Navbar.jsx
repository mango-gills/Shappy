import React from "react";
import { Link } from "react-router-dom";

import { CartContextProvider } from "../../store/CartContext";
import { UserAuth } from "../../store/AuthContext";

import { Heart, MagnifyingGlass, ShoppingCartSimple } from "phosphor-react";

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
      <div className="pt-6 pb-2 w-full lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto text-[#7A7A7A]">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="flex items-center">
            <div>
              <img src="shappy-logo.svg" alt="shappy-logo" />
              <small className="tracking-tight">
                Shop Smarter, Shop Happier!
              </small>
            </div>
          </Link>

          {/* search bar */}
          <div className="flex border-[1px] border-black/40 justify-between w-[500px] rounded-sm overflow-hidden p-1 :border-blue-600">
            <input
              className="w-[90%] bg-transparent focus:outline-none ml-2 placeholder:text-sm px-1"
              type="text"
              placeholder="Search"
            />
            <div className="bg-[#A6A0A0] py-2 px-3 cursor-pointer hover:bg-black duration-150 transition rounded-xs">
              <MagnifyingGlass color="white" size={18} />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-3">
              <Heart color="#808080" weight="fill" size={32} />
              <Link to={"/cart"} className="relative">
                {onCart > 0 && (
                  <div className="absolute -top-1 -right-2 bg-green-500/90 rounded-full h-5 w-5 text-white flex items-center justify-center p-2">
                    <p className="text-xs font-bold">{onCart}</p>
                  </div>
                )}
                <ShoppingCartSimple size={32} />
              </Link>
            </div>

            {user ? (
              <div className="flex space-x-2 text-lg">
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
      </div>
    </nav>
  );
};

export default Navbar;
