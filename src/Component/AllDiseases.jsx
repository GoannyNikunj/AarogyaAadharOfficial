import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaAngleDown } from "react-icons/fa";

const AllDiseases = () => {
  const dropdownData = [
    {
      options: [
        "Index A",
        "Index B",
        "Index C",
        "Index D",
        "Index E",
        "Index F",
        "Index G",
        "Index H",
        "Index I",
        "Index J",
        "Index K",
        "Index L",
        "Index M",
        "Index N",
        "Index O",
        "Index P",
        "Index Q",
        "Index R",
        "Index S",
        "Index T",
        "Index U",
        "Index V",
        "Index W",
        "Index X",
        "Index Y",
        "Index Z",
      ],
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("A to Z Diseases");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  let timeoutId;

  const openDropdown = () => {
    clearTimeout(timeoutId);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false); // Close dropdown after selecting an option
  };

  const updatePlaceholder = () => {
    if (window.innerWidth >= 1024) {
      setPlaceholder("Select A to Z Diseases");
    } else {
      setPlaceholder("A to Z Diseases");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      setDropdownWidth(inputRef.current.offsetWidth);
    }

    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);

    return () => window.removeEventListener("resize", updatePlaceholder);
  }, [inputRef.current?.offsetWidth]);

  const renderOptions = () => {
    const options = dropdownData[0].options;
    const screenWidth = window.innerWidth;
    let columns, optionsPerColumn;

    if (screenWidth >= 640) {
      columns = 3;
      optionsPerColumn = 9;
    } else if (screenWidth >= 403) {
      columns = 2;
      optionsPerColumn = 13;
    } else {
      columns = 1;
      optionsPerColumn = options.length; // Show all options in one column with scrollbar
    }

    const chunks = [];
    for (let i = 0; i < options.length; i += optionsPerColumn) {
      chunks.push(options.slice(i, i + optionsPerColumn));
    }

    return (
      <div className={`grid xs:grid-cols-2 sm:grid-cols-3 sm:gap-2`}>
        {chunks.map((chunk, chunkIndex) => (
          <div
            key={chunkIndex}
            className={`flex flex-col py-1 ${
              chunkIndex < chunks.length - 1 ? "sm:border-r border-gray-300" : ""
            } pr-6 max-h-72 overflow-y-auto xs:overflow-hidden`} // Add max height and overflow-y for scrollbar
          >
            {chunk.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelectOption(option)}
                className="cursor-pointer hover:bg-blue-100 text-[12px] text-blue-950 w-full px-2 py-1"
              >
                {option}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="lg:mt-2 py-2 lg:py-7 md:px-[20px] lg:px-3 xl:px-32">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-900 text-center font-bold lg:pt-5 lg:mb-3">
        All Health Diseases
      </h2>
      <p className="text-blue-500 hidden lg:flex flex-col text-center mb-5 text-[12px] font-semibold sm:text-[17px]">
        A to Z Diseases Information
      </p>
      <p className="text-blue-500 lg:hidden text-center mb-5 text-[12px] font-semibold sm:text-[17px]">
        Diseases Information
      </p>
      <div className="grid grid-cols-2 gap-1 sm:gap-3 px-4 sm:px-2">
        <div
          className="flex gap-1 relative mb-3"
          ref={dropdownRef}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <div
            ref={inputRef}
            className="flex justify-end bg-white items-center border text-[#4b3279] border-blue-500 w-full rounded-full lg:rounded-md h-8 lg:h-10 outline-none cursor-pointer"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <input
              type="text"
              value={selectedOption}
              placeholder={placeholder}
              readOnly
              className="w-full h-full  px-2 rounded-full lg:rounded-md text-[14px] outline-none cursor-pointer"
            />
            <FaAngleDown className="mr-2 text-gray-500" />
          </div>
          {isDropdownOpen && (
            <div
              className="absolute top-full leading-3 z-50 left-0 mt-1 bg-[#fafaf9] border border-gray-300 text-sm rounded-md p-0 "
              style={{ width: dropdownWidth }}
            >
              {renderOptions()}
            </div>
          )}
          <button className="h-10 hidden lg:flex items-center bg-blue-900 text-[14px] sm:text-[16px] text-white px-3 rounded-md">
            Search
          </button>
        </div>
        
        <div className="flex gap-2">
          <div className="border hidden lg:flex gap-2 justify-center items-center h-8 lg:h-10 bg-white rounded-full lg:rounded-md w-full border-blue-500">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-400 px-2 "
            />
            <input
              type="text"
              placeholder="Search Diseases"
              className="outline-none w-full h-full rounded-full lg:rounded-md text-[15px]"
            />
          </div>

          <div className="border lg:hidden flex gap-2 justify-center items-center h-8 lg:h-10 bg-white rounded-full lg:rounded-md w-full border-blue-500">
            <input
              type="text"
              placeholder="Search Diseases"
              className="outline-none px-2 w-full h-full rounded-full lg:rounded-md text-[14px]"
            />
          </div>
          <button className="h-10 hidden lg:flex items-center bg-blue-900 text-white text-[14px] sm:text-[16px] px-3 rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllDiseases;
