import React from "react";
import Slider from "react-slick";
import "../css/style.css";
import Img1 from "../assets/Images/TreatmentSpecialities/img1.png";
import Img2 from "../assets/Images/TreatmentSpecialities/img2.png";
import Img3 from "../assets/Images/TreatmentSpecialities/img3.png";
import Img4 from "../assets/Images/TreatmentSpecialities/img4.png";
import Img5 from "../assets/Images/TreatmentSpecialities/img5.png";
import Img6 from "../assets/Images/TreatmentSpecialities/img6.png";
import Img7 from "../assets/Images/TreatmentSpecialities/img7.png";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const CrowdFundingCategories = () => {
  const categories = [
    { img: Img1, name: "Brain" },
    { img: Img2, name: "Eyes" },
    { img: Img3, name: "Skin" },
    { img: Img4, name: "ENT" },
    { img: Img5, name: "Dental" },
    { img: Img6, name: "Thyroid" },
    { img: Img7, name: "Breast" },
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
    slidesToShow: 6,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
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

    <div className="slider-container px-5 sm:px-10 lg:px-20 mt-3" >
      <h1 className="text-center lg:mb-2 text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">Crowdfunding Categories</h1>
      {/* <hr className="divider mt-[10px]"  /> */}
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="">
            <div className="card">
              <div className="image-container">
                <img src={category.img} alt={category.name} className="card-image" />
              </div>
              <div className="text-container">
                <div className="card-text">{category.name}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CrowdFundingCategories;
