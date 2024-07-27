// import React, { useState, useRef, useEffect } from 'react';


// const Dropdown = ({ label, options }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownWidth, setDropdownWidth] = useState(140); // Initial minimum width set to 140px
//   const [dropdownPosition, setDropdownPosition] = useState('left');
//   const dropdownRef = useRef(null);
//   let timeoutId;

//   const openDropdown = () => {
//     clearTimeout(timeoutId);
//     setIsOpen(true);
//   };

//   const closeDropdown = () => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       setIsOpen(false);
//     }, 220);
//   };

//   useEffect(() => {
//     const calculateDropdownWidth = () => {
//       let columnWidth = 220; // Default column width
//       let maxPerColumn = 15; // Default max options per column
//       let calculatedWidth = columnWidth; // Default width calculation

//       // Set width for specific labels or JSX elements
//       if (typeof label === 'string' && (label === 'Registration' || label === 'Login' || label === 'Language')) {
//         calculatedWidth = 140;
//       } else if (label === 'Hospitals') {
//         columnWidth = 220;
//         maxPerColumn = 9;
//       } else if (label === 'Expert Doctors') {
//         columnWidth = 220;
//         maxPerColumn = 15;
//       } else if (React.isValidElement(label)) {
//         calculatedWidth = 140; // Set width to 140px for JSX element labels
//       }

//       const columns = Math.ceil(options.length / maxPerColumn);
//       setDropdownWidth(Math.max(columns * calculatedWidth, 140));
//     };

//     const handleResize = () => {
//       if (dropdownRef.current) {
//         const { right, left } = dropdownRef.current.getBoundingClientRect();
//         if (right > window.innerWidth) {
//           setDropdownPosition('right');
//         } else if (left < 0) {
//           setDropdownPosition('left');
//         }
//       }
//     };

//     calculateDropdownWidth();
//     window.addEventListener('resize', handleResize);
//     handleResize(); // Initial check

//     return () => window.removeEventListener('resize', handleResize);
//   }, [options, label]);

//   const splitOptions = (options, maxPerColumn) => {
//     const columns = [];
//     for (let i = 0; i < options.length; i += maxPerColumn) {
//       columns.push(options.slice(i, i + maxPerColumn));
//     }
//     return columns;
//   };

//   const maxPerColumn = label === 'Hospitals' ? 9 : (label === 'Expert Doctors' ? 15 : 15); // Specific max per column for Hospitals and Expert Doctors
//   const optionColumns = splitOptions(options, maxPerColumn);

//   return (
//     <div className="relative inline-block text-left">
//       <button
//         className={`inline-flex justify-center w-full h-8 hover:bg-blue-400 hover:text-white text-[#4b3279] rounded-md px-1 sm:px-2 py-1 text-[12px] lg:px-0 xl:px-[6px] sm:text-sm lg:text-[12px] xl:text-[14px] font-medium`}
//         onMouseEnter={openDropdown}
//         onMouseLeave={closeDropdown}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {label}
//         {/* <svg
//           className={`xl:ml-[1px] -mr- h-5 w-5 ${isOpen ? 'transform rotate-180' : ''}`}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
//             clipRule="evenodd"
//           />
//         </svg> */}
//       </button>
//       {isOpen && (
//         // <div
//         //   ref={dropdownRef}
//         //   className={`absolute z-10 mt-2 bg-[#fafaf9] rounded-md shadow-lg ${dropdownPosition === 'right' ? 'right-0' : 'left-0'}`}
//         //   onMouseEnter={openDropdown}
//         //   onMouseLeave={closeDropdown}
//         //   style={{ width: `${dropdownWidth}px` }}
//         // >
//         //   <div className="py-1 flex flex-wrap" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//         //     {optionColumns.map((column, columnIndex) => (
//         //       <div 
//         //         key={columnIndex} 
//         //         className="flex flex-col flex-1 min-w-0" 
//         //         style={{ 
//         //           width: `${dropdownWidth / optionColumns.length}px`, 
//         //           minWidth: `${label === 'Registration' || label === 'Login' || label === 'Language' || React.isValidElement(label) ? 140 : 220}px`, 
//         //           borderRight: columnIndex < optionColumns.length - 1 ? '1px solid #e5e7eb' : 'none' 
//         //         }}
//         //       >
//         //         {column.map((option, index) => (
//         //           <a
//         //             key={index} 
//         //             href="#"
//         //             className="block pl-2 py-[1px] mb-1 text-gray-700 hover:bg-gray-100 whitespace-nowrap text-[12px]"
//         //             role="menuitem"
//         //             onClick={closeDropdown}
//         //           >
//         //             {option}
//         //           </a>
//         //         ))}
//         //       </div>
//         //     ))}
//         //   </div>
//         // </div>
        
//         <div
//   ref={dropdownRef}
//   className={`absolute z-10 mt-2 bg-white bg-opacity-95 rounded-md shadow-lg ${dropdownPosition === 'right' ? 'right-0' : 'left-0'}`}
//   onMouseEnter={openDropdown}
//   onMouseLeave={closeDropdown}
//   style={{ width: `${dropdownWidth}px` }}
// >

// <div className="absolute inset-x-0 top-[-10px] flex justify-center">
//     <svg width="20" height="10" viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
//       <polygon points="10,0 20,10 0,10" fill="#FFFFFF"/>
//     </svg>
//   </div>
//   <div className="py-1 flex flex-wrap" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//     {optionColumns.map((column, columnIndex) => (
//       <div 
//         key={columnIndex} 
//         className="flex flex-col flex-1 min-w-0" 
//         style={{ 
//           width: `${dropdownWidth / optionColumns.length}px`, 
//           minWidth: `${label === 'Registration' || label === 'Login' || label === 'Language' || React.isValidElement(label) ? 140 : 220}px`, 
//           borderRight: columnIndex < optionColumns.length - 1 ? '1px solid #e5e7eb' : 'none' 
//         }}
//       >
//         {column.map((option, index) => (
//           <a
//             key={index} 
//             href="#"
//             className="block pl-2 py-[1px] mb-1 text-blue-950 font-semibold hover:bg-gray-100 whitespace-nowrap text-[12px]"
//             role="menuitem"
//             onClick={closeDropdown}
//           >
//             {option}
//           </a>
//         ))}
//       </div>
//     ))}
//   </div>
// </div>



//       )}
//     </div>
//   );
// };

// export default Dropdown;


import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ label, options,textcolor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(140); // Initial minimum width set to 140px
  const [dropdownPosition, setDropdownPosition] = useState('left');
  const dropdownRef = useRef(null);
  let timeoutId;

  const openDropdown = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const closeDropdown = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 220);
  };

  useEffect(() => {
    const calculateDropdownWidth = () => {
      let columnWidth = 220; // Default column width
      let maxPerColumn = 15; // Default max options per column
      let calculatedWidth = columnWidth; // Default width calculation

      // Set width for specific labels or JSX elements
      if (typeof label === 'string' && (label === 'Registration' || label === 'Login' || label === 'Language')) {
        calculatedWidth = 140;
      } else if (label === 'Hospitals') {
        columnWidth = 220;
        maxPerColumn = 9;
      } else if (label === 'Expert Doctors') {
        columnWidth = 220;
        maxPerColumn = 15;
      } else if (React.isValidElement(label)) {
        calculatedWidth = 140; // Set width to 140px for JSX element labels
      }

      const columns = Math.ceil(options.length / maxPerColumn);
      setDropdownWidth(Math.max(columns * calculatedWidth, 140));
    };

    const handleResize = () => {
      if (dropdownRef.current) {
        const { right, left } = dropdownRef.current.getBoundingClientRect();
        if (right > window.innerWidth) {
          setDropdownPosition('right');
        } else if (left < 0) {
          setDropdownPosition('left');
        }
      }
    };

    calculateDropdownWidth();
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, [options, label]);

  const splitOptions = (options, maxPerColumn) => {
    const columns = [];
    for (let i = 0; i < options.length; i += maxPerColumn) {
      columns.push(options.slice(i, i + maxPerColumn));
    }
    return columns;
  };

  const maxPerColumn = label === 'Hospitals' ? 9 : (label === 'Expert Doctors' ? 15 : 15); // Specific max per column for Hospitals and Expert Doctors
  const optionColumns = splitOptions(options, maxPerColumn);

  return (
    <div className="relative inline-block text-left">
      <button
        className={`relative inline-flex justify-center w-full font-medium h-8 hover:bg-blue-400 hover:text-white rounded-md px-1 sm:px-2 py-1 text-[12px] lg:px-0 xl:px-[6px] sm:text-sm lg:text-[12px] xl:text-[14px] ${textcolor}`}
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        onClick={() => setIsOpen(!isOpen)}
      
      >
        {label}
        <svg
          className={`absolute inset-x-0 opacity-95 mx-auto bottom-[-10px] w-5 h-5 ${isOpen ? 'block' : 'hidden'}`}
          viewBox="0 0 20 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="10,0 20,10 0,10" fill="#FFFFFF"/>
        </svg>
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute z-10 mt-[4px] bg-white bg-opacity-95 rounded-md shadow-lg ${dropdownPosition === 'right' ? 'right-0' : 'left-0'}`}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          style={{ width: `${dropdownWidth}px` }}
        >
          <div className="py-1 flex flex-wrap" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {optionColumns.map((column, columnIndex) => (
              <div 
                key={columnIndex} 
                className="flex flex-col flex-1 min-w-0" 
                style={{ 
                  width: `${dropdownWidth / optionColumns.length}px`, 
                  minWidth: `${label === 'Registration' || label === 'Login' || label === 'Language' || React.isValidElement(label) ? 140 : 220}px`, 
                  borderRight: columnIndex < optionColumns.length - 1 ? '1px solid #e5e7eb' : 'none' 
                }}
              >
                {column.map((option, index) => (
                  <a
                    key={index} 
                    href="#"
                    className="block pl-2 py-[1px] mb-1 text-blue-950 font-medium hover:bg-gray-100 whitespace-nowrap text-[12px]"
                    role="menuitem"
                    onClick={closeDropdown}
                  >
                    {option}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
