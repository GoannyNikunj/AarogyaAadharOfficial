import React, { useState } from 'react'
import TestimonialData from './TestimonialData'

const Testimonial = () => {
const [testimonial,setTestimonial]=useState("Patients")

  return (
    <div className=' '>
      <h4 className=' text-center text-blue-900 text-xl sm:text-2xl md:text-3xl font-bold'>Testimonials</h4>
<div className='flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-8 text-center lg:mt-4'>
   
    <p className="text-center lg:hidden text-blue-500 mb-2 lg:mb-4 ">
              <span className="hover:text-[#4b3279]  text-[12px] font-semibold sm:text-[17px] cursor-pointer" onClick={()=>setTestimonial("Patients")}>Patients</span> <span className="mx-[4px]">|</span>{" "}
              <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer"  onClick={()=>setTestimonial("Healthcare Service Providers")}>
              Healthcare Service Providers
              </span> <br />
              <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer" onClick={()=>setTestimonial("Corporate")}>
              Corporates
              </span> <span className="mx-[4px]">|</span>{" "}
              <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer" onClick={()=>setTestimonial("Users")}>
              Users
              </span> 
            </p>

            <p className="text-center hidden lg:flex justify-center  text-blue-500 mb-2 lg:mb-4 ">
              <span className="hover:text-[#4b3279]  text-[12px] font-semibold sm:text-[17px] cursor-pointer" onClick={()=>setTestimonial("Patients")}>Patients</span> <span className='mx-[6px]'>|</span>{" "}
              <span className="hover:text-[#4b3279] text-[14px] font-semibold sm:text-[17px] cursor-pointer"  onClick={()=>setTestimonial("Healthcare Service Providers")}>
              Healthcare Service Providers
              </span> <span className="mx-[6px]">|</span>{" "}
              <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer" onClick={()=>setTestimonial("Corporate")}>
              Corporates
              </span> <span className="mx-[6px]">|</span>{" "}
              <span className="hover:text-[#4b3279] text-[12px] font-semibold sm:text-[17px] cursor-pointer" onClick={()=>setTestimonial("Users")}>
              Users
              </span> 
            </p>
</div>


{testimonial === "Patients" ? (
    <>
    {/* <h3 className=' text-center'>Patients</h3> */}
  <TestimonialData />
  </>
) : testimonial === "Healthcare Service Providers" ? (
    <>
    {/* <h3 className=' text-center'>Healthcare Service Providers</h3> */}
    <TestimonialData />
    </>
) : testimonial === "Corporate" ? (
    <>
    {/* <h3 className=' text-center'>Companies</h3> */}
    <TestimonialData />
    </>
) : testimonial === "Users" ? (
    <>
    {/* <h3 className=' text-center'>Users</h3> */}
    <TestimonialData />
    </>
) : (
  ""
)}

    </div>
  )
}

export default Testimonial
