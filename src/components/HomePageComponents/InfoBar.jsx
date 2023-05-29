import React from "react";
import truckIcon from "../../assets/truck.svg";
import creditCardIcon from "../../assets/credit-card.svg";
import envelopeIcon from "../../assets/envelope.svg";
import tagIcon from "../../assets/tag.svg";
import InfoBarItem from "./InfoBarItem";

const InfoBar = () => {
  const infoBarData = [
    {
      title: "Free Deliver",
      text: "On all orders under $1000",
      image_url: truckIcon,
    },
    {
      title: "Online Support",
      text: "24/7 online support",
      image_url: envelopeIcon,
    },
    {
      title: "100% Money-Back",
      text: "Experience Quality or Receive a Full Refund!",
      image_url: creditCardIcon,
    },
    {
      title: "Discounts",
      text: "Save More, Shop Smarter!",
      image_url: tagIcon,
    },
  ];

  return (
    <div className="my-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between gap-y-8 md:gap-y-4">
      {infoBarData.map((item, index) => (
        <InfoBarItem item={item} />
      ))}
    </div>
  );
};

export default InfoBar;
