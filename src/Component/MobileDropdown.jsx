import React, { useState, useRef, useEffect } from 'react';

const MobileDropdown = ({ label, options,setOpenDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
        {/* <hr /> */}
      <button
        className={`inline-flex px-2 sm:px-4 w-full h-8 text-[#2e1065] rounded-md py-1 text-[12px] sm:text-sm font-medium`}
        onClick={toggleDropdown}
      >
        {label}
        <svg
          className={`ml-0 -mr-1 h-5 w-5 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <hr />
      {isOpen && (
        <div
          className="absolute z-50 mt-0 mx-0 left-0 right-0 rounded-md shadow-lg bg-gray-100 w-auto ring-1 ring-black ring-opacity-5 max-h-[25rem] overflow-y-auto"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-2 text-[12px] text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                role="menuitem"
                onClick={() => {setIsOpen(false)
                  setOpenDropdown(false)
                }}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
