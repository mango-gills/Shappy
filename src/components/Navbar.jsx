import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <main className="mb-8 bg-neutral-900">
      {/* <header className="flex h-[12rem] flex-col text-white md:h-[7rem] lg:h-[120px] lg:flex-row">
        
      </header> */}
      <header className="relative  mb-3 flex flex-wrap items-center justify-between  px-2 py-3 lg:h-[120px]">
        <div className="container mx-auto flex w-[60%] flex-wrap items-center justify-between">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <Link
              to={"/"}
              className="title-font mb-2 flex items-center font-medium  md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-10 w-10 rounded-md bg-[#da0037] lg:h-12 lg:w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h1 className="text-3xl font-medium text-white lg:text-4xl">
                Shappy
              </h1>
            </Link>
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "items-left flex-col text-white lg:flex lg:flex-row lg:items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex list-none flex-col text-white lg:ml-auto lg:flex-row">
              <Link
                className="py-2 hover:text-red-400 sm:px-0 lg:px-3"
                to={`/`}
              >
                Home
              </Link>
              <Link
                className="py-2 hover:text-red-400 sm:px-0 lg:px-3"
                to={`/`}
              >
                Flash Sale
              </Link>
              <Link
                className="py-2 hover:text-red-400 sm:px-0 lg:px-3"
                to={`/`}
              >
                Best Seller
              </Link>
              <Link
                className="py-2 hover:text-red-400 sm:px-0 lg:px-3"
                to={`/`}
              >
                Sell
              </Link>
            </ul>
            <Link to={"/cart"}>
              <svg
                className="ml-0 h-10 w-10 cursor-pointer transition-all hover:scale-125 hover:text-red-400 lg:h-12 lg:w-12"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="9" cy="19" r="2" /> <circle cx="17" cy="19" r="2" />{" "}
                <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <div className="sub-links h-8 bg-[#da0037]">
        <div className="mx-auto flex h-full w-[60%] cursor-pointer items-center justify-center space-x-2 font-normal text-white md:justify-end">
          <a className="hover:text-neutral-900">Login</a>
          <span>|</span>
          <a className="hover:text-neutral-900">Sign Up</a>
        </div>
      </div>
      <div className="sub-links h-10 bg-white ">
        <div className="mx-auto flex w-[60%] cursor-pointer justify-center space-x-2 font-normal lg:justify-end">
          <div className="border-b-2">
            <input
              type="text"
              name="input"
              className="mt-4 h-8 w-[400px] border-none text-center text-black outline outline-transparent lg:text-left"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
