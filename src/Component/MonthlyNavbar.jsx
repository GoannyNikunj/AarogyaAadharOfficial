import React from 'react';
import logo from '../assets/Images/AarogyaDhan.jpeg';

const MonthlyNavbar = () => {
  return (
    <>
      <div className=" flex bg-white py-2">
        <div className="flex space-x-2 px-8">
          <img src={logo} alt="Logo" className="h-14 w-32" />
        </div>
      </div>
      <div className="flex justify-between items-center py-2 px-4 bg-blue-100">
        <div className="w-1/6 flex justify-center items-center">
         
        </div>
        <div className="w-1/12 flex justify-center items-center">
          <div className='w-10 h-10 flex items-center justify-center' style={{borderRadius:100,backgroundColor:'white'}}>
            <img src='https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/landing_pages/v2/TAX_Benifit.svg' className='w-6'/>
          </div>
        </div>
        <div className="w-3/5 flex items-center">
          <marquee className="text-center">
          Don’t Miss This Monthly Tax Saving Opportunity! Click Here To Be A Monthly Donor.
          </marquee>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          
        </div>
      </div>
    </>
  );
}

export default MonthlyNavbar;

// import React, { useState } from 'react';
// import "../css/style.css";

// const TimelineItem = ({ amount, text, onClick, active }) => (
//   <li
//     className={`srfy__t-item ${active ? 'active' : ''} ml-3`}
//     data-amt={amount}
//     onClick={onClick}
//   >
//     <div className="mx-auto position-relative w-1">
//       <span className="sm-triangle"></span>
//       <div className="srfy__t-item-content font-italic text-center">{text}</div>
//     </div>
//     <div className="srfy__t-item-marker mb-2 mx-auto"></div>
//     <div className="srfy__t-item-text">₹{amount}</div>
//   </li>
// );

// const MonthlySlider = () => {
//   const [activeAmount, setActiveAmount] = useState(null);

//   const handleItemClick = (amount) => {
//     setActiveAmount(amount);
//   };

//   return (
//     <div className="relative flex w-full h-screen overflow-hidden">
//       <div className="relative w-[60%] h-[90%]">
//         <img
//           src="https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/landing_pages/v2/Recurring-Banner-web.webp"
//           alt="Slider"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div
//         className="absolute top-0 right-0 w-[70%] h-[90%] flex flex-col items-start p-4"
//         style={{
//           background:
//             'linear-gradient(269deg, #0033a0, #0066cc 64%, rgba(0,102,204,0.73) 75%, rgba(0,153,255,0))',
//         }}
//       >
//         <div className="ml-[25%] flex flex-col p-4">
//           <span className="text-white text-5xl font-bold mb-2">
//             GEM : <i>Give Every Month</i>
//           </span>
//           <span className="text-white text-4xl mb-2">
//             <i>Subscribe Now to Save Patients, Monthly.</i>
//           </span>
//           <button className="flex items-center bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-slate-200 transition-colors w-[220px]">
//             <i className="fas fa-heart heart-icon mr-2 text-lg"></i>
//             BE A GEM DONOR
//           </button>
//         </div>

//         {/* Timeline Section */}
//         <div className="relative mt-8 flex flex-col w-full">
//           <ul className="list-none p-0">
//             <TimelineItem
//               amount={250}
//               text="Help a critical patient get life-saving treatment, every month"
//               onClick={() => handleItemClick(250)}
//               active={activeAmount === 250}
//             />
//             <TimelineItem
//               amount={500}
//               text="Support patients whose fundraisers are running out of time."
//               onClick={() => handleItemClick(500)}
//               active={activeAmount === 500}
//             />
//             <TimelineItem
//               amount={1000}
//               text="Double your impact by helping twice the number of patients in a month!"
//               onClick={() => handleItemClick(1000)}
//               active={activeAmount === 1000}
//             />
//             <TimelineItem
//               amount={2000}
//               text="Triple your impact by getting critical patients treatment at the earliest."
//               onClick={() => handleItemClick(2000)}
//               active={activeAmount === 2000}
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MonthlySlider;
