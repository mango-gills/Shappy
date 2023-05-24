import React from "react";
import FooterLinksComponent from "./FooterLinksComponent";
import FooterNewsletter from "./FooterNewsletter";

const Footer = () => {
  return (
    <footer className="w-full  mx-auto bg-[#161616]  text-black md:pt-24 md:pb-12">
      <div className="mx-auto w-full lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1280px]">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between">
          <FooterLinksComponent />
          <FooterNewsletter />
        </div>
        <hr className="my-5" />
        <div className="footer-text-info flex flex-col-reverse md:flex-row  justify-between items-center pb-5 text-center font-normal text-white">
          <p className="mt-2 lg:mt-0">© 2023 Shappy. All Rights Reserved.</p>
          <div className="payment-info flex  items-center">
            <p className="text-sm md:text-base">Payment Methods.</p>
            <img
              src="https://cdn.shopify.com/s/files/1/0442/2749/4055/files/payments.png?v=1622516543"
              className="h-8 w-56 lg:w-auto"
              alt="payment-info"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
