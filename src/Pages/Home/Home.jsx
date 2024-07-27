import React from "react";
import AutoSlider from "../../Component/AutoSlider";
import Connections from "../../Component/Connections";
import TreatmentSpecialities from "../../Component/TreatmentSpecialities";
import ServicePartner from "../../Component/ServicePartner";
import Testimonial from "../../Component/Testimonial";
import Navbar from "../../Component/Navbar";
import MobileNavbar from "../../Component/MobileNavabr";
import AutoSlider1 from "../../Component/AutoSlider1";
import GetLink from "../../Component/GetLink";
import AllDiseases from "../../Component/AllDiseases";
import ScrollingTagline from "../../Component/ScrollingTagline";
import OurPolicies from "../../Component/OurPolicies";
import Footer from "../../Component/Footer";
import AarogyaDhan from '../../assets/Images/AarogyaDhan.jpeg'
import Healthcard from '../../assets/Images/NewSilder/Aarogy Aadhar01.jpg'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden lg:flex">
        <Navbar />
      </div>
      <div className="flex lg:hidden z-10 fixed top-[77px] sm:top-[100px] py-[2px] w-full bg-white">
        <ScrollingTagline />
      </div >
      <div className="mt-[15px] sm:mt-[40px] xl:mt-[65px] ">
        <div className=" bg-white">
        <div className="xl:grid grid-cols-12">
          <div className="xl:col-span-8">
            <AutoSlider />
          </div>
          <div className="col-span-4 z-0 hidden xl:flex">
            <img src={AarogyaDhan} alt="" className="w-full xl:h-[56vh]" />
          </div>
        </div>
        <div className="hidden lg:flex">
          <ScrollingTagline />
        </div>
        <div className="lg:px-14 mt-2">
          <Connections />
        </div>
        </div>
        <TreatmentSpecialities />
        <AllDiseases />
        <div className="lg:grid grid-cols-12 lg:mt-2 sm:px-0 xl:px-5 gap-3 lg:py-3">
          <div className="col-span-9">
            <AutoSlider1 />
          </div>
          <div className="col-span-3 xl:mb-5 hidden lg:flex flex-col mt-2 lg:mt-0 justify-center">
            <p className="text-blue-500 text-md xl:text-lg xl:leading-6 font-semibold mb-1">
              BE A PART OF LIVO AAROGYA AADHAR
            </p>
            <h4 className="text-[#4b3279] leading-7 xl:leading-10 lg:text-[30px] xl:text-[40px] font-bold">
              Free Access <br />
              Free Support
            </h4>
            <p className="text-blue-500 lg:text-md xl:text-lg xl:leading-7 font-semibold mt-2">
              Aarogya Aadhar Providing <br /> Integrated Healthcare Solution
            </p>
          </div>
        </div>
        <div className=" lg:py-8 mt-2">
          <Testimonial />
        </div>
        <div className="lg:py-3 xl:py-7 mt-2">
          <p className="text-center lg:mb-4 text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
            Our Service Partners
          </p>
          <p className="text-center lg:hidden text-blue-500 mb-2 lg:mb-4">
            <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer">
              Hospitals
            </span>{" "}
            <span className=" mx-[2px]">|</span>{" "}
            <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer">
              Diagnostic Centers
            </span>{" "}
            <span className="mx-[2px]">|</span>{" "}
            <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer">
              Pathology Labs
            </span>{" "}
           <br />
            <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer">
              Insurance Companies
            </span>{" "}
           <span className=" mx-[2px]">|</span> {" "}
            <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer">
              Corporates
            </span>
          </p>

          <p className="text-center hidden lg:flex justify-center text-blue-500 mb-2 lg:mb-4">
            <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer">
              Hospitals
            </span>{" "}
            <span className=" mx-[6px]">|</span>{" "}
            <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer">
              Diagnostic Centers
            </span>{" "}
            <span className=" mx-[6px]">|</span>{" "}
            <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer">
              Pathology Labs
            </span>{" "}
            <span className=" mx-[6px]">|</span>{" "}
            <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer">
              Insurance Companies
            </span>{" "}
            <span className=" mx-[6px]">|</span>{" "}
            <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer">
              Corporates
            </span>
          </p>
         
          <ServicePartner />
          <GetLink />
        </div>
        <OurPolicies /> 
       <Footer />
      </div>
    </div>
  );
};

export default Home;
