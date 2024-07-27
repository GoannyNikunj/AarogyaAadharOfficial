import React from "react";
import OurPolicies from "./OurPolicies";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavabr";
import Navbar from "./Navbar";
import ScrollingTagline from "./ScrollingTagline";
// import bgimage from '../assets/Images/5.jpg';

const ApplyHealthCard = () => {
  return (
    <>
      <div className="xl:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden xl:flex">
        <Navbar />
        <div className="flex xl:hidden fixed top-[83px] sm:top-[105px] bg-white">
          <ScrollingTagline />
        </div>
      </div>
      <div className="mt-[135px] xl:mt-36 pt-4 py-3m px-2 sm:px-4 md:mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900">
          Aarogya Aadhar Member Registration 
        </h2>
        <hr className="my-4 mx-4" />
        <div className="col-span-12 md:col-span-8">
          {/* <p className="text-2xl md:text-4xl font-bold text-center text-blue-900">
            Aarogya Aadhar Member Registration Details:
          </p> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-blue-900">
                First Name <span className="text-red-500">*</span>{" "}
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[70%]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-blue-900">
                Middle Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Middle Name"
                className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[70%]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-blue-900">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[70%]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-blue-900">
                Gender <span className="text-red-500">*</span>
              </label>
              <div className="relative max-w-[70%]">
                <select
                  name=""
                  id=""
                  className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                >
                  <option value="">Select Gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Transgender</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-blue-900">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter City Name"
                className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[70%]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-blue-900">
                Present Address Pin Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Pin Code"
                className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[70%]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-blue-900">
                Mobile No <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[70%]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-blue-900">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Email ID"
                className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[70%]"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="rounded-md text-white bg-blue-900 h-10 px-4 mt-5">
              Submit
            </button>
          </div>
        </div>
      </div>
      <OurPolicies />

      <Footer />
    </>
  );
};

export default ApplyHealthCard;