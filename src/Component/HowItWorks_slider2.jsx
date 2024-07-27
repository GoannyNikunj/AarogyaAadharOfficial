import React, { useState } from 'react';
import "../css/style.css";
import Img1 from "../assets/Images/TreatmentSpecialities/img1.png";
import Img2 from "../assets/Images/TreatmentSpecialities/img2.png";
import Img3 from "../assets/Images/TreatmentSpecialities/img3.png";
import Img4 from "../assets/Images/TreatmentSpecialities/img4.png";
import Img5 from "../assets/Images/TreatmentSpecialities/img5.png";
import Img6 from "../assets/Images/TreatmentSpecialities/img6.png";
import Img7 from "../assets/Images/TreatmentSpecialities/img7.png";
import Img8 from "../assets/Images/TreatmentSpecialities/img8.png";
import Img9 from "../assets/Images/TreatmentSpecialities/img9.png";
import Img10 from "../assets/Images/TreatmentSpecialities/img10.png";
import Img11 from "../assets/Images/TreatmentSpecialities/img11.png";

const HowItWorks_slider2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dummy data for cards
  const slides = [
    [
      { id: 1, img: Img1, heading: 'Kidney Transplant', subheading: 'Maximum Raised', rs: '₹46 Lakh' },
      { id: 2, img: Img2, heading: 'Cancer Crowdfunding', subheading: 'Maximum Raised', rs: '₹2 Crore' },
      { id: 3, img: Img3, heading: 'Bone Marrow Transplant', subheading: 'Maximum Raised', rs: '₹61 Lakh' },
      { id: 4, img: Img4, heading: 'Heart Transplant', subheading: 'Maximum Raised', rs: '₹49 Lakh' },
      { id: 5, img: Img5, heading: 'Covid-19 Support', subheading: 'Maximum Raised', rs: '₹69 Lakh' }
    ],
    [
      { id: 6, img: Img6, heading: 'Memorial Crowdfunding', subheading: 'Maximum Raised', rs: '₹45 Lakh' },
      { id: 7, img: Img7, heading: 'Accident And Injury', subheading: 'Maximum Raised', rs: '₹80 Lakh' },
      { id: 8, img: Img8, heading: 'Spinal Muscular Atrophy', subheading: 'Maximum Raised', rs: '₹16 Crore' },
      { id: 9, img: Img9, heading: 'Preterm Baby Care', subheading: 'Maximum Raised', rs: '₹40 Lakh' },
      { id: 10, img: Img10, heading: 'Liver Transplant', subheading: 'Maximum Raised', rs: '₹35 Lakh' }
    ],
    [
      { id: 11, img: Img11, heading: 'Brain Surgery', subheading: 'Maximum Raised', rs: '₹23 Lakh' },
      { id: 12, img: Img2, heading: 'Cancer Crowdfunding', subheading: 'Maximum Raised', rs: '₹2 Crore' },
      { id: 13, img: Img3, heading: 'Bone Marrow Transplant', subheading: 'Maximum Raised', rs: '₹61 Lakh' },
      { id: 14, img: Img4, heading: 'Heart Transplant', subheading: 'Maximum Raised', rs: '₹49 Lakh' },
      { id: 15, img: Img5, heading: 'Covid-19 Support', subheading: 'Maximum Raised', rs: '₹69 Lakh' }
    ]
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container px-12">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide.map((card) => (
              <div key={card.id} className="card text-left" style={{height:250}}>
                <div className="card-content">
                  <div className="card-image" style={{padding:20,height:100}}>
                    <img src={card.img} alt={card.heading}/>
                  </div>
                  <div className="card-text">
                    <h1 style={{ fontWeight: 'bold', fontSize: 20 }}>{card.heading}</h1>
                    <p>{card.subheading}</p>
                    <p>{card.rs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks_slider2;