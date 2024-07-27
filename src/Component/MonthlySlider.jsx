import React from 'react'
import "../css/style.css"
const MonthlySlider = () => {
    return (
        <div className="relative flex w-full h-screen overflow-hidden">
            <div className="relative w-[60%] h-[90%]">
                <img
                    src="https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/landing_pages/v2/Recurring-Banner-web.webp"
                    alt="Slider"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute top-0 right-0 w-[70%] h-[90%] flex items-start p-4"
                style={{
                    background: 'linear-gradient(269deg, #0033a0, #0066cc 64%, rgba(0,102,204,0.73) 75%, rgba(0,153,255,0))'
                }}>
                <div className="ml-[25%] flex flex-col p-4">
                    <span className="text-white text-5xl font-bold mb-2">GEM : <i>Give Every Month</i></span>
                    <span className="text-white text-4xl  mb-2"><i>Subscribe Now to Save Patients, Monthly.</i></span>
                    <button class="flex items-center bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-slate-200 transition-colors w-[220px]">
                        <i class="fas fa-heart heart-icon mr-2 text-lg"></i>
                        BE A GEM DONOR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MonthlySlider
