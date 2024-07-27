import React from "react";
import Img1 from "../assets/Images/TopFundraisers/Img1.jpg";
import Img2 from "../assets/Images/TopFundraisers/Img2.jpeg";
import Img4 from "../assets/Images/TopFundraisers/Img4.jpg";
import Img5 from "../assets/Images/TopFundraisers/Img5.jpg";
import Img6 from "../assets/Images/TopFundraisers/Img6.jpeg";
import Img7 from "../assets/Images/TopFundraisers/Img7.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

function TopFundraisersData() {
  const TopFundraisers = [
    { img: Img1, detail: "Support My Daughter Masumi's Battle Against Osteosarcoma Cancer", by: "Aarogya Aadhar", price: " ₹ 32,000", percentage: "20" },
    { img: Img2, detail: "Bone Marrow Transplant has the Potential to save Neetu's Life", by: "by Karam Singh", price: " ₹ 32,000 ", percentage: "1" },
    { img: Img4, detail: "Iffat Needs Your Support To Regain The Gift Of Sound.", by: "Aarogya Aadhar", price: " ₹ 32,000 ", percentage: "75" },
    { img: Img5, detail: "2 Y/O Shriraksha Is Battling Liver Failure And Kidney Injury.", by: "Aarogya Aadhar", price: " ₹ 32,000 ", percentage: "30" },
    { img: Img6, detail: "Help My Mother raise funds to Undergo Brain Surgery!", by: "Aarogya Aadhar", price: " ₹ 32,000 ", percentage: "45" },
    { img: Img7, detail: "“Doctor’s don’t let us meet Pappa as he’s in ICU.” Jeevan’s daughters.", by: "Aarogya Aadhar", price: " ₹ 32,000 ", percentage: "25" },
  ];

  
  return (
    <div className="py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-5 sm:px-10 lg:px-16 py-6" >
          {TopFundraisers.map((item, i) => (
            <div className="px-2" key={i}>
              <div className="px-2 rounded-lg">
                <div className="hover:cursor-pointer px-2 py-2 rounded-lg">
                  <div className="flex justify-center items-center">
                    <img src={item.img} alt="" className="h-[200px] rounded-md" />
                  </div>
                  <p className="font-semibold line-clamp-2">{item.detail}</p>
                  <p className="text-center">{item.by}</p>
                  <div className="flex gap-2 justify-center my-2 items-center">
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
      </div>
    </div>
  );
}

export default TopFundraisersData;
