import React, { useEffect, useState } from "react";
import Dropdown from "../Component/Dropdown";
import Aarogya_Aadhar_logo from "../assets/Images/Aarogya_Aadhar_logo.png";
import { GiCash } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FaTruckMedical } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { LiaIdCardSolid } from "react-icons/lia";
import Aarogyadhan from "../assets/Images/AarogyaDhan.jpeg";

const Navbar = () => {
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
        "Chiropractor",
      ],
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
        "Dialysis Centers",
        "Dental Clinics",
        "Small Clinics",
      ],
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
        "Nuclear Medicine",
      ],
    },

    {
      label: "Surgery Packages",
      options: ["Surgery Packages", "Treatement Packages"],
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
        "Bed Sores Care",
      ],
    },
    {
      label: "Pathology",
      options: ["Lab Tests", "Wellness Packages", "NABL Lab", "Blood Bank"],
    },
    {
      label: "Health Insurance",
      options: ["Pvt Health Insurance", "TPA Service", "Govt Health Insurance"],
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
        "Equipped Mobile Medicle Unit",
      ],
    },
    { label: "Pharmacy", options: ["Pharmacy 1", "Pharmacy 2"] },
  ];

  const TopDropdownData = [
    // {
    //   label: "Registration",
    //   options: [
    //     "As Patient",
    //     "As Doctor",
    //     "As Hospital / Clinic",
    //     "As Pathology",
    //     "As Diagnostic Center",
    //     "As Ambulance",
    //     "As Health Worker",
    //     "As Corporate ",
    //     "As Equipment Sellers",
    //   ],
    // },
    // {
    //   label: "Login",
    //   options: [
    //     "Patient",
    //     "Doctor",
    //     "Hospital / Clinic",
    //     "Pathology",
    //     "Diagnostic Center",
    //     "Ambulance",
    //     "Health Worker",
    //     "Corporate Company",
    //     "Equipment Sellers",
    //   ],
    // },
    { label: "Language", options: ["English", "Mrathi", "Hindi"] },
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

  return (
    //         <div className=" fixed top-0 w-full z-50 bg-white">
    //           <div className="flex justify-end bg-white py-1 px-7 space-x-2">
    //             <div className="text-black flex items-center">
    //               <p className=" font-semibold text-sm  text-blue-900">
    //                 {" "}
    //                 <span className=" font-semibold text-sm text-blue-900">
    //                   Date & Time in India :{" "}
    //                 </span>{" "}
    //                 {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
    //               </p>
    //             </div>

    //             {TopDropdownData.map((dropdown, index) => (

    //               <Dropdown
    //                 key={index}
    //                 label={dropdown.label}
    //                 options={dropdown.options}
    //                 textcolor={"text-[#2e1065]"}
    //               />

    //             ))}

    //             <button className=" text-[14px] lg:text-[11px] xl:text-[13px] font-medium  text-[#2e1065] pb-1">Help ?</button>
    //           </div>

    //           <div className=" absolute top-[4px] left-5 ">
    //             <img src={Aarogya_Aadhar_logo} alt="" className=" cursor-pointer" onClick={()=>navigate('/')}/>
    //           </div>

    //           <div className="flex w-full px-4 bg-white">
    //             <div className="flex flex-col flex-grow">
    //               <div className="grid grid-cols-3 gap-2 mb-2 ml-56">
    //                 <div className=" flex justify-center items-center gap-2 col-span-1 border border-blue-700 w-full rounded-md px-2 h-8">
    //                 <FaLocationDot className="text-gray-500"/>
    //                 <input
    //                   type="text"
    //                   placeholder="Location"
    //                   className="w-full outline-none"
    //                 />
    //                 </div>
    //                 <div className=" flex justify-end items-center col-span-2 w-full rounded-md border outline-none border-blue-700 px-2 h-8">

    //                 <input
    //                   type="text"
    //                   placeholder="Search For Healthcare Services"
    //                   className="outline-none w-full"
    //                 />
    //                 <FaSearch  className=" text-gray-500"/>
    //                 </div>
    //               </div>
    //               <div className="flex gap-2 lg:gap-1 xl:gap-2 ml-0">
    //       <button className="flex-grow inline-flex justify-center items-center h-8 border bg-blue-600 border-blue-700 shadow-lg rounded-md text-sm lg:text-12px xl:text-sm font-medium" onClick={()=>navigate('/bookappointment')}>
    //         <span className=" text-white flex justify-center items-center gap-2" > <span><FaCalendarAlt className=" h-4 w-4"/></span>  Book Free Appointment</span>
    //       </button>

    //       <button className="flex-grow inline-flex justify-center items-center h-8 border bg-blue-600 border-blue-700 shadow-lg rounded-md text-sm lg:text-12px xl:text-sm font-medium" onClick={()=>navigate('/bedBooking')}>
    //         <span className=" text-white flex justify-center items-center gap-2"> <span><FaBed className=" h-5 w-5"/></span> Bed Booking</span>
    //       </button>
    //       <button className="flex-grow inline-flex bg-red-600 justify-center items-center h-8 border  border-red-700 shadow-lg rounded-md text-sm lg:text-12px xl:text-sm font-medium" onClick={()=>navigate('/AmbulanceBooking')}>
    //         <span className=" text-white flex justify-center items-center gap-2"> <span><FaTruckMedical className=" h-5 w-5"/></span> Book Ambulance</span>
    //       </button>
    //       <button className="flex-grow inline-flex justify-center items-center h-8 border bg-blue-600 border-blue-700 shadow-lg rounded-md text-sm lg:text-12px xl:text-sm font-medium" onClick={()=>navigate('/apply-health-card')}>
    //         <span className=" text-white  flex justify-center items-center gap-2"> <span><TiDocumentText className="h-5 w-5"/></span> Apply Health Card</span>
    //       </button>
    //       <button className="flex-grow inline-flex justify-center items-center h-8 border bg-blue-600 border-blue-700 shadow-lg rounded-md text-sm lg:text-12px xl:text-sm font-medium">
    //         <span className=" text-white flex justify-center items-center gap-2"> <span><CgProfile className=" h-4 w-4"/></span> Job Portal</span>
    //       </button>
    //     </div>

    //             </div>
    //             <div
    //   className="flex justify-center items-center h-[72px] w-[208px] mb-2 rounded-lg border  shadow-lg cursor-pointer border-blue-700 ml-4"
    //   onClick={() => navigate('/aarogyadhan')}
    // >
    //   <img src={Aarogyadhan} alt="AarogyaDhan Logo" className="h-full w-full object-contain" />
    // </div>
    //           </div>

    //           {/* </div> */}
    //           <div className="flex justify-evenly bg-white shadow-lg pt-1 space-x-2">
    //             {dropdownData.map((dropdown, index) => (
    //               <Dropdown
    //                 key={index}
    //                 label={dropdown.label}
    //                 options={dropdown.options}
    //               />
    //             ))}
    //           </div>
    //         </div>
    <>
     

      <div className=" fixed top-0 w-full z-50 ">
        <div className="flex justify-between pt-2 bg-[#d9eefd] px-4 pb-2">
          <div className=" flex items-center">
            <img src={Aarogya_Aadhar_logo} alt="" />
          </div>

          <div className="">
          <div className=" flex justify- items-center col-span-2 w-full rounded-full border bg-gray-50 outline-none border-blue-700 px-2 h-10">
              <input
                type="text"
                placeholder="Search For Healthcare Services"
                className="outline-none bg-gray-50 w-full"
              />
              <FaSearch className=" text-gray-500" />
            </div>
            <div className="flex justify-between gap-10 mt-2 mx-20">
              <div className="h-14 flex flex-col justify-center items-center">
                <div className="h-8  rounded-md flex bg-[#dfecf6] justify-center items-center">
                  <FaCalendarAlt className="h-9 w-9 p-1 text-blue-900" />
                </div>
                <div className="relative group">
                  <p className="text-[14px] cursor-pointer text-blue-900 max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
                    Book Free Appointment
                  </p>
                  <span className="hidden group-hover:block absolute bg-blue-500 text-white text-xs rounded py-1 px-2 top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                    Book Free Appointment
                  </span>
                </div>
              </div>

              <div className="h-14 flex flex-col justify-center items-center">
                <div className="h-8 rounded-md flex bg-[#dfecf6] justify-center  items-center">
                  <FaBed className="h-9 w-10 p-1 text-blue-900" />
                </div>
                <div className="relative group">
                  <p className="text-[14px] cursor-pointer text-blue-900 max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
                    Bed Booking
                  </p>
                  <span className="hidden group-hover:block absolute bg-blue-500 text-white text-xs rounded py-1 px-2 top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                    Bed Booking
                  </span>
                </div>
              </div>

              <div className="h-14 flex flex-col justify-center items-center">
                <div className="h-8  rounded-md flex bg-[#dfecf6] justify-center items-center">
                  <FaTruckMedical className="h-8 w-10 p-1 text-red-500" />
                </div>
                <div className="relative group">
                  <p className="text-[14px] cursor-pointer text-blue-900 max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
                    Book Ambulance
                  </p>
                  <span className="hidden group-hover:block absolute bg-blue-500 text-white text-xs rounded py-1 px-2 top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                    Book Ambulance
                  </span>
                </div>
              </div>

              <div className="h-14 flex flex-col justify-center items-center">
                <div className="h-8 rounded-md flex bg-[#dfecf6] justify-center items-center">
                  <LiaIdCardSolid className="h-11 w-10 p-1  text-blue-900" />
                </div>
                <div className="relative group">
                  <p className="text-[14px] cursor-pointer text-blue-900 max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
                    Apply Health Card
                  </p>
                  <span className="hidden group-hover:block absolute bg-blue-500 text-white text-xs rounded py-1 px-2 top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                    Apply Health Card
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            
          <button className=" text-[14px] lg:text-[12px] xl:text-[14px]  font-medium  text-[#2e1065] pb-1">
          Registration
        </button>
        <button className=" text-[14px] lg:text-[12px] xl:text-[14px] ml-2  font-medium  text-[#2e1065] pb-1">
          Login
        </button>
        <span className=" ml-2">
            {TopDropdownData.map((dropdown, index) => (
              <Dropdown
                key={index}
                label={dropdown.label}
                options={dropdown.options}
                textcolor={"text-[#2e1065]"}
              />
            ))}
            </span>
             <button className=" text-[14px] lg:text-[12px] xl:text-[14px] ml-1 font-medium  text-[#2e1065] pb-1">
          Help?
        </button>
          </div>
        </div>

        <div className="flex justify-evenly bg-gray-100 shadow-lg pt-1 space-x-2">
          {dropdownData.map((dropdown, index) => (
            <Dropdown
              key={index}
              label={dropdown.label}
              options={dropdown.options}
              textcolor={"text-blue-600"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
