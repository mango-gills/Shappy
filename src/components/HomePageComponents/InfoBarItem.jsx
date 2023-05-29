import React from "react";

const InfoBarItem = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-left items-center space-x-2 col-span-1">
      <div className="bg-[#F3E1E1] rounded-full p-3">
        <img
          src={item.image_url}
          alt="icon-truck"
          className="h-6 w-6 md:h-12 md:w-12"
        />
      </div>
      <div>
        <h2 className="font-bold text-xl leading-tight">{item.title}</h2>
        <p className="text-[#7C7C7C] text-sm">{item.text}</p>
      </div>
    </div>
  );
};

export default InfoBarItem;
