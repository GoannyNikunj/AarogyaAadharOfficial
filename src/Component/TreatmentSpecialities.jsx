import React, { useState, useEffect } from "react";
import Img1 from "../assets/Images/TreatmentSpecialities/Icon 1.png";
import Img2 from "../assets/Images/TreatmentSpecialities/Icon 2.png";
import Img3 from "../assets/Images/TreatmentSpecialities/Icon 3.png";
import Img4 from "../assets/Images/TreatmentSpecialities/Icon 4.png";
import Img5 from "../assets/Images/TreatmentSpecialities/Icon 5.png";
import Img6 from "../assets/Images/TreatmentSpecialities/Icon 6.png";
import Img7 from "../assets/Images/TreatmentSpecialities/Icon 7.png";
import Img8 from "../assets/Images/TreatmentSpecialities/Icon 8.png";
import Img9 from "../assets/Images/TreatmentSpecialities/Icon 9.png";
import Img10 from "../assets/Images/TreatmentSpecialities/Icon 10.png";
import Img11 from "../assets/Images/TreatmentSpecialities/Icon 11.png";
import Img12 from "../assets/Images/TreatmentSpecialities/Icon 12.png";
import Img13 from "../assets/Images/TreatmentSpecialities/Icon 13.png";
import Img14 from "../assets/Images/TreatmentSpecialities/Icon 14.png";
import Img15 from "../assets/Images/TreatmentSpecialities/Icon 15.png";
import Img16 from "../assets/Images/TreatmentSpecialities/Icon 16.png";
import Img17 from "../assets/Images/TreatmentSpecialities/Icon 17.png";
import Img18 from "../assets/Images/TreatmentSpecialities/Icon 18.png";
import Img19 from "../assets/Images/TreatmentSpecialities/Icon 19.png";
import Img20 from "../assets/Images/TreatmentSpecialities/Icon 20.png";
import Img21 from "../assets/Images/TreatmentSpecialities/Icon 21.png";

const TreatmentSpecialities = () => {
  const [showAllSpecialities, setShowAllSpecialities] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4); // Default to 4 items

  const treatmentSpecialities = [
    { img: Img1, name: "Brain" },
    { img: Img2, name: "Eyes" },
    { img: Img3, name: "Skin" },
    { img: Img4, name: "ENT" },
    { img: Img5, name: "Dental" },
    { img: Img6, name: "Thyroid" },
    { img: Img7, name: "Breast" },
    { img: Img8, name: "Heart" },
    { img: Img9, name: "Liver" },
    { img: Img10, name: "Pancreas" },
    { img: Img11, name: "Stomach" },
    { img: Img12, name: "Gallbladder" },
    { img: Img13, name: "Kidney" },
    { img: Img14, name: "Spine" },
    { img: Img15, name: "Gynecology" },
    { img: Img16, name: "IVF" },
    { img: Img20, name: "Male Reproductive System" },
    { img: Img21, name: "Joint Replacement" },
    { img: Img17, name: "Bone" },
    { img: Img18, name: "Pediatrics" },
    { img: Img19, name: "Cancer" },
  ];

  const updateItemsToShow = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setItemsToShow(treatmentSpecialities.length); // Show all items on XL screens
    } else if (width >= 1024) {
      setItemsToShow(6);
    } else if (width >= 768) {
      setItemsToShow(5);
    } else if (width >= 640) {
      setItemsToShow(4);
    } else {
      setItemsToShow(3);
    }
  };

  useEffect(() => {
    updateItemsToShow(); // Set initial value based on current window size
    window.addEventListener("resize", updateItemsToShow); // Update value on resize
    return () => {
      window.removeEventListener("resize", updateItemsToShow); // Cleanup on unmount
    };
  }, []);

  const toggleSpecialities = () => {
    setShowAllSpecialities(!showAllSpecialities);
  };

  return (
    <div className="">
      <div className=" py-2 lg:py-[8px] md:px-16 ">
        <h2 className="text-center lg:mb-2 text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
          Treatment by Specialities
        </h2>
        <p className="text-center lg:mb-2 text-blue-500 text-[12px] font-semibold sm:text-[17px]">
          Select the Speciality
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mx-4 lg:mt-2">
          {treatmentSpecialities
            .slice(0, showAllSpecialities ? treatmentSpecialities.length : itemsToShow * 2)
            .map((item, i) => (
              <div
                key={i}
                className="p-2 m-2 rounded-md flex flex-col items-center cursor-pointer"
              >
                <div className="flex justify-center ">
                  <img src={item.img} alt={item.name} className="h-14 w-14" />
                </div>
                <p className="text-center mt-1 text-[14px] font-semibold sm:text-[16px] sm:font-bold text-[#4b3279]">
                  {item.name}
                </p>
              </div>
            ))}
        </div>
        <div className={`flex justify-center ${itemsToShow === treatmentSpecialities.length ? "hidden" : "block"}`}>
          <button
            className="bg-blue-900 text-white px-4 py-1 text-[14px] sm:text-[15px] sm:py-[6px] rounded-full underline shadow-md"
            onClick={toggleSpecialities}
          >
            {showAllSpecialities ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentSpecialities;
