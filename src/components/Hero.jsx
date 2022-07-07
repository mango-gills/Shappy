import React from "react";
import imageShop from "../images/shop-image.jpg";
import { Link } from "react-router-dom";

const heroPage = () => {
  return (
    <div>
      <section className="body-font mx-auto text-gray-600">
        <div className="container mx-auto flex flex-col items-center justify-center pt-2 pb-6">
          <div className="mb-2 h-[220px] w-full overflow-hidden rounded-none md:h-[300px] md:w-[100%] md:rounded-2xl lg:h-[350px] lg:w-[100%] lg:xl:rounded-2xl">
            <Link to={"/sale"} className="cursor-pointer">
              <img
                src={imageShop}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default heroPage;
