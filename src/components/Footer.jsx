import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white mt-[50px] px-[30px] md:mt-[100px] md:px-[100px] py-12">
      <div className="flex flex-col md:flex-row justify-start items-center gap-0 md:gap-12 text-black">
        <div className="flex flex-col mb-8 md:mb-0 space-y-2 text-center md:text-left">
          <h3 className="text-lg text-black font-medium">Quick Links</h3>
          <Link to='/' className="hover:underline">
            Home
          </Link>
          <Link to='/about' className="hover:underline">
            About
          </Link>
          <Link to='/contact' className="hover:underline">
            Contact
          </Link>
        </div>
        <div className="flex flex-col mb-8 md:mb-0 space-y-2 text-center md:text-left">
          <h3 className="text-lg text-black font-medium">Location</h3>
          <span className="flex items-center gap-2">
            <CiLocationOn /> Hyderabad, Telangana
          </span>
          <span>Email: FaizanKhan@gmail.com</span>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 hover:text-gray-600 transition-colors" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="w-6 h-6 hover:text-gray-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-black mt-8">
        <p className="text-xs md:text-sm text-nowrap">
          All rights reserved by @FitnessCoach. Privacy policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
