import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/Images/AyurvedaSection/img1.png'
import Img2 from '../assets/Images/AyurvedaSection/img2.png'
import Img3 from '../assets/Images/AyurvedaSection/img3.png'
import Img4 from '../assets/Images/AyurvedaSection/img4.png'
import Img5 from '../assets/Images/AyurvedaSection/img5.png'
import Img6 from '../assets/Images/AyurvedaSection/img6.png'
import Img7 from '../assets/Images/AyurvedaSection/img7.png'
import Img8 from '../assets/Images/AyurvedaSection/img8.png'
import Img9 from '../assets/Images/AyurvedaSection/img9.png'

function AyurvedaBrands() {
 
    const ayurvedaSectionData = [
        {img: Img1, name: "Dabur"},
        {img: Img2, name: "Baidyanath"},
        {img: Img3, name: "Dhootapapeshwar"},
        {img: Img4, name: "TATA 1mg Health Products"},
        {img: Img5, name: "Himalaya"},
        {img: Img6, name: "Jiva Ayurveda"},
        {img: Img7, name: "Kerala Ayurveda"},
        {img: Img8, name: "Sri Sri  Tattva"},
        {img: Img9, name: "Zandu"},
    ]

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#cbd5e1", zIndex:"40"}}
        onClick={onClick}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#cbd5e1",  zIndex:"40" }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 2000 ,
       nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="slider-container px-10 py-4 bg-white">
      <Slider {...settings}>
        {
            ayurvedaSectionData.map((item,i)=>(
                <div key={i} className="hover:shadow-lg hover:border-gray-400 hover:border-opacity-50 hover:cursor-pointer p-4 rounded-lg transition duration-300">
                    <div className=" flex justify-center items-center">
                <img src={item.img} alt="" />
                </div>
                <p className=" text-center">{item.name}</p>
               </div> 
            ))

        }
       
       
      </Slider>
    </div>
  );
}

export default AyurvedaBrands;
