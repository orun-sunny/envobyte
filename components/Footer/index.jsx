import { MailIcon } from "lucide-react";
import {
  Envobyte,
  FBIcon,
  InstaIcon,
  LinkedIcon,
  PinIcon,
  TwitterIcon,
  WHAIcon,
} from "../Icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="grid px-4 gap-6 sm:grid-cols-2  lg:grid-cols-6 lg:px-10 max-w-[1520px] mx-auto">
        {/* Logo & About */}
        <div>
          <Envobyte />
          <p className="mt-4 text-[16px] leading-[24px] font-roboto text-justify">
            We are an IT Company. We help businesses bring ideas to life easily
            and affordably.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[18px] font-bold leading-[27px] font-raleway">
            Company
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="text-[16px] leading-[24px] font-roboto">About Us</li>
            <li className="text-[16px] leading-[24px] font-roboto">
              Privacy Policy
            </li>
            <li className="text-[16px] leading-[24px] font-roboto">
              Refund Policy
            </li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="text-[18px] font-bold leading-[27px] font-raleway">
            Learn More
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="text-[16px] leading-[24px] font-roboto">
              Combo Offer
            </li>
            <li className="text-[16px] leading-[24px] font-roboto">
              Service Industries
            </li>
            <li className="text-[16px] leading-[24px] font-roboto">
              Envobyte Apps
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-[18px] font-bold leading-[27px] font-raleway">
            Support
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="text-[16px] leading-[24px] font-roboto">
              Contact Us
            </li>
            <li className="text-[16px] leading-[24px] font-roboto">FAQ</li>
            <li className="text-[16px] leading-[24px] font-roboto">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-[18px] font-bold leading-[27px] font-raleway">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="text-[16px] leading-[24px] font-roboto flex items-center gap-3">
              <MailIcon className="text-[#db844b]" /> support@envobyte.com
            </li>
            <li className="text-[16px] leading-[24px] font-roboto flex items-center gap-3">
              <WHAIcon /> +1 (667) 777 2477
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <FBIcon />
            <LinkedIcon />
            <InstaIcon />
            <TwitterIcon />
            <PinIcon className="w-[31px]" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm font-roboto mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Envobyte. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
