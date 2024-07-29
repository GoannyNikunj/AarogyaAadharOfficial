import React from 'react'
import icon from '../assets/Images/DonateMonthly/Icon.png'
import icon03 from '../assets/Images/DonateMonthly/Icon03.png'
import icon04 from '../assets/Images/DonateMonthly/Icon04.png'
const WhatMakesGemDiff = () => {
    return (
        <>
            <div className='text-2xl text-center mb-5'>
                What Makes GEM Subscription Different?
            </div>
            <hr className='divider mb-24' />
            <div className='grid grid-cols-12 px-36'>
                <div className='col-span-6  bg-white rounded-lg mb-16 flex m-auto'>
                    <div>
                        <img src={icon}   className='w-[100px] p-3'/>
                    </div>
                    <div className='p-3 flex flex-col '>
                        <h1 className='text-blue-600 font-bold text-[18px]'>Receive tokens of gratitude</h1>
                        <p className='text-[18px]'>like letters, videos from patients you helped.</p>
                    </div>
                </div>
                <div className='col-12 md:col-span-6   bg-white rounded-lg mb-16 flex m-auto'>
                    <div>
                        <img src={icon03} className='w-[100px] p-3' />
                    </div>
                    <div className='p-3 flex flex-col '>
                        <h1 className='text-blue-600 font-bold text-[18px]'>Join an exclusive community</h1>
                        <p className='text-[18px]'>of changemakers like you.</p>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col justify-center items-center px-36'>
                <div className='col-span-6  bg-white rounded-lg mb-20 flex'>
                    <div>
                        <img src={icon04} className='w-[100px] p-3' />
                    </div>
                    <div className='p-3 flex flex-col '>
                        <h1 className='text-blue-600 font-bold text-[18px]'>Unlock rewards</h1>
                        <p className='text-[18px]'>like insurance, vouchers & the smiles of people you help!</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WhatMakesGemDiff
