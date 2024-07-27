import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

function TestimonialData() {
  const Testimonialdata = [
    {
      Data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem, consequatur soluta laudantium nisi consequuntur molestiae tempora nihil nemo, laborum aspernatur mollitia ad qui dignissimos illo? Eos, reiciendis eligendi.",
      name: "- Vishal Patil , Nov 2024",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem, consequatur soluta laudantium nisi consequuntur molestiae tempora nihil nemo, laborum aspernatur mollitia ad qui dignissimos illo? Eos, reiciendis eligendi.",
      name: "- Vishal Patil , Nov 2024",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem, consequatur soluta laudantium nisi consequuntur molestiae tempora nihil nemo, laborum aspernatur mollitia ad qui dignissimos illo? Eos, reiciendis eligendi.",
      name: "- Vishal Patil , Nov 2024",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem, consequatur soluta laudantium nisi consequuntur molestiae tempora nihil nemo, laborum aspernatur mollitia ad qui dignissimos illo? Eos, reiciendis eligendi.",
      name: "- Vishal Patil , Nov 2024",
    },
    {
      Data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem, consequatur soluta laudantium nisi consequuntur molestiae tempora nihil nemo, laborum aspernatur mollitia ad qui dignissimos illo? Eos, reiciendis eligendi.",
      name: "- Vishal Patil , Nov 2024",
    },
  ];

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-[-22px] top-1/2 transform -translate-y-1/2 cursor-pointer z-30"
        onClick={onClick}
      >
        <GrFormNext  className="h-6 w-6 text-blue-900"/>
       
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-[-22px] top-1/2 transform -translate-y-1/2 cursor-pointer z-30"
        onClick={onClick}
      >
        <GrFormPrevious className="h-6 w-6 text-blue-900" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-4 md:px-7 py-1 lg:mt-5 relative">
      <Slider {...settings}>
        {Testimonialdata.map((item, i) => (
          <div key={i} className="px-2">
            <div className="bg-white opacity-80 shadow-md rounded-md p-8">
              <div>
                <p className="text-start flex gap-2 mb-4 text-[#4b3279] text-[14px] sm:text-sm">
                  <BiSolidQuoteLeft className="h-6 w-24 text-blue-500" />
                  {item.Data}
                </p>
                <p className="flex justify-end pr-2 text-[14px] sm:text-sm font-semibold text-blue-900">
                  {item.name}
                </p>
                <div className="flex gap-1 justify-end mr-[75px] mt-1">
                  <FaStar className="h-4 w-4 text-blue-900" />
                  <FaStar className="h-4 w-4 text-blue-900" />
                  <FaStar className="h-4 w-4 text-blue-900" />
                  <FaStar className="h-4 w-4 text-blue-900" />
                  <FaStarHalfAlt className="h-4 w-4 text-blue-900" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialData;
