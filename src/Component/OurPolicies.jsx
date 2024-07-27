import React from "react";
import Google_Play_Store from "../assets/Images/Google_Play_Store.png";
import App_Store from "../assets/Images/App_Store.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const OurPolicies = () => {
  return (
    <div className=" grid grid-cols-2 lg:grid-cols-5 xl:flex xl:justify-between py-2 pt-5 px-4 lg:px-5">
     <div className=" lg:hidden flex flex-col">
        <h1 className="text-md  sm:text-2xl font-bold pb-2 text-blue-900">Our Services</h1>
        <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Features for Doctor</p>
          <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Features for Hospital</p>
          <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Features for HSP</p>
          <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Features for Chemist</p>
          <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Features for Health Worker</p>
          <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Features for Corporate</p>
      </div>
      <div className=" lg:hidden flex flex-col">
        <h1 className="text-md  sm:text-2xl font-bold pb-2 text-blue-900">Connect</h1>
        <p className=" text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Social Links</p>
        <div className=" flex gap-3 py-2">
          <FaFacebook className=" h-6 w-6 text-blue-700 cursor-pointer" />
          <FaInstagramSquare className=" h-6 w-6 text-red-500 cursor-pointer" />
          <FaTwitter className=" h-6 w-6 text-blue-700 cursor-pointer" />
          <IoLogoYoutube className=" h-6 w-6 text-red-500 cursor-pointer" />
          <FaLinkedin className=" h-6 w-6 text-blue-700 cursor-pointer" />
        </div>
       
      </div>


      <div>
        <h1 className="text-md  sm:text-2xl font-bold pb-2 text-blue-900 mt-2 lg:mt-0">Know Us</h1>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">About Us</p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Contact Us</p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Press Coverage</p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Careers</p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Business Partnership </p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Become a Health Partner</p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Corporate Governance</p>
      </div>
      <div>
        <h1 className="text-md  sm:text-2xl font-bold pb-2 text-blue-900 mt-2 lg:mt-0">Our Policies</h1>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Privacy Policy</p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Terms and Conditions</p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Editorial Policy</p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Return Policy</p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">IP Policy</p>
        <p className=" cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Grievance Redressal Policy</p>
        <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Fake Jobs and Fraud Disclaimer</p>

      </div>
      <div className=" hidden lg:flex flex-col">
        <h1 className="text-lg sm:text-2xl font-bold pb-2 text-blue-900">Our Services</h1>
        <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Features for Doctor</p>
          <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Features for Hospital</p>
          <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Features for HSP</p>
          <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Features for Chemist</p>
          <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Features for Health Worker</p>
          <p className="cursor-pointer text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900 py-2">Features for Corporate</p>
      </div>
      <div className=" hidden lg:flex flex-col">
        <h1 className="text-lg sm:text-2xl font-bold pb-2 text-blue-900">Connect</h1>
        <p className=" text-[10px] sm:text-[11px] xl:text-[16px] text-blue-900">Social Links</p>
        <div className=" flex gap-3 py-2">
          <FaFacebook className=" h-6 w-6 text-blue-700 cursor-pointer" />
          <FaInstagramSquare className=" h-6 w-6 text-blue-700 cursor-pointer" />
          <FaTwitter className=" h-6 w-6 text-blue-700 cursor-pointer" />
          <IoLogoYoutube className=" h-6 w-6 text-blue-700 cursor-pointer" />
          <FaLinkedin className=" h-6 w-6 text-blue-700 cursor-pointer" />
        </div>
       
      </div>

      <div className=" hidden lg:flex flex-col">
        <h1 className="text-lg sm:text-2xl font-bold pb-2 text-blue-900">Download App</h1>
        <div className=" h-14 w-44 cursor-pointer">
          <img src={Google_Play_Store} alt="" />
        </div>
        <div className="h-14 w-44 cursor-pointer">
          <img src={App_Store} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurPolicies;
