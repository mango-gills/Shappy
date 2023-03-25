import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const FeaturedImage = () => {
  return (
    <div>
      <div className="main-grid w-full h-[260px] xl:h-[350px] grid grid-cols-3 gap-3">
        <div
          className="col-span-2 small bg-green-300 w-full h-full bg-center bg-cover bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url(${image3})` }}
        ></div>
        <div className="small w-full h-full grid grid-rows-2 gap-3">
          <div
            className="  bg-blue-300 w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          <div
            className="  bg-blue-300 w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;
