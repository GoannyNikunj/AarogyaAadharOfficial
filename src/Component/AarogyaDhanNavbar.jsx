import React, { useState } from "react";
import Aarogya_Aadhar_logo from "../assets/Images/Aarogya_Aadhar_logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/Images/AarogyaDhan.jpeg"


const AarogyaDhanNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar-container ">
        <div className="top-banner bg-gray-100">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 px-2 py-2">
            <div className="flex flex-row items-center w-auto">
              <p className="text-[10px] sm:text-[11px] md:text-sm lg:text-lg text-center font-bold text-blue-900">
                <NavLink to='/monthly'>Be a savior for many. Donate monthly to help save invaluable lives in India</NavLink>
              </p>
              <div className="hidden lg:flex mx-6">
                <span className="double-arrow text-blue-900">»</span>
              </div>
              <button className="donate-button bg-blue-600 border-blue-700 ml-2 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[14px] font-semibold sm:font-bold w-44 text-white py-1 px-1 sm:py-2 sm:px-3 rounded-md whitespace-nowrap">
                Donate Monthly
              </button>
            </div>
          </div>
        </div>
        
        <div className="px-2 lg:px-5 xl:px-10 bg-white py-2">
          <div className="flex w-full gap-2 justify-between  lg:justify-evenly items-center">
            <div className=" flex gap-2 xl:gap-5">
              <img
                src={logo}
                alt="Logo"
                onClick={() => navigate("/")}
                className="logo h-10 w-24 sm:h-12 sm:w-32 lg:h-10 lg:w-24 xl:h-12 xl:w-32 cursor-pointer"
              />
              <img
                src={Aarogya_Aadhar_logo}
                alt="Logo"
                className="logo h-10 w-24 sm:h-12 sm:w-32 lg:h-10 lg:w-24 xl:h-12 xl:w-32"
              />
            </div>
            <div className="hidden lg:flex  lg:gap-3 xl:gap-6">
              <p className="cursor-pointer text-[10px] lg:text-[13px] xl:text-[16px] text-blue-900 ">
                Start a Free Fundraiser
              </p>
              <p className="cursor-pointer text-[10px] lg:text-[13px] xl:text-[16px] text-blue-900">
                <NavLink to="/howitwork">How it Works</NavLink>
              </p>
              <p className="cursor-pointer text-[10px] lg:text-[13px] xl:text-[16px] text-blue-900">Browse Fundraisers</p>
              <p className="cursor-pointer text-[10px] lg:text-[13px] xl:text-[16px] text-blue-900" onClick={()=>navigate('/topfundraisers')}>Top Fundraisers</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="help-button hidden lg:flex ml-2 text-[10px] sm:text-[11px] w-auto md:text-[14px] xl:text-[16px] lg:text-[13px] font-semibold sm:font-bold bg-blue-600 text-white py-1 px-1 sm:py-2 sm:px-2 xl-px-3 rounded-md whitespace-nowrap">Help</button>
              <button className="help-button hidden lg:flex ml-2 text-[10px] sm:text-[11px] w-auto md:text-[14px] xl:text-[16px] lg0text-[14px] font-semibold sm:font-bold bg-blue-600 text-white py-1 px-1 sm:py-2 sm:px-2 xl:px-3 rounded-md whitespace-nowrap">Login</button>
              <select className="bg-transparent py-1 px-2 text-[12px] sm:text-[14px] md:text-[14px] xl:text-[16px] lg:text-[14px] rounded">
                <option value="INR text-blue-900">INR</option>
              </select>
              <IoMenu className="flex lg:hidden h-8 w-8 sm:ml-5 cursor-pointer" onClick={toggleMenu} />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
            <div className="absolute top-28 right-0 w-[300px] h-[470px] rounded-md bg-white z-20 p-2 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
              <div className="flex justify-end mb-2">
                <IoClose className="h-6 w-6 cursor-pointer text-blue-900" onClick={toggleMenu} />
              </div>
              <div className="flex justify-center items-center mb-6">
                <button className="px-4 py-2 rounded-md bg-blue-900 text-white font-semibold">
                  Start a Free Fundraiser
                </button>
              </div>
              <div className="text-center space-y-4">
                <p className="text-blue-900 cursor-pointer hover:bg-gray-100 py-1">Home</p>
                <p className="text-blue-900 cursor-pointer hover:bg-gray-100 py-1">How it Works</p>
                <p className="text-blue-900 cursor-pointer hover:bg-gray-100 py-1">Browse Fundraisers</p>
                <p className="text-blue-900 cursor-pointer hover:bg-gray-100 py-1">Top Fundraisers</p>
                <p className="text-blue-900 cursor-pointer">Connect With Us</p>
                <p className="text-blue-900 cursor-pointer hover:bg-gray-100 py-1 flex items-center justify-center"> <FaPhoneAlt className="h-5 w-5 mr-1"/>340867657688</p>
                <button className="px-4 py-1 rounded-md bg-blue-900 text-[14px] text-white font-semibold">
                  Help
                </button>
                <br />
                <button className="px-4 py-1 rounded-md bg-blue-900 text-[14px] text-white font-semibold">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AarogyaDhanNavbar;
