import React from "react";

const Footer = () => {
  return (
    <div className="mt-8 bg-black lg:h-[600px]">
      <div className="newsletter-container mx-auto flex h-32 w-full justify-center bg-[#444444] align-middle text-white lg:h-[200px]">
        {/* Newsletter sign up section */}
        <div className="flex h-full w-full flex-col items-center justify-center space-y-2 lg:space-y-4">
          <h1 className="font-bold lg:text-lg">
            Sign up now to our newsletter.
          </h1>
          <div className="input-container flex h-8 w-[20rem] items-center justify-center overflow-hidden rounded-2xl md:w-[30rem]  lg:h-10 lg:rounded-3xl">
            <input
              type="email"
              className="h-full w-full bg-white pl-4 text-base text-neutral-900 placeholder:text-sm placeholder:text-gray-500"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="h-full bg-[#da0037] px-2 text-sm font-semibold text-white lg:px-4"
            >
              Submit
            </button>
          </div>
          <p className="text-center text-xs font-light md:text-sm">
            Join now and receive a $20 sign up reward to spend on your next
            purchase.
          </p>
        </div>
      </div>
      {/* Footer Links */}
      <div className="links-container mx-auto w-[60%]">
        <div className="footer-links my-6 flex flex-col items-center space-y-6 pb-2 text-center text-white lg:flex-row lg:items-start lg:space-y-0 lg:space-x-12 lg:pb-0 lg:text-left">
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
          <p>© 2022 Shappy. All Rights Reserved.</p>
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
    </div>
  );
};

export default Footer;
