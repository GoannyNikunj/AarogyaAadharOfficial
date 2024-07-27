import React, { useState } from "react";
import { GiCash } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FaTruckMedical } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const BottomTab = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  return (
    <div className=" fixed bottom-0 z-40 lg:hidden w-full bg-white">
      <div className=" flex">
        <button
          className="flex-grow inline-flex justify-center items-center text-sm font-medium"
          onClick={() => {
            navigate("/bedBooking");
            setActive("BedBooking");
          }}
        >
          <span
            className={`  flex flex-col leading-4 text-[12px] sm:text-sm  justify-center items-center ${
              active == "BedBooking" ? "text-red-500" : "text-blue-900"
            }`}
            onClick={() => setActive("BedBooking")}
          >
            {" "}
            <span>
              <FaBed className=" h-6 w-7 " />
            </span>{" "}
            Bed <br /> Booking
          </span>
        </button>

        <button
          className="flex-grow inline-flex  justify-center items-center  text-sm font-medium"
          onClick={() => {
            navigate("/AmbulanceBooking");
            setActive("AmbulanceBooking");
          }}
        >
          <span
            className={`  flex flex-col leading-4 text-[12px] sm:text-sm  justify-center items-center ${
              active == "AmbulanceBooking" ? "text-red-500" : "text-blue-900"
            }`}
            onClick={() => setActive("AmbulanceBooking")}
          >
            {" "}
            <span>
              <FaTruckMedical className=" h-6 w-7" />
            </span>{" "}
            Book <br /> Ambulance
          </span>
        </button>

        {/* <button
          className="flex-grow justify-center items-center  text-sm font-medium"
          onClick={() => {
            navigate("/");
            setActive("Home");
          }}
        >
          <span
            className={`  flex flex-col leading-4 text-[12px] sm:text-sm  justify-center items-center mb-2 ${
              active == "Home" ? "text-red-500" : "text-blue-900"
            }`}
            onClick={() => setActive("Home")}
          >
            <span>
              {" "}
              <IoMdHome className=" h-7 w-9" />
            </span>{" "}
            Home <br />{" "}
          </span>
        </button> */}

        <button className=" flex-grow flex-col inline-flex justify-center items-center  text-sm font-medium"  onClick={() => {
            navigate("/");
            setActive("Home");
          }}>
          <span className=""><IoMdHome className={`h-8 w-9 ${active=="Home"?"text-red-500":"text-blue-900"} `} /></span>
          <span className={`text-[12px] sm:text-sm ${active=="Home"?"text-red-500":"text-blue-900"} text-blue-900`}>Home</span>
          <span className="text-[12px] sm:text-sm text-white">Home</span>
        </button>
        <button
          className="flex-grow inline-flex justify-center items-center  text-sm font-medium"
          onClick={() => {
            navigate("/bookappointment");
            setActive("BookAppointment");
          }}
        >
          <span
            className={`  flex flex-col leading-4 text-[12px] sm:text-sm  justify-center items-center mb-2 ${
              active == "BookAppointment" ? "text-red-500" : "text-blue-900"
            }`}
            onClick={() => setActive("BookAppointment")}
          >
            {" "}
            <span>
              <FaCalendarAlt className=" h-6 w-7" />
            </span>{" "}
            Book <br /> Appointment
          </span>
        </button>

        <button
          className="flex-grow inline-flex justify-center items-center  text-sm font-medium"
          onClick={() => {
            navigate("/aarogyadhan");
            setActive("AarogyaDhan");
          }}
        >
          <span
            className={`  flex flex-col leading-4 text-[12px] sm:text-sm  justify-center items-center mb-2 ${
              active == "AarogyaDhan" ? "text-red-500" : "text-blue-900"
            }`}
            onClick={() => setActive("AarogyaDhan")}
          >
            {" "}
            <span>
              <GiCash className=" h-6 w-7 hidden" />
              <RiMoneyRupeeCircleFill className=" h-6 w-7" />
            </span>{" "}
            Aarogya <br /> Dhan
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomTab;
