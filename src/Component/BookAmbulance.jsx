import React, { useRef, useState } from "react";
import Ambulance_Service from "../assets/Images/Book-Ambulance.png";
import { IoMdLocate } from "react-icons/io";
import MobileNavbar from "./MobileNavabr";
import Navbar from "./Navbar";
import OurPolicies from "./OurPolicies";
import Footer from "./Footer";
import ScrollingTagline from "./ScrollingTagline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";;
import { FaCalendarAlt } from "react-icons/fa"


const BookAmbulance = () => {
  const fileInputRef = useRef(null);
  const [selectedAmbulance, setSelectedAmbulance] = useState("");
  const [selectedAmbulanceType, setSelectedAmbulanceType] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [errors, setErrors] = useState({});
  const [startDate, setStartDate] = useState(null); // Initialize with null or default date
  const datePickerRef = useRef(null); 

  const handleDatePickerClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus(); // Focus the DatePicker input
    }
  };


  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    if (!e.target.firstName.value.trim()) {
      formErrors.firstName = "First Name is Required";
    }
    if (!e.target.middleName.value.trim()) {
      formErrors.middleName = "Middle Name is Required";
    }
    if (!e.target.lastName.value.trim()) {
      formErrors.lastName = "Last Name is Required";
    }
    if (!e.target.patientMobileNo.value.trim() || e.target.patientMobileNo.value.trim().length !== 10) {
      formErrors.patientMobileNo = "Mobile number must be 10 digits";
    }
    if (!e.target.patientPinCode.value.trim() || e.target.patientPinCode.value.trim().length !== 6) {
      formErrors.patientPinCode = "Pin code must be 6 digits";
    }
    if (!e.target.city.value.trim()) {
      formErrors.city = "City Name is Required";
    }
    if (!e.target.aadhar.value.trim() || e.target.aadhar.value.trim().length !== 12) {
      formErrors.aadhar = "Aadhar number must be 12 digits";
    }
    if (!e.target.patientOtp.value.trim()) {
      formErrors.patientOtp = "OTP is Required";
    }
    if (!e.target.patientEmail.value.trim()) {
      formErrors.patientEmail = "Email ID is Required";
    }
    if (!e.target.patientEmailOtp.value.trim()) {
      formErrors.patientEmailOtp = "OTP is Required";
    }
    if (!selectedAmbulance) {
      formErrors.selectedAmbulance = "Please select an ambulance";
    }
    if (!selectedAmbulanceType) {
      formErrors.selectedAmbulanceType = "Please select an ambulance type";
    }
    if (!selectedHospital) {
      formErrors.selectedHospital = "Please select a hospital";
    }
    if (!dateOfBirth) {
      formErrors.dateOfBirth = "Please select your date of birth";
    }
    setErrors(formErrors);

    // If no errors, proceed with form submission logic
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission logic here
      console.log("Form submitted successfully!");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="xl:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden xl:flex">
        <Navbar />
      </div>
      <div className="flex xl:hidden fixed top-[83px] sm:top-[105px] bg-white">
        <ScrollingTagline />
      </div>
      <div className="mt-[135px] xl:mt-36 pt-4 py-3">
        <div className="grid grid-cols-12 gap-4 px-3">
          <div className="col-span-12 md:col-span-8 md:col-start-7 xl:col-start-7">
            <h2 className="text-4xl font-bold text-blue-900">
              Book Ambulance
            </h2>
          </div>
        </div>
        <hr className="mt-3 mx-9" />

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-4 px-3">
            <div className="col-span-12 md:col-span-4 pt-2">
              <div className="sm:flex">
                <div className="flex justify-center text-wrap">
                  {/* <img
                    src={Ambulance_Service}
                    alt="Book Free Appointment"
                    className="h-52 w-full"
                  /> */}
                </div>
                <div className="leading-6">
                  {/* <p className="text-center text-[19px]  text-red-500 font-bold">
                    Emergency Need ?<br />
                    Call on +91 79-7272-7498
                  </p> */}
                  <p className="text-center text-blue-900">24/7 Available</p>
                  <p className="text-center text-[19px]  text-red-500 ">
                    If any accident case please follow below protocol and save life........
                  </p>
                  <p className="text-center text-[19px]  text-red-500 font-bold">
                    Aarogya Aadhar is taking all responsibilities.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-3 mt-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="file-input"
                    className="font-semibold text-blue-900 leading-4"
                  >
                    Upload Live Photo <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleButtonClick}
                    className="mt-2 p-2 bg-blue-900 text-white rounded"
                  >
                    Take Image
                  </button>
                  <input
                    type="file"
                    id="file-input"
                    ref={fileInputRef}
                    accept="image/*"
                    capture
                    style={{ display: "none" }}
                  />
                </div>

                <div className="relative max-w-[85%]">
                  <label
                    htmlFor="pin-code"
                    className="font-semibold text-blue-900"
                  >
                    Pin Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pin-code"
                    name="patientPinCode"
                    placeholder="Enter Pin Code"
                    className={`border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full ${errors.patientPinCode && "border-red-500"}`}
                  />
                  {errors.patientPinCode && (
                    <p className="text-red-500">{errors.patientPinCode}</p>
                  )}
                </div>

                <div className="relative max-w-[85%]">
                  <label
                    htmlFor="patient-mobile-no"
                    className="font-semibold text-blue-900"
                  >
                    Mobile Number{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="patient-mobile-no"
                    name="patientMobileNo"
                    placeholder="Enter Mobile Number"
                    className={`border border-blue-500 h-10 outline-none rounded-md pr-5 pl-2 appearance-none  w-full ${errors.patientMobileNo && "border-red-500"}`}
                  />
                  {errors.patientMobileNo && (
                    <p className="text-red-500">{errors.patientMobileNo}</p>
                  )}
                </div>
                

                <div className="flex flex-col relative">
                  <label
                    htmlFor="patient-otp"
                    className="font-semibold text-blue-900"
                  >
                    Enter OTP <span className="text-red-500">*</span>
                  </label>
                  <div className="relative max-w-[85%]">
                    <input
                      type="text"
                      id="patient-otp"
                      name="patientOtp"
                      placeholder="Enter OTP"
                      className={`border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full ${errors.patientOtp && "border-red-500"}`}
                    />
                    <button className="absolute inset-y-0 right-0 bg-blue-900 text-white rounded-md px-2">
                      Get OTP
                    </button>
                  </div>
                  {errors.patientOtp && (
                      <p className="text-red-500">{errors.patientOtp}</p>
                    )}
                </div>

                <button className="flex justify-center items-center bg-blue-900 mt-6 text-white h-12 rounded-md w-full">
                  Locate Me{" "}
                  <span className="ml-2">
                    <IoMdLocate className="h-5 w-5" />
                  </span>
                </button>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 gap-2">
                <div className="relative max-w-[85%]">
                  <label
                    htmlFor="first-name"
                    className="font-semibold text-blue-900"
                  >
                    First Name{" "}
                    <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="Enter First Name"
                    className={`border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full  ${errors.firstName && "border-red-500"}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div className="relative max-w-[85%]">
                  <label
                    htmlFor="middle-name"
                    className="font-semibold text-blue-900"
                  >
                    Middle Name{" "}
                    <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    id="middle-name"
                    name="middleName"
                    placeholder="Enter Middle Name"
                    className={`border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full ${errors.middleName && "border-red-500"}`}
                  />
                  {errors.middleName && (
                    <p className="text-red-500">{errors.middleName}</p>
                  )}
                </div>

                <div className="relative max-w-[85%]">
                  <label
                    htmlFor="last-name"
                    className="font-semibold text-blue-900"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Enter Last Name"
                    className={`border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full ${errors.lastName && "border-red-500"}`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dob" className="font-semibold text-blue-900">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  
                  <div className="relative max-w-[85%]">
                    <DatePicker
                      id="dob"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="DD/MM/YYYY" // Placeholder text added here
                      ref={datePickerRef}
                      onClick={handleDatePickerClick}
                      className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                    />
                  
                    <FaCalendarAlt className="absolute top-3 right-3 text-blue-500 pointer-events-none" />
                  </div>

                  {errors.dateOfBirth && (
                    <p className="text-red-500">{errors.dateOfBirth}</p>
                  )}
                </div>

                <div className="flex flex-col">
                <label htmlFor="" className="font-semibold text-blue-900">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="relative max-w-[85%]">
                  <select
                    name=""
                    id=""
                    className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                  >
                    <option value="">Select Gender</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Transgender</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
                <div className="relative max-w-[85%]">

                  <label
                    htmlFor="patient-mobile-no"
                    className="font-semibold text-blue-900"
                  >
                    Mobile No{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="patient-mobile-no"
                    name="patientMobileNo"
                    placeholder="Enter Mobile Number"
                    className={`border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full ${errors.patientMobileNo && "border-red-500"}`}
                  />
                  {errors.patientMobileNo && (
                    <p className="text-red-500">{errors.patientMobileNo}</p>
                  )}
                </div>

                <div className="flex flex-col relative">
                  <label
                    htmlFor="patient-email"
                    className="font-semibold text-blue-900"
                  >
                    Email ID
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative max-w-[85%]">
                    <input
                      type="text"
                      id="patient-email"
                      name="patientEmail"
                      placeholder="Enter Email ID"
                      className={`border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full ${errors.patientEmail && "border-red-500"}`}
                    />
                    <button className="absolute inset-y-0 right-0 bg-blue-900 text-white rounded-md px-2">
                      Get OTP
                    </button>
                  </div>
                  {errors.patientEmail && (
                      <p className="text-red-500">{errors.patientEmail}</p>
                    )}
                </div>

                <div className="flex flex-col relative">
                  <label
                    htmlFor="patient-email-otp"
                    className="font-semibold text-blue-900"
                  >
                    Enter Email OTP
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative max-w-[85%]">
                    <input
                      type="text"
                      id="patient-email-otp"
                      name="patientEmailOtp"
                      placeholder="Enter Email OTP"
                      className={`border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full ${errors.patientEmailOtp && "border-red-500"}`}
                    />
                   
                    <button className="absolute inset-y-0 right-0 bg-blue-900 text-white rounded-md px-2">
                      Verify OTP
                    </button>
                  </div>
                  {errors.patientEmailOtp && (
                      <p className="text-red-500">{errors.patientEmailOtp}</p>
                    )}
                </div>
                <div className="flex flex-col">

                <label htmlFor="" className="font-semibold text-blue-900">
                Select Ambulance{" "} <span className="text-red-500">*</span>
                </label>
                <div className="relative max-w-[85%]">
                  <select
                    name="select-ambulance"
                    id="selectedAmbulance"
                    className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                    
                  >
                    <option value="">Select Ambulance</option>
                    <option value="">Government 108</option>
                    <option value="">Private Ambulance</option>
                    <option value="">Hospital Ambulance</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
                <div className="flex flex-col">
                <label htmlFor="" className="font-semibold text-blue-900">
                Ambulance Type{" "}<span className="text-red-500">*</span>
                </label>
                <div className="relative max-w-[85%]">
                  <select
                    name="ambulance-type"
                    id="selectedAmbulanceType"
                    className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                  >
                    <option value="">Select Ambulance Type</option>
                    <option value="">Basic Ambulance</option>
                    <option value="">O2 Ambulance</option>
                    <option value="">Cardiac Ambulance</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
                <div className="flex flex-col">
                <label htmlFor="" className="font-semibold text-blue-900">
                Hospital <span className="text-red-500">*</span>
                </label>
                <div className="relative max-w-[85%]">
                  <select
                    name="hospital"
                    id="selectedHospital"
                    className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                  >
                    <option value="">Select Hospital</option>
                    <option value="">Private Hospital</option>
                    <option value="">Government Hospital</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
                <div className="relative max-w-[85%]">
                  <label
                    htmlFor="city"
                    className="font-semibold text-blue-900"
                  >
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter City Name"
                    className={`border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full ${errors.city && "border-red-500"}`}
                  />
                  {errors.city && (
                    <p className="text-red-500">{errors.city}</p>
                  )}
                </div>

                <div className="relative max-w-[85%]">
                  <label
                    htmlFor="aadhar"
                    className="font-semibold text-blue-900"
                  >
                    Aadhar Card No.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="aadhar"
                    name="aadhar"
                    placeholder="Enter Aadhar Number"
                    className={`border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full  ${errors.aadhar && "border-red-500"}`}
                  />
                  {errors.aadhar && (
                    <p className="text-red-500">{errors.aadhar}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-4 xl:mt-0">
                <button type="submit" className="text-white bg-blue-900 py-3 px-6 rounded-md hover:bg-blue-700">
                  Book your Appointment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <OurPolicies />
      <Footer />
    </>
  );
};

export default BookAmbulance;
