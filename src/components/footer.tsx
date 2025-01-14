"use client";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {

  return (
      <footer className="w-full py-8 px-8 lg:px-16 z-50">
        <div className="flex flex-col items-center space-y-4">
          <h4 className="text-teal-800 font-bold text-xl md:text-2xl">
            Follow Us:
          </h4>
          <div className="flex space-x-6 mb-4">
            <a
              href="https://x.com/campus_bid"
              target="_blank"
              aria-label="Twitter"
              className="text-teal-800 hover:text-teal-900 transition duration-300"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/campusbid/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-teal-800 hover:text-teal-900 transition duration-300"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/campusbid.in/"
              target="_blank"
              aria-label="Instagram"
              className="text-teal-800 hover:text-teal-900 transition duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
          <div className="text-xs md:text-sm text-gray-600 mb-2">
          All rights reserved to CampusBid, Inc.
        </div>
        </div>
      </footer>
  );
};

export default Footer;
