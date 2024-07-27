import React from 'react'
import Google_Play_Store from "../assets/Images/Google_Play_Store.png";
import App_Store from "../assets/Images/App_Store.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Aarogya_Aadhar_logo from "../assets/Images/Aarogya_Aadhar_logo.png";
import RapidSSL from '../assets/Images/impactFooterIcons/RapidSSL.png'
import Visa from '../assets/Images/impactFooterIcons/Visa.png'
import MasterCard from '../assets/Images/impactFooterIcons/MasterCard.png'
import AmericanExpress from '../assets/Images/impactFooterIcons/AmericanExpress.png'
import Paytm from '../assets/Images/impactFooterIcons/Paytm.jpeg'
import UPI from '../assets/Images/impactFooterIcons/UPI.png'
import RTGS from '../assets/Images/impactFooterIcons/RTGS.jpg'
import NEFT from '../assets/Images/impactFooterIcons/NEFT.jpeg'

const ImpactFooter = () => {
  return (
    <>
    <div className=' flex justify-center items-center'>
        <button className=' bg-blue-500 text-white px-3 py-2 rounded-md'>START A FREE FUNDRAISER</button>
    </div>
    <div className="flex flex-wrap gap-4 items-center justify-center mt-2 py-4">
        <div className="">
          <h3 className="text-xl text-center sm:text-2xl font-semibold text-blue-900">
          Join the Aarogya Dhan Community!
          </h3>
        </div>
        <div className="sm:flex gap-2">
          <input
            type="text"
            className="w-full h-10 py-1 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
            placeholder="Enter Your Email "
            aria-label="Search"
          />
          <button
            className="bg-blue-900 mt-2 sm:mt-0 flex justify-center items-center  h-10 w-full text-white px-0 py-3 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2"
            type="button"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    <div className='grid grid-cols-2 lg:grid-cols-5 xl:flex xl:justify-between py-2 pt-5 px-4 lg:px-16'>
    <div className='flex flex-col'>
        <h3 className=" text-md  sm:text-2xl lg:text-xl xl:text-2xl font-bold pb-2 text-blue-900">About Us</h3>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">Team</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900 py-2">Careers</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">Blog</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900 py-2">Press & Awards</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">Bug Bounty</p>
      </div>



      <div>
        <h3 className=" text-md  sm:text-2xl lg:text-xl xl:text-2xl font-bold pb-2 text-blue-900">Learn</h3>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">What is Crowdfunding?</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900 py-2">Fundraising Ideas</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">Fundraising Tips</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900 py-2">Frequently Asked Questions</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">Pricing & Fees</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900 py-2">Trust & Safety</p>
      </div>

      <div>
        <h3 className=" text-md  sm:text-2xl lg:text-xl xl:text-2xl font-bold pb-2 text-blue-900">Top Categories</h3>
        <p className=" cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">Medical Crowdfunding</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900 py-2">Transplant Crowdfunding</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">Cancer Crowdfunding</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900 py-2">Child Health Crowdfunding</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">NGO Crowdfunding</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900 py-2">Education Crowdfunding</p>
        <p className="cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">Emergency Crowdfunding</p>
      </div>


      <div>
        <h3 className="text-md  sm:text-2xl lg:text-xl xl:text-2xl font-bold pb-2 text-blue-900">Contact Us</h3>
        <p className=" text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900">Social Links</p>
       
        <div className=" flex gap-3 py-2">
          <FaFacebook className=" h-6 w-6 text-blue-700 cursor-pointer" />
          <FaInstagramSquare className=" h-6 w-6 text-red-500 cursor-pointer" />
          <FaTwitter className=" h-6 w-6 text-blue-700 cursor-pointer" />
          <IoLogoYoutube className=" h-6 w-6 text-red-500 cursor-pointer" />
          <FaLinkedin className=" h-6 w-6 text-blue-700 cursor-pointer" />
        </div>
        <p className=' mt-1 cursor-pointer text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900'>Click below to Raise a Concern</p>
       <button className=' bg-blue-500 text-white mt-2 text-[13px] py-1 px-3 rounded-md'>Raise A Concern</button>
       <div>
      </div>
      </div>

     


      <div className='hidden lg:flex flex-col'>
      <h1 className="text-md  sm:text-2xl lg:text-xl xl:text-2xl font-bold pb-2 text-blue-900">Download App</h1>
      <div className=" h-14 w-44 cursor-pointer">
          <img src={Google_Play_Store} alt="" />
        </div>
        <div className="h-14 w-44 cursor-pointer">
          <img src={App_Store} alt="" />
        </div>
      </div>
      
      
    </div>
    <div className=' mt-5 mx-3 lg:mx-14'>
<div className=' flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 '>
    <img src={Aarogya_Aadhar_logo} alt="" className='h-16 w-40 md:h-16 md:w-40'/>
<p className=' text-[10px] sm:text-[13px] xl:text-[16px] text-blue-900'>Aarogya Aadhar is an online technology platform connecting donors and donees. We do not provide any financial return in any form whatsoever, including but not limited to financial securities (debt or equity), interest, dividend, profit share, rewards in cash, to individuals who make payments on the Platform.</p>
</div>

<div className=' sm:flex justify-center items-center pb-16 lg:pb-1 gap-2'>

<div className=' grid grid-cols-4 lg:grid-cols-8 items-center bg-white my-2'>
    <img src={RapidSSL} alt="" className='h-12'/>
    <img src={Visa} alt="" className='h-12'/>
    <img src={MasterCard} alt="" className='h-12'/>
    <img src={AmericanExpress} alt=""className='h-12' />
    <img src={Paytm} alt="" className=' h-8' />
    <img src={UPI} alt="" className='h-12'/>
    <img src={RTGS} alt="" className='h-12'/>
    <img src={NEFT} alt="" className='h-12'/>
</div>
</div>
      </div>
    </>

  )
}

export default ImpactFooter