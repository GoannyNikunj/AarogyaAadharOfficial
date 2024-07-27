
import React, { useEffect, useState } from "react";
import Dropdown from "../Component/Dropdown";
import Aarogya_Aadhar_logo from "../assets/Images/Aarogya_Aadhar_logo.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import MobileDropdown from "./MobileDropdown";
import { FaRegAddressCard } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const MobileNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();

  const dropdownData = [
    {
      label: "Expert Doctors",
      options: [
        "General Physician",
        "Emergency Medicine",
        "Internal Medicine",
        "Occupational Medicine",
        "Chest Physician",
        "Pediatricians",
        "Otorhinolaryngologist",
        "Obstetrician / Gynecologists",
        "IVF Consultant",
        "Oral & Maxillofacial Surgeon",
        "Otolaryngologists/ENT",
        "Vascular Surgeon",
        "Ophthalmologists/Eye Specialist",
        "Cardiologists",
        "Nephrologists",
        "General Surgeon",
        "Proctologist",
        "Orthopedics",
        "Joint Replacement Surgeon",   
        "Physiotherapist",
        "Oncologists/Cancer",
        "Radiation Oncologist",
        "Nuclear Medicine",
        "Colorectal Surgeon",
        "Radiologists",
        "Urologists",
        "Dermatologists",
        "Plastic Surgeon",
        "Pathologist",
        "Neurologists",
        "Psychiatrists",
        "Dentist",
        "Dietitian",
        "Sexologist",
        "Gastroenterologists",
        "Geriatric Medicine",
        "Allergists",
        "Endocrinologists",
        "Cardiac Surgeon",
        "Rheumatologists",
        "Pulmonologists",
        "Anesthesiologists",
        "Ayurvedic",
        "Homeopathy",
        "Chiropractor"
      ]
    },
    {
      label: "Hospitals",
      options: [
        "Government Hospitals",
        "Private Hospitals",
        "NABH Hospitals",
        "MJPJAY Hospitals",
        "ESIC Hospitals",
        "CGHS Hospitals",
        "Trauma Care Hospitals",
        "Cardiac Care Hospitals",
        "Mother & Child Hospitals",
        "Speciality Hospitals",
        "Multispeciality Hospitals",
        "Super-Speciality Hospitals",
        "Cancer Hospitals",
        "Eye Hospitals",
        "IVF Centers",
        "Dialysis center",
        "Dental Clinics",
        "Small Clinics"
      ]
    },
    {
      label: "Diagnostic Centers",
      options: [
        "ECG",
        "X-Ray Center",
        "CT Scan Center",
        "MRI Center",
        "Sonography Center",
        "Mammography Center",
        "Dental X-Ray Center",
        "Pet Scan",
        "Fluoroscopy",
        "Interventional Radiology",
        "Nuclear Medicine"
      ]
    },
    {
      label: "Surgery Packages",
      options: ["Surgery Packages", "Treatement Packages"]
    },
    {
      label: "Home Healthcare",
      options: [
        "ICU at Home",
        "General Nursing",
        "Neurological Care & Rehabilitation",
        "Cancer Care on Bed",
        "Transplant & Post-Op Care",
        "COPD Care",
        "Cardiac Care",
        "Palliative Care",
        "Orthopaedic Care",
        "Stroke Care",
        "Bed Sores Care"
      ]
    },
    {
      label: "Pathology",
      options: [
        "Lab Tests",
        "Wellness Packages",
        // "Corporate Packages",
        "NABL Lab",
        "Blood Bank"
      ]
    },
    {
      label: "Health Insurance",
      options: ["Pvt Health Insurance", "TPA Service", "Govt Health Insurance"]
    },
    {
      label: "Corporate Health",
      options: [
        "Medical Personanel Manning",
        "Companies Insurance",
        "CSR Services",
        "Health Talks & Seminars",
        "Occupational Health Center",
        "Corporate Health Check-Ups",
        "24/7 Ambulance Service",
        "Equipped Mobile Medicle Unit"
      ]
    },
    { label: "Pharmacy", options: ["Pharmacy 1", "Pharmacy 2"] }
  ];

  const TopDropdownData = [
    {
      label: "Registration",
      options: [
        "As Patient",
        "As Doctor",
        "As Hospital / Clinic",
        "As Pathology",
        "As Diagnostic Center",
        "As Ambulance",
        "As Health Worker",
        "As Corporate ",
        "As Equipment Sellers"
      ]
    },
    {
      label: "Login",
      options: [
        "Patient",
        "Doctor",
        "Hospital / Clinic",
        "Pathology",
        "Diagnostic Center",
        "Ambulance",
        "Health Worker",
        "Corporate Company",
        "Equipment Sellers"
      ]
    },
    { label: <IoLanguageSharp className=" h-5 w-5" />, options: ["English", "Mrathi", "Hindi"] }
    // {
    //   label: "Help ?",
    //   options: ["Service 1", "Service 2", "Service 3"],
    // },
  ];

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMenuClick = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div>
      <div className="fixed top-0 w-full z-50 bg-white">
        <div className="flex justify-between sm:pl-6 bg-white items-center py-1 px-1 sm:px-3">
          <img
            src={Aarogya_Aadhar_logo}
            alt=""
            className="cursor-pointer h-[44px] w-28 sm:h-[61px] sm:w-36"
            onClick={() => navigate("/")}
          />
          <div className="flex justify-center bg-white py-0 sm:px-8 ">
            {TopDropdownData.map((dropdown, index) => (
              <Dropdown
                key={index}
                label={dropdown.label}
                options={dropdown.options}
                textcolor={"text-[#2e1065]"}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-3"></div>
        <div className="flex gap-1 sm:gap-4 justify-between items-center bg-white px-1 sm:px-3">
          <TiThMenu 
            className="h-8 w-20 text-blue-900 cursor-pointer"
            onClick={handleMenuClick}
          />
          <div className="flex-grow flex items-center border border-blue-700 bg-white px-1 sm:px-3 h-8 rounded-full">
            <input
              type="text"
              placeholder="Search Healthcare Services"
              className="flex-grow outline-none sm:px-4 text-blue-900 text-[13px] sm:text-[19px] h-full rounded-full"
            />
            <FaSearch className="text-blue-900 mx-2" />
          </div>
          <button className="flex items-center justify-center border text-[10px] sm:text-[19px] font-semibold border-blue-700 text-blue-900 sm:px-2 rounded-full sm:w-44 w-full gap-1 sm:gap-2 h-8">
            Health Card <FaRegAddressCard className="h-3 w-3 sm:h-5 sm:w-5" />
          </button>
        </div>
        <div
          className={`fixed top-[110px] sm:top-[140px] left-0 w-[60%] sm:w-60   bg-white h-[380px] sm:h-[385px] shadow-lg pt-1 transition-transform duration-300 ${
            openDropdown ? "translate-x-0" : "-translate-x-full"
          }`}
          // style={{ width: "12rem" }}
        >
<div className=" flex justify-end mr-4" ><IoClose className=" h-6 w-6 sm:h-7 sm:w-7 text-blue-900"onClick={handleMenuClick} /></div>
          {dropdownData.map((dropdown, index) => (
            <MobileDropdown
              key={index}
              label={dropdown.label}
              setOpenDropdown={setOpenDropdown}
              options={dropdown.options}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;

