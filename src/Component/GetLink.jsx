import React from "react";

const GetLink = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center lg:mt-2 lg:py-4">
        <div className="">
          <h3 className="text-md hidden lg:flex sm:text-xl md:text-3xl font-bold text-blue-900">
            Get the Link to Download App
          </h3>
        </div>
        <div className="flex gap-2 mx-10">
          <input
            type="text"
            className="w-full h-8 lg:h-10 py-1 px-2 text-[14px] sm:text-sm border border-gray-300 rounded-full lg:rounded-md focus:outline-none focus:ring-2 "
            placeholder="Enter Phone Number"
            aria-label="Search"
          />
          <button
            className="bg-blue-900 flex justify-center text-[14px] sm:text-sm items-center h-8 lg:h-10 w-32 text-white px-0 py-3 rounded-full lg:rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2"
            type="button"
          >
            Send Link
          </button>
        </div>
        <div className="">
          <h3 className="text-md  lg:hidden sm:text-xl md:text-3xl font-bold text-blue-900">
            Get the Link to Download App
          </h3>
        </div>
      </div>
    </>
  );
};

export default GetLink;
