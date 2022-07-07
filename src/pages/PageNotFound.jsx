import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <section className="body-font text-gray-400">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4 block w-2/3 rounded object-cover object-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="flex w-full flex-col text-center">
            <h1 className="title-font mb-2 text-9xl font-bold text-gray-600">
              404
            </h1>
            <div className="text-lg">
              <h2>Oops! Page not found.</h2>
              <p className="mx-auto leading-relaxed lg:w-2/3">
                The page you're looking for doesn't exist.
              </p>
            </div>
            <Link to={"/"} className="mt-2">
              <button
                type="submit"
                className="rounded-md bg-gray-600 px-4 py-2 text-lg font-bold text-white hover:bg-black hover:text-red-500"
              >
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
