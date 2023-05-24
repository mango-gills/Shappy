import React from "react";
import gamestation5 from "../assets/gamestation5.webp";
import hyperdrive from "../assets/hyperdrive.webp";
import headphones from "../assets/headphones.webp";

const DailyDeals = () => {
  return (
    <div className="my-8 md:grid md:grid-cols-6 lg:grid-cols-5 bg-white border">
      <div className="md:col-span-3 lg:col-span-2 w-full">
        <img src={gamestation5} alt="daily-deal-img" className="w-full" />
      </div>

      <div className="md:col-span-3 lg:col-span-2 p-8 w-full">
        <p className="text-[#FF2D2D] uppercase text-lg xl:text-xl">
          Daily Deals
        </p>
        <h1 className="uppercase font-bold text-2xl lg:mt-2 lg:text-3xl tracking-wider">
          Gamestation 5
        </h1>

        <div className="flex space-x-4 items-center my-2">
          <p className="text-2xl lg:text-3xl text-[#ED3636] font-bold">
            $299.99
          </p>
          <p className="text-[#888585] text-base xl:text-xl line-through">
            $359.99
          </p>
        </div>

        <p className="text-justify text-[#454343] mt-3 text-xs xl:text-base">
          Experience gaming at its finest with the Gamestation 5. Unleash
          stunning visuals, responsive gameplay, and a vast library of titles.
          Dive into immersive worlds, master precision control, and embrace the
          future of gaming. Level up with the Gamestation 5.
        </p>

        <div className="flex flex-col lg:flex-row mt-4 lg:space-x-2 text-[#454343] lg:items-center">
          <p className="text-base lg:text-xl">Offer ends in:</p>
          <p className="text-2xl xl:text-3xl font-semibold">12 : 00 : 00</p>
        </div>

        <button className="uppercase my-4 px-8 xl:px-12 py-3 xl:py-4 bg-[#100F0F] text-white font-semibold text-sm lg:text-base xl:text-xl">
          Buy Now
        </button>
      </div>

      <div className="lg:flex w-full lg:col-span-1 lg:flex-col hidden">
        <img src={hyperdrive} alt="" className="w-1/2 md:w-full" />
        <img src={headphones} alt="" className="w-1/2 md:w-full" />
      </div>
    </div>
  );
};

export default DailyDeals;
