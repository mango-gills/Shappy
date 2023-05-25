import React from "react";
import truckIcon from "../../assets/truck.svg";
import creditCardIcon from "../../assets/credit-card.svg";
import envelopeIcon from "../../assets/envelope.svg";
import tagIcon from "../../assets/tag.svg";

const InfoBar = () => {
  return (
    <div className="my-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between gap-y-4">
      <div className="flex items-center space-x-2 col-span-1">
        <div className="bg-[#F3E1E1] rounded-full p-3">
          <img src={truckIcon} alt="icon-truck" className="h-12 w-12" />
        </div>
        <div>
          <h2 className="font-bold text-xl leading-tight">Free Delivery</h2>
          <p className="text-[#7C7C7C] text-sm">On all orders under $1000</p>
        </div>
      </div>

      <div className="flex items-center space-x-2  col-span-1">
        <div className="bg-[#F3E1E1] rounded-full p-3">
          <img src={creditCardIcon} alt="icon-truck" className="h-12 w-12" />
        </div>
        <div>
          <h2 className="font-bold text-xl leading-tight">Online Support</h2>
          <p className="text-[#7C7C7C] text-sm">
            24 hours a day online support
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 col-span-1">
        <div className="bg-[#F3E1E1] rounded-full p-3">
          <img src={envelopeIcon} alt="icon-truck" className="h-12 w-12" />
        </div>
        <div>
          <h2 className="font-bold text-xl leading-tight">
            Moneyback Guarantee
          </h2>
          <p className="text-[#7C7C7C] text-sm">
            Get your money back on orders under 7 days
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 col-span-1">
        <div className="bg-[#F3E1E1] rounded-full p-3">
          <img src={tagIcon} alt="icon-truck" className="h-12 w-12" />
        </div>
        <div>
          <h2 className="font-bold text-xl leading-tight">Discounts</h2>
          <p className="text-[#7C7C7C] text-sm">Applied to orders over $1500</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
