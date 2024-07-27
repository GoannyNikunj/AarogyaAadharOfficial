import React, { useState, useRef } from "react";
import Bed_Booking from "../assets/Images/Bed-Booking.png";
import OurPolicies from "./OurPolicies";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavabr";
import Navbar from "./Navbar";
import ScrollingTagline from "./ScrollingTagline";

const BedBooking = () => {
  const HospitalBed = [
    "ICU Ventilator Bed",
    "ICU Bed",
    "NICU Bed",
    "PICU Ventilator Bed",
    "CCU Bed",
    "HDU Bed",
    "Suite Room Bed",
    "Deluxe Room Bed",
    "Private Single Sharing Bed",
    "Non AC Private Single Sharing Bed",
    "Semi Private Sharing Bed",
    "Non AC Semi Private Sharing Bed",
    "Male Ward Bed",
    "Female Ward Bed",
    "General Ward",
  ];

  const Hospitals = [
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
  ];

  const [hospitalName, setHospitalName] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [hospitalNameError, setHospitalNameError] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");

  const [hospitalTypeFocused, setHospitalTypeFocused] = useState(false);
  const [hospitalBedFocused, setHospitalBedFocused] = useState(false);
  const [advancedSearchFocused, setAdvancedSearchFocused] = useState(false);

  const hospitalTypeRef = useRef(null);
  const hospitalBedRef = useRef(null);
  const advancedSearchRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error messages
    setHospitalNameError("");
    setPinCodeError("");

    // Validation checks
    if (!isCapitalized(hospitalName)) {
      setHospitalNameError(
        "Hospital name should start with a capital letter."
      );
    }

    if (pinCode.length !== 6) {
      setPinCodeError("Pin code must be 6 digits.");
    }

    // If any error exists, prevent form submission
    if (hospitalNameError || pinCodeError) {
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", {
      hospitalName,
      city,
      pinCode,
    });

    // You can add further logic here to submit the form data to your backend or perform other actions
  };

  const isCapitalized = (name) => {
    return /^[A-Z]/.test(name);
  };

  const handleHospitalTypeFocus = () => {
    setHospitalTypeFocused(true);
    if (hospitalTypeRef.current) {
      hospitalTypeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleHospitalTypeBlur = () => {
    setHospitalTypeFocused(false);
  };

  const handleHospitalBedFocus = () => {
    setHospitalBedFocused(true);
    if (hospitalBedRef.current) {
      hospitalBedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleHospitalBedBlur = () => {
    setHospitalBedFocused(false);
  };

  const handleAdvancedSearchFocus = () => {
    setAdvancedSearchFocused(true);
    if (advancedSearchRef.current) {
      advancedSearchRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleAdvancedSearchBlur = () => {
    setAdvancedSearchFocused(false);
  };

  return (
    <div>
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
          <div className="col-span-12 md:col-span-8 md:col-start-4 xl:col-start-4">
        <h2 className="text-4xl font-bold text-center text-blue-900">
          Bed Booking
        </h2>
        </div>
        </div>
        <hr className="my-4 mx-4" />
        <div className="grid md:grid-cols-12 gap-4 px-3">
          <div className="col-span-12 md:col-span-4 pt-3 flex flex-col justify-center items-center">
            <img
              src={Bed_Booking}
              alt="Bed Booking"
              className="h-96 w-full md:w-auto rounded-sm"
            />
          </div>
          <div className="col-span-12 md:col-span-8 mt-12">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="hospital-type"
                    className="font-semibold text-blue-900"
                  >
                    Hospital Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative max-w-[85%]">
                    <select
                      id="hospital-type"
                      className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                      required
                      onFocus={handleHospitalTypeFocus}
                      onBlur={handleHospitalTypeBlur}
                      ref={hospitalTypeRef}
                    >
                      <option value="">
                        {hospitalTypeFocused
                          ? "Select-Hospital-Type"
                          : "Select Hospital Type"}
                      </option>
                      <option value="government">Government Hospital</option>
                      <option value="private">Private Hospital</option>
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
                  <label
                    htmlFor="hospital-bed"
                    className="font-semibold text-blue-900"
                  >
                    Select Hospital Bed{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative max-w-[85%]">
                    <select
                      id="hospital-bed"
                      className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                      required
                      onFocus={handleHospitalBedFocus}
                      onBlur={handleHospitalBedBlur}
                      ref={hospitalBedRef}
                    >
                      <option value="">
                        {hospitalBedFocused
                          ? "Select-Hospital-Bed"
                          : "Select Hospital Bed"}
                      </option>
                      {HospitalBed.map((bed, index) => (
                        <option key={index} value={bed} className="text-sm">
                          {bed}
                        </option>
                      ))}
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
                  <label
                    htmlFor="advanced-search"
                    className="font-semibold text-blue-900"
                  >
                    Advanced Search{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative max-w-[85%]">
                    <select
                      id="advanced-search"
                      className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                      required
                      onFocus={handleAdvancedSearchFocus}
                      onBlur={handleAdvancedSearchBlur}
                      ref={advancedSearchRef}
                    >
                      <option value="">
                        {advancedSearchFocused
                          ? "Select-Hospital"
                          : "Select Hospital"}
                      </option>
                      {Hospitals.map((hospital, index) => (
                        <option key={index} value={hospital} className="text-sm">
                          {hospital}
                        </option>
                      ))}
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
                  <label
                    htmlFor="hospital-name"
                    className="font-semibold text-blue-900"
                  >
                    Hospital Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="hospital-name"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    placeholder="Enter Hospital Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%]"
                    required
                  />
                  {hospitalNameError && (
                    <span className="text-red-500 text-sm">
                      {hospitalNameError}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city" className="font-semibold text-blue-900">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%]"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="pincode"
                    className="font-semibold text-blue-900"
                  >
                    Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder="Enter Pin Code"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%]"
                    required
                  />
                  {pinCodeError && (
                    <span className="text-red-500 text-sm">{pinCodeError}</span>
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-5">
                <button
                  type="submit"
                  className="text-white bg-blue-900 px-3 py-2 rounded-md"
                >
                  Book your Bed
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <OurPolicies />

      <Footer />
    </div>
  );
};

export default BedBooking;
