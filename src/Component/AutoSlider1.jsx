import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/Images/Autoslider/img1.png';
import Img2 from '../assets/Images/Autoslider/img2.png';
import Img3 from '../assets/Images/Autoslider/img3.png';
import Img4 from '../assets/Images/Autoslider/img4.png';
import Img5 from '../assets/Images/Autoslider/img5.png';
import Img6 from '../assets/Images/Autoslider/img6.png';

function AutoSlider1() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="mb-6 mx-2 lg:mb-0">
      <Slider {...settings}>
        <div className="relative">
          <img src={Img1} alt="" className="h-40 md:h-48 rounded-lg lg:rounded-none w-full" />
          {/* <div className="absolute  flex flex-col right-2 bottom-2  text-center  lg:hidden lg:mt-2 lg:text-left">
            <h3 className="text-lg sm:text-lg md:text-xl font-bold text-blue-900">Your Health.. Your Choice..</h3>
            <p className="text-[10px] sm:text-[13px] text-blue-500 font-semibold">Access to Good Quality Healthcare on Single Click</p>
          </div> */}
        </div>
        <div className="relative">
          <img src={Img2} alt="" className="h-40 md:h-48 rounded-lg lg:rounded-none w-full" />
          {/* <div className="absolute flex flex-col right-2 bottom-2  text-center  lg:hidden lg:mt-2 lg:text-left">
            <h3 className="text-lg sm:text-lg md:text-xl font-bold text-blue-900">Your Health.. Your Choice..</h3>
            <p className="text-[10px] sm:text-[13px] text-blue-500 font-semibold">Access to Good Quality Healthcare on Single Click</p>
          </div> */}
        </div>
        <div className="relative">
          <img src={Img3} alt="" className="h-40 md:h-48 rounded-lg lg:rounded-none w-full" />
          {/* <div className="absolute  flex flex-col right-2 bottom-2  text-center lg:hidden lg:mt-2 lg:text-left">
            <h3 className="text-lg sm:text-lg md:text-xl font-bold text-blue-900">Your Health.. Your Choice..</h3>
            <p className="text-[10px] sm:text-[13px] text-blue-500 font-semibold">Access to Good Quality Healthcare on Single Click</p>
          </div> */}
        </div>
      
      </Slider>
    </div>
  );
}

export default AutoSlider1;
