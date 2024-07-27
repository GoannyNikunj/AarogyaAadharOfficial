import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import Book_Free_Appointment from "../assets/Images/Book-Free-Appointment.png";
import MobileNavbar from "./MobileNavabr";
import Navbar from "./Navbar";
import OurPolicies from "./OurPolicies";
import Footer from "./Footer";
import ScrollingTagline from "./ScrollingTagline";

const BookAppointment = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState(null); // Use null for initial state
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [aadhar, setAadhar] = useState("");

  const ExpertDoctor = [
    "General Physician",
      "Emergency Medicine",
      "Internal Medicine",
      "Occupational Medicine",
      "Chest Physician",
      "Pediatricians",
      "Otorhinolaryngologist",
      "Obstetrician and Gynecologists",
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
  ];

  const [firstNameError, setFirstNameError] = useState("");
  const [middleNameError, setMiddleNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");
  const [aadharError, setAadharError] = useState("");

  const categoryRef = useRef(null);
  const datePickerRef = useRef(null); // Add a ref for the DatePicker

  const handleDateChange = (date) => {
    setDob(date); // Set the selected date object
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validations
    let valid = true;

    if (firstName.trim() === "") {
      setFirstNameError("First Name is required");
      valid = false;
    } else {
      setFirstNameError("");
    }

    if (middleName.trim() === "") {
      setMiddleNameError("Middle Name is required");
      valid = false;
    } else {
      setMiddleNameError("");
    }

    if (lastName.trim() === "") {
      setLastNameError("Last Name is required");
      valid = false;
    } else {
      setLastNameError("");
    }

    if (mobile.trim().length !== 10) {
      setMobileError("Mobile number must be 10 digits");
      valid = false;
    } else {
      setMobileError("");
    }

    if (pinCode.trim().length !== 6) {
      setPinCodeError("Pin code must be 6 digits");
      valid = false;
    } else {
      setPinCodeError("");
    }

    if (aadhar.trim().length !== 12) {
      setAadharError("Aadhar number must be 12 digits");
      valid = false;
    } else {
      setAadharError("");
    }

    if (valid) {
      // Handle form submission with all state values including dob
      console.log("Form submitted:", {
        firstName,
        middleName,
        lastName,
        dob: dob ? formatDate(dob) : "",
        gender,
        category,
        mobile,
        email,
        otp,
        city,
        pinCode,
        aadhar,
      });
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };

  const handleCategoryChange = (e) => {
    if (e.target.value === "Select-Your-Service") {
      setCategory("");
    } else {
      setCategory(e.target.value);
    }
  };

  const handleGenderChange = (e) => {
    if (e.target.value === "Select-Gender") {
      setGender("");
    } else {
      setGender(e.target.value);
    }
  };

  const handleCategoryFocus = () => {
    if (categoryRef.current && !category) {
      categoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const handleDatePickerClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus(); // Focus the DatePicker input
    }
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
      <div className="mt-[135px] xl:mt-[145px] pt-3 py-3">
        <div className="grid md:grid-cols-12 gap-3 py-4 px-3">
          <div className="hidden md:block col-span-12 md:col-span-4 w-full pt- flex flex-col justify-center items-center">
            <img src={Book_Free_Appointment} alt="Book Free Appointment" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-4xl font-bold text-center mx-2 py-2 text-blue-900 justify-self-end">
              Book Free Appointment
            </h2>
            <hr className="mt-[1px] mx-4" />
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="font-semibold text-blue-900"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {firstNameError && (
                    <span className="text-red-500 text-sm">
                      {firstNameError}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="middleName"
                    className="font-semibold text-blue-900"
                  >
                    Middle Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="middleName"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    placeholder="Enter Middle Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {middleNameError && (
                    <span className="text-red-500 text-sm">
                      {middleNameError}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="font-semibold text-blue-900"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {lastNameError && (
                    <span className="text-red-500 text-sm">
                      {lastNameError}
                    </span>
                  )}
                </div>
                <div className="flex flex-col relative">
                  <label htmlFor="dob" className="font-semibold text-blue-900">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <div
                    className="flex items-center border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] relative cursor-pointer"
                    onClick={handleDatePickerClick}
                  >
                    <DatePicker
                      selected={dob}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="DD/MM/YYYY"
                      className="w-full outline-none"
                      ref={datePickerRef} // Assign the ref to DatePicker
                      required
                    />
                    <FaCalendarAlt className="absolute right-3 text-blue-500 pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="gender"
                    className="font-semibold text-blue-900"
                  >
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="relative max-w-[85%]">
                  <select
                    id="gender"
                    value={gender}
                    onChange={handleGenderChange}
                    className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                    required
                  >
                    {!gender && (
                      <option disabled hidden value="">
                        Select Gender
                      </option>
                    )}
                    <option value="Select-Gender">Select-Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Other">Other</option>
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
                    htmlFor="category"
                    className="font-semibold text-blue-900"
                  >
                    Category <span className="text-red-500">*</span>
                  </label>
                  <div className="relative max-w-[85%]">
                  <select
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    onFocus={handleCategoryFocus}
                    ref={categoryRef}
                     className="border border-blue-500 h-10 outline-none rounded-md pr-10 pl-3 appearance-none  w-full"
                    required
                  >
                    {!category && (
                      <option disabled hidden value="">
                        Select Your Service
                      </option>
                    )}
                    {ExpertDoctor.map((doctor, index) => (
                      <option key={index} value={doctor}>
                        {doctor}
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
                    htmlFor="mobile"
                    className="font-semibold text-blue-900"
                  >
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter Mobile Number"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {mobileError && (
                    <span className="text-red-500 text-sm">{mobileError}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-semibold text-blue-900"
                  >
                    Email ID
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email ID"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  />
                </div>
                <div className="flex flex-col relative">
                <label
                  htmlFor="patient-otp"
                  className="font-semibold text-blue-900"
                >
                  Enter OTP <span className="text-red-500">*</span>
                </label>
                <div className="relative border border-blue-500 rounded-md px-3 max-w-[85%]">
                  <input
                    type="text"
                    id="patient-otp"
                    placeholder="Enter OTP"
                    className="h-12 outline-none rounded-md placeholder-text flex-grow"
                  />
                  <button className="absolute inset-y-0 right-0 bg-blue-900 text-white rounded-md px-3">
                    Get OTP
                  </button>
                </div>
              </div>
                <div className="flex flex-col">
                  <label htmlFor="city" className="font-semibold text-blue-900">
                    City
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="pinCode"
                    className="font-semibold text-blue-900"
                  >
                    Pin Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="pinCode"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder="Enter Pin Code"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {pinCodeError && (
                    <span className="text-red-500 text-sm">{pinCodeError}</span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="aadhar"
                    className="font-semibold text-blue-900"
                  >
                    Aadhar Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="aadhar"
                    value={aadhar}
                    onChange={(e) => setAadhar(e.target.value)}
                    placeholder="Enter Aadhar Number"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    required
                  />
                  {aadharError && (
                    <span className="text-red-500 text-sm">{aadharError}</span>
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-10">
                <button
                  type="submit"
                  className="bg-blue-700 text-white font-semibold rounded-md py-2 px-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="block md:hidden col-span-12 md:col-span-4 w-full pt- flex flex-col justify-center items-center">
            <img src={Book_Free_Appointment} alt="Book Free Appointment" />
          </div>
        </div>
      </div>
      <div className="py-4">
        <OurPolicies />
        <Footer />
      </div>
    </>
  );
};

export default BookAppointment;

