import React from "react";
import { Link } from "react-router-dom";

import { CartContextProvider } from "../../store/CartContext";
import { UserAuth } from "../../store/AuthContext";

import {
  Heart,
  List,
  MagnifyingGlass,
  ShoppingCartSimple,
  SignOut,
  UserCircle,
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
      <div className="pt-6 pb-2 w-full lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto text-[#7A7A7A]">
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

          <div className="flex items-center">
            {/* search bar */}
            <div className="flex md:border-[1px] border-black/40 justify-between w-[52px] md:w-[500px] rounded-sm overflow-hidden p-1">
              <input
                className="w-[90%] bg-transparent focus:outline-none ml-2 placeholder:text-sm px-1 hidden md:block"
                type="text"
                placeholder="Search"
              />
              <div className="bg-[#A6A0A0] py-2 px-3 cursor-pointer hover:bg-black duration-150 transition rounded-xs">
                <MagnifyingGlass color="white" size={16} />
              </div>
            </div>
            <List
              size={40}
              weight="fill"
              className="cursor-pointer text-black md:hidden"
            />
          </div>

          <div className="items-center space-x-6 hidden md:flex">
            {user ? (
              <>
                <div className="flex space-x-3">
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
                <div className="flex space-x-2 text-lg">
                  <div className="flex items-center">
                    <UserCircle size={32} weight="light" />
                    <p>{user.email}</p>
                  </div>
                  <SignOut
                    size={26}
                    weight="light"
                    className="cursor-pointer hover:text-neutral-800 ease-in duration-150 mt-1"
                    onClick={handleLogout}
                  />
                </div>
              </>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
