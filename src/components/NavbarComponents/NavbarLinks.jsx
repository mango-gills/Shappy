import React from "react";
import { CartContextProvider } from "../../store/CartContext";
import { UserAuth } from "../../store/AuthContext";

import { Heart, ShoppingCartSimple, SignOut, UserCircle } from "phosphor-react";
import { Link } from "react-router-dom";

const NavbarLinks = ({ isMenuOpen, setMenuIsOpen }) => {
  const { onCart } = CartContextProvider();
  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      window.location.reload();
    } catch (e) {
      console.log(e.message);
    }

    setMenuIsOpen(false);
  };

  return (
    <div>
      <div className="items-center space-x-1 flex">
        {user ? (
          <ul className="flex flex-col md:flex-row lg:space-x-4">
            <li className="flex space-x-2 items-center cursor-pointer">
              <Heart color="#808080" weight="fill" size={30} />
              <p className="md:hidden">Wishlist</p>
            </li>

            <li
              onClick={() => setMenuIsOpen(false)}
              className="flex items-center"
            >
              <Link to={"/cart"} className="relative flex items-center">
                {onCart > 0 && (
                  <div className="absolute -top-1 left-5 bg-green-500/90 rounded-full h-3 w-3 md:h-5 md:w-5 text-white flex items-center justify-center p-2">
                    <p className="text-[10px] md:text-xs font-bold">{onCart}</p>
                  </div>
                )}
                <ShoppingCartSimple size={30} />
                <p className="md:hidden ml-2">Cart</p>
              </Link>
            </li>

            <li className="flex space-x-2 md:space-x-1 items-center md:border md:border-neutral-300 md:p-1 rounded-full cursor-pointer">
              <UserCircle size={30} weight="light" />
              <p>{user.email}</p>
            </li>

            <li
              className="flex space-x-2 items-center cursor-pointer hover:text-neutral-800 ease-in duration-150 mt-1"
              onClick={handleLogout}
            >
              <SignOut size={30} weight="light" />
              <p className="md:hidden"> Signout</p>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NavbarLinks;
