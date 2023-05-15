import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  mx-auto bg-[#161616]  text-black pt-5">
      <div className="mx-auto w-full lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1280px]">
        <div className="footer-links my-6 flex items-start px-5 lg:px-0 space-x-6 pb-2 text-white">
          <div className="customer-service">
            <h1 className="mb-1 font-bold">Customer Service</h1>
            <ul className="space-y-2 font-light">
              <li>Help Center</li>
              <li>Report Abuse</li>
              <li>Submit a Dispute</li>
              <li>Policies & Rules</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="about-us">
            <h1 className="mb-1 font-bold">About Us</h1>
            <ul className="space-y-2 font-light">
              <li>About Shappy</li>
              <li>Sitemap</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <hr className="my-2" />
        <div className="footer-text-info flex flex-col-reverse items-center justify-between p-4 text-center font-normal text-white">
          <p>© 2023 Shappy. All Rights Reserved.</p>
          <div className="payment-info flex flex-col items-center pb-4">
            <p>We accept the following payment methods.</p>
            <img
              src="https://cdn.shopify.com/s/files/1/0442/2749/4055/files/payments.png?v=1622516543"
              className="h-8"
              alt="payment-info"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
