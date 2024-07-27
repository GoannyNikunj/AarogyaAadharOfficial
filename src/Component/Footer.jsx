import React from "react";
import Reliable from "../assets/Images/footer-image/Reliable.png";
import Secure from "../assets/Images/footer-image/Secure.png";
import Affordable from "../assets/Images/footer-image/Affordable.png";

const Footer = () => {
  return (
    <div className=" pt-2 pb-20 lg:pb-8 md:px-0">
      <hr className="my-2 bg-slate-400" />
      <div className=" grid sm:grid-cols-1  lg:flex justify-between gap-3 mx-2 sm:mr-5">
        <div className="flex gap-2">
          <div className=" flex items-center justify-center  ">
            <img src={Reliable} alt="" className="h-24 w-72 lg:w-96" />
          </div>
          <div>
            <h1 className="text-md sm:text-2xl font-bold text-blue-900">Reliable</h1>
            <p className="text-[10px] sm:text-[14px] lg:text-[12px] xl:text-[16px] text-blue-900 ">
              All products displayed on Aarogya Aadhar are procured from verified and
              licensed pharmacies. All labs listed on the platform are
              accredited
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className=" flex items-center justify-center">
            <img src={Secure} alt="" className="h-24 w-72 lg:w-96" />
          </div>
          <div>
            <h1 className="text-md sm:text-2xl font-bold text-blue-900">Secure</h1>
            <p className="text-[10px] sm:text-[14px] lg:text-[12px]  xl:text-[16px] text-blue-900 ">
              All products displayed on Aarogya Aadhar are procured from verified and
              licensed pharmacies. All labs listed on the platform are
              accredited
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className=" flex items-center justify-center">
            <img src={Affordable} alt="" className="h-24 w-72 lg:w-96" />
          </div>
          <div>
            <h1 className="text-md sm:text-2xl font-bold text-blue-900">Affordable</h1>
            <p className="text-[10px] sm:text-[14px] lg:text-[12px]  xl:text-[16px] text-blue-900 ">
              All products displayed on Aarogya Aadhar are procured from verified and
              licensed pharmacies. All labs listed on the platform are
              accredited
            </p>
          </div>
        </div>
      </div>
        </div>
  );
};

export default Footer;
 