import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/Images/TopFundraisers/Img1.jpg";
import Img2 from "../assets/Images/TopFundraisers/Img2.jpeg";
import Img3 from "../assets/Images/TopFundraisers/Img3.jpg";
import Img4 from "../assets/Images/TopFundraisers/Img4.jpg";
import Img5 from "../assets/Images/TopFundraisers/Img5.jpg";
import Img6 from "../assets/Images/TopFundraisers/Img6.jpeg";
import Img7 from "../assets/Images/TopFundraisers/Img7.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

function TopFundraisers() {
  const TopFundraisers = [
    { img: Img1, detail: "Support My Daughter Masumi's Battle Against Osteosarcoma Cancer", by: "Aarogya Aadhar", price: " ₹ 32,000", percentage: "20" },
    { img: Img2, detail: "Bone Marrow Transplant has the Potential to save Neetu's Life", by: "by Karam Singh", price: " ₹ 32,000 ", percentage: "1" },
    { img: Img4, detail: "Iffat Needs Your Support To Regain The Gift Of Sound.", by: "Aarogya Aadhar", price: " ₹ 32,000 ", percentage: "75" },
    { img: Img5, detail: "2 Y/O Shriraksha Is Battling Liver Failure And Kidney Injury.", by: "Aarogya Aadhar", price: " ₹ 32,000 ", percentage: "30" },
    { img: Img6, detail: "Help My Mother raise funds to Undergo Brain Surgery!", by: "Aarogya Aadhar", price: " ₹ 32,000 ", percentage: "45" },
    { img: Img7, detail: "“Doctor’s don’t let us meet Pappa as he’s in ICU.” Jeevan’s daughters.", by: "Aarogya Aadhar", price: " ₹ 32,000 ", percentage: "25" },
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
    <div className="py-6">
      <h3 className="text-center text-blue-900 font-bold text-3xl">Our Top Fundraisers</h3>
      <hr className='divider' style={{ marginTop: 20 }}></hr>
      <div className="slider-container px-5 sm:px-10 lg:px-16 py-6" >
        <Slider {...settings}>
          {TopFundraisers.map((item, i) => (
            <div className="px-2" key={i}>
              <div className="px-2 bg-white rounded-md">
                <div className="hover:cursor-pointer px-2 py-2 rounded-lg">
                  <div className="flex justify-center items-center">
                    <img src={item.img} alt="" className="h-[200px] rounded-md" />
                  </div>
                  <p className="font-semibold line-clamp-2">{item.detail}</p>
                  <p className="text-center">{item.by}</p>
                  <div className="flex gap-2 justify-center items-center">
                    <button className="flex justify-center items-center gap-2 bg-blue-900 text-white px-3 rounded-md"><FaWhatsapp />Share</button>
                    <button className="flex justify-center items-center gap-2 bg-blue-900 text-white px-3 rounded-md"><FaFacebook />Share</button>
                  </div>
                  <div className="flex justify-between">
                    <p>{item.price} Raised</p>
                    <p>{item.percentage}%</p>
                  </div>
                  <div className="w-full h-2 bg-blue-200 rounded-full">
                    <div
                      className="h-2 text-center text-xs text-white bg-blue-500 rounded-full"
                      style={{ width: `${item.percentage}% `}}
                    ></div>
                  </div>
                  <hr />
                  <button className="bg-blue-900 text-white w-full rounded-full h-8 mt-2">DONATE</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopFundraisers;
