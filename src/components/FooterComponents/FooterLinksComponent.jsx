import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

const FooterLinksComponent = () => {
  return (
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
  );
};

export default FooterLinksComponent;
