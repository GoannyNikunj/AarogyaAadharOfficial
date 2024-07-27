import React from 'react';
import { FaHospital } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";  
import specialist from '../assets/Images/specialist.png'
import { FaUserDoctor } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
const Connections = () => {

  return (
    <div>
      <section className="flex  justify-evenly mb-2 lg:py-2">
        <div className="hidden lg:flex flex-row justify-center items-center gap-3 ">
        <FaHospital  className='text-blue-900 border border-blue-00 p-1 rounded-[8px] bg-[#c9e0f1] h-14 w-14'/>
        <div>
          <h2 className="text-blue-600 text-left text-md sm:text-xl md:text-3xl mb-1 font-bold ">+5.5k</h2>
          <p className="text-center text-blue-900 font-semibold text-[10px] sm:text-[14px] ">HOSPITALS</p>
        </div>
        </div>
        <div className="flex lg:hidden flex-col">
          <h2 className="text-blue-600 text-center text-xl sm:text-2xl md:text-3xl font-bold ">+5.5k</h2>
          <p className="text-center text-blue-500 text-[11px] font-semibold leading-4 sm:text-[15px]">Healthcare <br/> Service Provider's</p>
        </div>

        <div className="hidden lg:flex flex-row justify-center items-center gap-3">
        <FaBed  className='text-blue-900 border border-blue-00 p-1 rounded-[8px] bg-[#c9e0f1] h-14 w-14'/>
        <div>
          <h2 className="text-blue-600 text-left text-md sm:text-xl md:text-3xl mb-1 font-bold ">+50k</h2>
          <p className="text-center text-blue-900 font-semibold text-[10px] sm:text-[14px] ">PATIENTS</p>
        </div>
        </div>
        <div  className="flex lg:hidden flex-col">
          <h2 className="text-blue-600 text-center text-xl sm:text-2xl md:text-3xl font-bold ">+50k</h2>
          <p className="text-center text-blue-500 text-[11px] font-semibold leading-4 sm:text-[15px]">Happy <br/> Patient's</p>
        </div>

        <div className="hidden lg:flex flex-row justify-center items-center gap-3">
        <FaCity className='text-blue-900 border border-blue-00 p-1 rounded-[8px] bg-[#c9e0f1] h-14 w-14'/>
        <div>
          <h2 className="text-blue-600 text-left text-md sm:text-xl md:text-3xl mb-1 font-bold ">+20</h2>
          <p className="text-center text-blue-900 font-semibold text-[10px] sm:text-[14px] ">CITIES</p>
        </div>
        </div>
        <div className="flex lg:hidden flex-col">
          <h2 className="text-blue-600 text-center text-xl sm:text-2xl md:text-3xl font-bold ">+20</h2>
          <p className="text-center text-blue-500 text-[11px] font-semibold leading-4 sm:text-[15px]">Covered <br/> Cities</p>
        </div>

        <div className="hidden lg:flex flex-row justify-center items-center gap-3">
          {/* <img src={specialist} alt="" className='h-16 w-16'/> */}
          <FaUserDoctor className='text-blue-900 border border-blue-00 p-1 rounded-[8px] bg-[#c9e0f1] h-14 w-14'/>
          <div>
          <h2 className="text-blue-600 text-left text-md sm:text-xl md:text-3xl mb-1 font-bold ">+45</h2>
          <p className="text-center text-blue-900 font-semibold text-[10px] sm:text-[14px] ">SPECIALIST</p>
        </div>
        </div>
        <div className="flex lg:hidden flex-col">
          <h2 className="text-blue-600 text-center text-xl sm:text-2xl md:text-3xl font-bold ">+45</h2>
          <p className="text-center text-blue-500 text-[11px] font-semibold leading-4 sm:text-[15px]">Doctor's <br/> Specialist</p>
        </div>

        <div className='hidden lg:flex flex-row justify-center items-center gap-3'>
        <IoIosPeople className='text-blue-900 border border-blue-00 p-1 rounded-[8px] bg-[#c9e0f1] h-14 w-14'/>
        <div>
          <h2 className="text-blue-600 text-left text-md sm:text-xl md:text-3xl mb-1 font-bold ">+50</h2>
          <p className="text-center text-blue-900 font-semibold text-[10px] sm:text-[14px] ">TEAM MEMBERS </p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Connections;
