import React from 'react'

const TopFundraisersHeading = () => {
  return (
    <div className=' mt-16 sm:mt-20 lg:mt-16 xl:mt-20'>
      <h2 className='text-center lg:mb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 py-5'>Top Fundraisers</h2>
      <div className=' bg-blue-100 py-2  md:mx-14 rounded-md flex gap-5 sm:gap-10 md:gap-16 justify-center items-center mt-5'>
        <div>
            <h3 className='text-xl lg:text-2xl xl:text-2xl text-center font-semibold  text-blue-900'>30+ Lakh</h3>
            <p className='text-center lg:mb-2 text-blue-500 text-[12px] font-semibold sm:text-[17px]'>Donor <br />Community</p>
        </div>
        <div>
            <h3 className='text-xl lg:text-2xl xl:text-2xl text-center font-semibold  text-blue-900'>25000+</h3>
            <p className='text-center lg:mb-2 text-blue-500 text-[12px] font-semibold sm:text-[17px]'>Patients <br />Funded</p>
        </div>
        <div>
            <h3 className='text-xl lg:text-2xl xl:text-2xl text-center font-semibold  text-blue-900'>₹1 Cr</h3>
            <p className='text-center lg:mb-2 text-blue-500 text-[12px] font-semibold sm:text-[17px]'>Raised <br />In 24 Hrs!</p>
        </div>
      </div>
    </div>
  )
}

export default TopFundraisersHeading
