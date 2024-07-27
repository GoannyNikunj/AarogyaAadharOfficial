import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
const ScrollingTagline = () => {
  return (
    <div className='bg-blue-400 rounded-[4px] w-full'>
    <div className="overflow-hidden  whitespace-nowrap py-0 lg:mt-0 mx-5 lg:mx-10 rounded-[3px]">
      <div className=" flex justify-center items-center text-[13px] text-white  sm:text-[17px]  lg:text-[19px] animate-marquee font-sans font-medium lg:font-normal ">
      Welcome to Aarogya Aadhar !! Aarogya Aadhar Approved & Funded by Government of India | Aarogya Aadhar Certified by ISO:27001 Online Healthcare Platform | Your Health Your Choice | Connect with us +91 79-7272-7498 | Mail ID: info@aarogyaaadhar.com
      </div>
      </div>
    </div>
  );
};

export default ScrollingTagline;