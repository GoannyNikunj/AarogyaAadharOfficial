
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/style.css"; 
import Img1 from "../assets/Images/NewSilder/Expert Doctors.png";
import Img2 from "../assets/Images/NewSilder/Hospitals.png";
import Img3 from "../assets/Images/NewSilder/Surgery Packages.png";
import Img4 from "../assets/Images/NewSilder/Home Healthcare.png";
import Img5 from "../assets/Images/NewSilder/Pathology.png";
import Img6 from "../assets/Images/NewSilder/Health Insurance.png";
import Img7 from "../assets/Images/NewSilder/Corporate Health.png";
import Img8 from "../assets/Images/NewSilder/Pharmacy.png";
import Img9 from "../assets/Images/NewSilder/Diagnostic Centre.png";

function AutoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(sliderRef.current?.slickCurrentSlide() || 0);
    }, 500); // Adjust as needed for timing
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleAfterChange = (currentSlide) => {
    setActiveIndex(currentSlide);
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: "", marginRight: "" }}
        onClick={onClick}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: "", marginLeft: "25px" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: handleAfterChange,
  };

  return (
    <div className="mx-1 sm:mx-0 pt-2">
      <Slider {...settings} ref={sliderRef}>
        <div className="relative shadow-lg">
          <img src={Img1} alt="" className="xl:h-[56vh] w-full" />
          <div className={`absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0 fade-up ${activeIndex === 0 ? "active" : ""}`}>
            <div className=" fade-up-h1">
            <h1 className={`opacity-90 text-blue-900 lg:text-3xl font-bold leading-tight`}>
              Expert Doctors
            </h1>
            </div>
            <div className="">
              <h3 className={`opacity-90 text-blue-900 lg:text-xl font-semibold leading-snug fade-up-h3`}>
              Innovative Care, Trusted Aarogya Aadhar <br className=" hidden xl:block 2xl:hidden"/> Expertise
            </h3>
            </div>
            <button className="mt-1 underline underline-offset-2 bg-blue-900 opacity-90 text-white px-2 py-1 md:py-[6px] text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
          </div>
          
        </div>

      
       <div className="relative shadow-lg">
          <img src={Img2} alt="" className="xl:h-[56vh] w-full" />
          <div className={`absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0 fade-up ${activeIndex === 1 ? "active" : ""}`}>
            <div className=" fade-up-h1">
            <h1 className={`opacity-90 text-blue-900 lg:text-3xl font-bold leading-tight`}>
               Hospitals
            </h1>
            </div>
            <div className="">
              <h3 className={`opacity-90 text-blue-900 lg:text-xl font-semibold leading-snug fade-up-h3`}>
             Expert Aarogya Aadhar  Hospital Care, <br className=" hidden xl:block 2xl:hidden"/> Close to Home
            </h3>
            </div>
            <button className="mt-1 underline underline-offset-2 bg-blue-900 opacity-90 text-white px-2 py-1 md:py-[6px] text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
          </div>
          
        </div>
       

        <div className="relative shadow-lg">
          <img src={Img3} alt="" className="xl:h-[56vh] w-full" />
          <div className={`absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0 fade-up ${activeIndex === 2 ? "active" : ""}`}>
            <div className=" fade-up-h1">
            <h1 className={`opacity-90 text-blue-900 lg:text-3xl font-bold leading-tight`}>
            Surgery Packages
            </h1>
            </div>
            <div className="">
              <h3 className={`opacity-90 text-blue-900 lg:text-xl font-semibold leading-snug fade-up-h3`}>
              Compare, Decide, and Heal with Confidence
            </h3>
            </div>
            <button className="mt-1 underline underline-offset-2 bg-blue-900 opacity-90 text-white px-2 py-1 md:py-[6px] text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
          </div>
          
        </div>
       

       <div className="relative shadow-lg">
          <img src={Img4} alt="" className="xl:h-[56vh] w-full" />
          <div className={`absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0 fade-up ${activeIndex === 3 ? "active" : ""}`}>
            <div className=" fade-up-h1">
            <h1 className={`opacity-90 text-blue-900 lg:text-3xl font-bold leading-tight`}>
            Home Healthcare
            </h1>
            </div>
            <div className="">
              <h3 className={`opacity-90 text-blue-900 lg:text-xl font-semibold leading-snug fade-up-h3`}>
              Personalized Care, Where You Live
            </h3>
            </div>
            <button className="mt-1 underline underline-offset-2 bg-blue-900 opacity-90 text-white px-2 py-1 md:py-[6px] text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
          </div>
          
        </div>


<div className="relative shadow-lg">
          <img src={Img5} alt="" className="xl:h-[56vh] w-full" />
          <div className={`absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0 fade-up ${activeIndex === 4 ? "active" : ""}`}>
            <div className=" fade-up-h1">
            <h1 className={`opacity-90 text-blue-900 lg:text-3xl font-bold leading-tight`}>
            Pathology
            </h1>
            </div>
            <div className="">
              <h3 className={`opacity-90 text-blue-900 lg:text-xl font-semibold leading-snug fade-up-h3`}>
              Expert Analysis, Trusted Answers
            </h3>
            </div>
            <button className="mt-1 underline underline-offset-2 bg-blue-900 opacity-90 text-white px-2 py-1 md:py-[6px] text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
          </div>
          
        </div>


<div className="relative shadow-lg">
          <img src={Img6} alt="" className="xl:h-[56vh] w-full" />
          <div className={`absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0 fade-up ${activeIndex === 5 ? "active" : ""}`}>
            <div className=" fade-up-h1">
            <h1 className={`opacity-90 text-white lg:text-3xl font-bold leading-tight`}>
            Health Insurance
            </h1>
            </div>
            <div className="">
              <h3 className={`opacity-90 text-white lg:text-xl font-semibold leading-snug fade-up-h3`}>
              Your Health Partner, Every Step of the Way
            </h3>
            </div>
            <button className="mt-1 underline underline-offset-2 bg-white opacity-90 text-blue-500 px-2 py-1 md:py-[6px] text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
          </div>
          
        </div>


        <div className="relative shadow-lg">
          <img src={Img7} alt="" className="xl:h-[56vh] w-full" />
          <div className={`absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0 fade-up ${activeIndex === 6 ? "active" : ""}`}>
            <div className=" fade-up-h1">
            <h1 className={`opacity-90 text-blue-900 lg:text-3xl font-bold leading-tight`}>
            Corporate Health
            </h1>
            </div>
            <div className="">
              <h3 className={`opacity-90 text-blue-900 lg:text-xl font-semibold leading-snug fade-up-h3`}>
              Empower your team health culture with <br className=" 2xl:hidden"/> Aarogya <br className=" hidden 2xl:block"/> Aadhar wellness.
            </h3>
            </div>
            <button className="mt-1 underline underline-offset-2 bg-blue-900 opacity-90 text-white px-2 py-1 md:py-[6px] text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
          </div>
          
        </div>


        <div className="relative shadow-lg">
          <img src={Img8} alt="" className="xl:h-[56vh] w-full" />
          <div className={`absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0 fade-up ${activeIndex === 7 ? "active" : ""}`}>
            <div className=" fade-up-h1">
            <h1 className={`opacity-90 text-blue-900 lg:text-3xl font-bold leading-tight`}>
            Pharmacy
            </h1>
            </div>
            <div className="">
              <h3 className={`opacity-90 text-blue-900 lg:text-xl font-semibold leading-snug fade-up-h3`}>
              Your Neighborhood Aarogya Aadhar Pharmacy <br className=" 2xl:hidden"/> Any <br className="hidden 2xl:block"/> Time, Any Where
            </h3>
            </div>
            <button className="mt-1 underline underline-offset-2 bg-blue-900 opacity-90 text-white px-2 py-1 md:py-[6px] text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
          </div>
          
        </div>


<div className="relative shadow-lg">
          <img src={Img9} alt="" className="xl:h-[56vh] w-full" />
          <div className={`absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0 fade-up ${activeIndex === 8 ? "active" : ""}`}>
            <div className=" fade-up-h1">
            <h1 className={`opacity-90 text-blue-900 lg:text-3xl font-bold leading-tight`}>
            Diagnosis Center
            </h1>
            </div>
            <div className="">
              <h3 className={`opacity-90 text-blue-900 lg:text-xl font-semibold leading-snug fade-up-h3`}>
              Interpreting and Investigating Test <br className=" hidden xl:block 2xl:hidden"/> Results
            </h3>
            </div>
            <button className="mt-1 underline underline-offset-2 bg-blue-900 opacity-90 text-white px-2 py-1 md:py-[6px] text-[10px] sm:text-sm rounded-md shadow-md">
            More Details
          </button>
          </div>
          
        </div>
       
      </Slider>
    </div>
  );
}

export default AutoSlider;



