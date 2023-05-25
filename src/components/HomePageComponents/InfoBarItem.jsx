import React from "react";

const InfoBarItem = () => {
  return (
    <div className="flex items-center space-x-2 col-span-1">
      <div className="bg-[#F3E1E1] rounded-full p-3">
        <img src={item.image_url} alt="icon-truck" className="h-12 w-12" />
      </div>
      <div>
        <h2 className="font-bold text-xl leading-tight">{item.title}</h2>
        <p className="text-[#7C7C7C] text-sm">{item.text}</p>
      </div>
    </div>
  );
};

export default InfoBarItem;
