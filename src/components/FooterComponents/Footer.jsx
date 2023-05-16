import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  mx-auto bg-[#161616]  text-black pt-5">
      <div className="mx-auto w-full lg:max-w-[1000px] xl:max-w-[1100px] 2xl:max-w-[1280px]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="footer-links my-6 flex items-start px-5 lg:px-0 space-x-6 pb-2 text-white">
            <div className="customer-service">
              <h1 className="mb-1 font-bold">Customer Service</h1>
              <ul className="space-y-2 font-light text-sm md:text-base">
                <li>Help Center</li>
                <li>Report Abuse</li>
                <li>Submit a Dispute</li>
                <li>Policies & Rules</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="about-us">
              <h1 className="mb-1 font-bold">About Us</h1>
              <ul className="space-y-2 font-light text-sm md:text-base">
                <li>About Shappy</li>
                <li>Sitemap</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="follow-us">
              <h1 className="mb-1 font-bold">Follow Us</h1>
              <ul className="space-y-2 font-light text-sm md:text-base">
                <li className="flex items-center">
                  <FacebookLogo
                    size={20}
                    color="#ffffff"
                    weight="fill"
                    className="mr-1"
                  />
                  Facebook
                </li>
                <li className="flex items-center">
                  <YoutubeLogo
                    size={20}
                    color="#ffffff"
                    weight="fill"
                    className="mr-1"
                  />
                  Youtube
                </li>
                <li className="flex items-center">
                  <TwitterLogo
                    size={20}
                    color="#ffffff"
                    weight="fill"
                    className="mr-1"
                  />
                  Twitter
                </li>
                <li className="flex items-center">
                  <InstagramLogo
                    size={20}
                    color="#ffffff"
                    weight="fill"
                    className="mr-1"
                  />
                  Instagram
                </li>
              </ul>
            </div>
          </div>

          <form className="bg-neutral-600 w-full md:w-[500px] px-5 py-8">
            <h1 className="text-white font-semibold text-lg md:text-xl">
              JOIN OUR NEWSLETTER
            </h1>
            <p className="text-white text-sm">
              Subscribe to our newsletter to receive the latest news and
              exclusive offers every week.
            </p>
            <div className="mt-5 space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full outline-none text-center"
              />
              <button className="bg-black/80 px-4 text-white py-2 outline-none hover:bg-black transition ease-in duration-150 w-full">
                Subscribe
              </button>
            </div>
          </form>
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
