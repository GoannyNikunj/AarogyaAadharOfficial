import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";
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
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [aadhar, setAadhar] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [middleNameError, setMiddleNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");
  const [aadharError, setAadharError] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalInput, setModalInput] = useState(""); // Added for input in modal

  const categoryRef = useRef(null);
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setDob(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
      datePickerRef.current.setFocus();
    }
  };

  const openModal = (type) => {
    setModalContent(type);
    setModalOpen(true);
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
          <div  className="col-span-12 md:col-span-8 ">
            <h2 className="text-4xl font-bold text-center mx-2 py-2 text-blue-900 justify-self-end">
              Book Free Appointment
            </h2>
            <hr className="mt-[1px] mx-4" />
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="font-semibold text-blue-900">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  />
                  {firstNameError && <p className="text-red-500">{firstNameError}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="middleName" className="font-semibold text-blue-900">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    id="middleName"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    placeholder="Enter Middle Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  />
                  {middleNameError && <p className="text-red-500">{middleNameError}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="font-semibold text-blue-900">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  />
                  {lastNameError && <p className="text-red-500">{lastNameError}</p>}
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
                  <label htmlFor="gender" className="font-semibold text-blue-900">
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={handleGenderChange}
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  >
                    <option value="Select-Gender">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="category" className="font-semibold text-blue-900">
                    Category
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    onFocus={handleCategoryFocus}
                    ref={categoryRef}
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  >
                    <option value="Select-Your-Service">Select Your Service</option>
                    <option value="General">General</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                </div>
            
                 <div className="flex flex-col">
                  <label htmlFor="aadhar" className="font-semibold text-blue-900">
                    Aadhar Number
                  </label>
                  <input
                    type="text"
                    id="aadhar"
                    value={aadhar}
                    onChange={(e) => setAadhar(e.target.value)}
                    placeholder="Enter Aadhar Number"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  />
                  {aadharError && <p className="text-red-500">{aadharError}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city" className="font-semibold text-blue-900">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="pinCode" className="font-semibold text-blue-900">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    id="pinCode"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder="Enter Pin Code"
                    className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                  />
                  {pinCodeError && <p className="text-red-500">{pinCodeError}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="mobile" className="font-semibold text-blue-900">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter Mobile Number"
                      className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[90%] placeholder-text"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600"
                      onClick={() => openModal("Mobile")}
                    >
                      Verify
                    </button>
                  </div>
                  {mobileError && <p className="text-red-500">{mobileError}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-semibold text-blue-900">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address"
                      className="border border-blue-500 h-10 outline-none rounded-md px-3 max-w-[85%] placeholder-text"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-600"
                      onClick={() => openModal("Email")}
                    >
                      Verify
                    </button>
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
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-md w-80">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-900">
                Verify {modalContent === "Mobile" ? "Mobile Number" : "Email Address"}
              </h3>
              <FaTimes
                className="cursor-pointer"
                onClick={() => setModalOpen(false)}
              />
            </div>
            <div className="mt-4">
            <input
                type="text"
                value={modalInput}
                onChange={(e) => setModalInput(e.target.value)}
                placeholder={`Enter ${modalContent === "Mobile" ? "Mobile OTP" : "Email OTP"}`}
                className="border border-blue-500 h-10 outline-none rounded-md px-3 w-full"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-md"
                onClick={() => {
                  setModalOpen(false);
                  // Handle verification logic here
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <OurPolicies />
      <Footer />
    </>
  );
};

export default BookAppointment;
