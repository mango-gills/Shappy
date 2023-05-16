import React from "react";

const FooterNewsletter = () => {
  return (
    <form className="bg-neutral-600 w-full md:w-[500px] px-5 py-8">
      <h1 className="text-white font-semibold text-lg md:text-xl">
        JOIN OUR NEWSLETTER
      </h1>
      <p className="text-white text-sm">
        Subscribe to our newsletter to receive the latest news and exclusive
        offers every week.
      </p>
      <div className="mt-5 space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 w-full outline-none text-center"
        />
        <button className="bg-black/80 px-4 text-white py-2 outline-none hover:bg-black transition ease-in duration-150 w-full">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default FooterNewsletter;
