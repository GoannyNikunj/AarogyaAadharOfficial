import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/Images/SevicePartner/img1.png";
import Img2 from "../assets/Images/SevicePartner/img2.png";
import Img3 from "../assets/Images/SevicePartner/img3.png";
import Img4 from "../assets/Images/SevicePartner/img4.png";
import Img5 from "../assets/Images/SevicePartner/img5.png";
import Img6 from "../assets/Images/SevicePartner/img6.png";
import Img7 from "../assets/Images/SevicePartner/img7.png";
import Img8 from "../assets/Images/SevicePartner/img8.png";
import Img9 from "../assets/Images/SevicePartner/img9.png";
import Img10 from "../assets/Images/SevicePartner/img10.png";
import Img11 from "../assets/Images/SevicePartner/img11.png";
import Img12 from "../assets/Images/SevicePartner/img12.png";
import Img13 from "../assets/Images/SevicePartner/img13.png";
import Img14 from "../assets/Images/SevicePartner/img14.png";
import Img15 from "../assets/Images/SevicePartner/img15.png";
import Img16 from "../assets/Images/SevicePartner/img16.png";
import Img17 from "../assets/Images/SevicePartner/img17.png";
import Img18 from "../assets/Images/SevicePartner/img18.png";
import Img19 from "../assets/Images/SevicePartner/img19.png";
import Img20 from "../assets/Images/SevicePartner/img20.png";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

function ServicePartner() {
  const servicePartners = [
    { img: Img1 },
    { img: Img2 },
    { img: Img3 },
    { img: Img4 },
    { img: Img5 },
    { img: Img6 },
    { img: Img7 },
    { img: Img8 },
    { img: Img9 },
    { img: Img10 },
    { img: Img11 },
    { img: Img12 },
    { img: Img13 },
    { img: Img14 },
    { img: Img15 },
    { img: Img16 },
    { img: Img17 },
    { img: Img18 },
    { img: Img19 },
    { img: Img20 },
  ];

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute  right-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer z-30"
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
        className="absolute  left-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer z-30"
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
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
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
    <div className="slider-container px-8 lg:py-6">
      <Slider {...settings}>
        {servicePartners.map((item, i) => (
          <div key={i} className="px-2">
            <div className="hover:cursor-pointer px-2 rounded-lg border border-blue-200">
              <div className="flex justify-center items-center">
                <img src={item.img} alt="" className="h-[220px] rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ServicePartner;
