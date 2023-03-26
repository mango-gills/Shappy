import {
  Heart,
  MagnifyingGlass,
  ShoppingBagOpen,
  ShoppingCartSimple,
} from "phosphor-react";

import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full border-b-2 border-neutral-300 drop-shadow-sm px-5 lg:px-0">
      <div className="pt-6 pb-3 w-full lg:w-3/5 mx-auto text-[#7A7A7A]">
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
              <Heart color="#808080" weight="fill" size={25} />
              <Link to={"/cart"}>
                <ShoppingCartSimple size={25} />
              </Link>
            </div>

            <div className="flex space-x-1">
              <Link to={"/login"}>
                <p>Login</p>
              </Link>
              <p>|</p>
              <Link to={"/signup"}>
                <p>Signup</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <ul className="flex space-x-8">
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelry</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>

          <div className="flex bg-neutral-200 justify-between w-[35%]">
            <input
              className="w-[90%] bg-transparent focus:outline-none ml-2 placeholder:text-sm"
              type="text"
              placeholder="Search"
            />
            <div className="bg-[#A6A0A0] p-1 px-2 cursor-pointer">
              <MagnifyingGlass color="white" size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
