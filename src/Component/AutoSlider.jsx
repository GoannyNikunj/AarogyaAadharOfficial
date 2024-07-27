import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/Images/NewSilder/Slider01.png";
import Img2 from "../assets/Images/NewSilder/Slider02.png";
import Img3 from "../assets/Images/NewSilder/Slider03.png";
import Img4 from "../assets/Images/NewSilder/Slider04.png";
import Img5 from "../assets/Images/NewSilder/Slider05.png";
import Img6 from "../assets/Images/NewSilder/Slider06.png";
import Img7 from "../assets/Images/NewSilder/Slider07.png";
import Img8 from "../assets/Images/NewSilder/Slider08.png";
import Img9 from "../assets/Images/NewSilder/Slider09.png";

function AutoSlider() {
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
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
<div className="mx-1 sm:mx-0 pt-2">
  <Slider {...settings}>
    <div className="relative">
      <img src={Img1} alt="" className="xl:h-[56vh] w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0">
        <h1 className="opacity-90 text-blue-900 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Expert Doctors
        </h1>
        <h3 className="opacity-90 text-blue-900 text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
          Innovative Care, Trusted <br /> Aarogya Aadhar Expertise
        </h3>
      </div>
      <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
        More Details
      </button>
    </div>

    <div className="relative">
      <img src={Img2} alt="" className="xl:h-[56vh] w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0">
        <h1 className="opacity-90 text-blue-900 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Hospitals
        </h1>
        <h3 className="opacity-90 text-blue-900 text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
          Expert Aarogya Aadhar <br className="sm:hidden"/> Hospital <br className="hidden sm:flex"/> Care, Close to Home
        </h3>
      </div>
      <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
        More Details
      </button>
    </div>

    <div className="relative">
      <img src={Img3} alt="" className="xl:h-[56vh] w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0">
        <h1 className="opacity-90 text-blue-900 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Surgery Packages
        </h1>
        <h3 className="opacity-90 text-blue-900 text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
          Compare, Decide, and Heal with <br /> Confidence
        </h3>
      </div>
      <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
        More Details
      </button>
    </div>

    <div className="relative">
      <img src={Img4} alt="" className="xl:h-[56vh] w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0">
        <h1 className="opacity-90 text-blue-900 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Home Healthcare
        </h1>
        <h3 className="opacity-90 text-blue-900 text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
          Personalized Care, Where You Live
        </h3>
      </div>
      <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
        More Details
      </button>
    </div>

    <div className="relative">
      <img src={Img5} alt="" className="xl:h-[56vh] w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 py-0">
        <h1 className="opacity-90 text-blue-900 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Pathology
        </h1>
        <h3 className="opacity-90 text-blue-900 text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
          Expert Analysis, Trusted Answers
        </h3>
      </div>
      <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
        More Details
      </button>
    </div>

    <div className="relative">
      <img src={Img6} alt="" className="xl:h-[56vh] w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0">
        <h1 className="opacity-90 text-blue-900 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Health Insurance
        </h1>
        <h3 className="opacity-90 text-blue-900 text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
          Your Health Partner, Every Step of <br /> the Way
        </h3>
      </div>
      <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
        More Details
      </button>
    </div>

    <div className="relative">
      <img src={Img7} alt="" className="xl:h-[56vh] w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0">
        <h1 className="opacity-90 text-blue-900 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Corporate Health
        </h1>
        <h3 className="opacity-90 text-blue-900 text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
          Empower your team health culture <br /> with Aarogya Aadhar wellness.
        </h3>
      </div>
      <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
        More Details
      </button>
    </div>

    <div className="relative">
      <img src={Img8} alt="" className="xl:h-[56vh] w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0">
        <h1 className="opacity-90 text-blue-900 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Pharmacy
        </h1>
        <h3 className="opacity-90 text-blue-900 text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
          Your Neighborhood Aarogya Aadhar <br /> Pharmacy Any Time, Any Where
        </h3>
      </div>
      <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
        More Details
      </button>
    </div>

    <div className="relative">
      <img src={Img9} alt="" className="xl:h-[56vh] w-full" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-2 sm:px-4 py-0">
        <h1 className="opacity-90 text-blue-900 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Diagnosis center
        </h1>
        <h3 className="opacity-90 text-blue-900 text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
        Interpreting and <br className=" sm:hidden"/> Investigating <br className=" hidden sm:flex"/> Test Results
        </h3>
      </div>
      <button className="absolute underline underline-offset-2 bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500 opacity-90 text-white px-2 py-1 md:py-2 text-[10px] sm:text-sm rounded-md shadow-md">
        More Details
      </button>
    </div>
  </Slider>
</div>

  );
}

export default AutoSlider;

