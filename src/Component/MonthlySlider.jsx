import React, { useState, useEffect } from 'react';
import "../css/style.css";

const MonthlySlider = () => {
    // State to track the active dot
    const [activeDot, setActiveDot] = useState(0);

    // Effect to cycle through dots every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDot((prev) => (prev + 1) % 4); // Assuming there are 4 dots
        }, 3000); // Change this value to control the interval

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

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
                <div className="ml-[25%] flex flex-col p-4 relative">
                    <span className="text-white text-5xl font-bold mb-2 py-3">GEM : <i>Give Every Month</i></span>
                    <span className="text-white text-4xl mb-2"><i>Subscribe Now to Save Patients, Monthly.</i></span>

                    <div className='py-16'>
                        {/* Dotted Line with Dots and Labels */}
                        <div className="relative w-[70%] border-t-2 border-dotted border-white mt-2 mb-8">
                            {/* Dot 1 */}
                            <div
                                className={`absolute ${activeDot === 0 ? 'w-6 h-6' : 'w-2 h-2'} rounded-full ${activeDot === 0 ? 'bg-white' : 'bg-blue-900'}`}
                                style={{
                                    left: '10%',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                {activeDot === 0 && (
                                    <div
                                        className={`absolute rounded-full bg-blue-900 ${activeDot === 0 ? 'w-2 h-2' : 'w-0 h-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                                    />
                                )}
                                <div className={`absolute -top-12 left-[-20%] bg-white text-black p-2 rounded-md ${activeDot === 0 ? 'block' : 'hidden'} w-[270px] text-xs`}>
                                    Help a critical patient get life-saving treatment, every month
                                </div>
                            </div>

                            {/* Dot 2 */}
                            <div
                                className={`absolute ${activeDot === 1 ? 'w-6 h-6' : 'w-2 h-2'} rounded-full ${activeDot === 1 ? 'bg-white' : 'bg-blue-900'}`}
                                style={{
                                    left: '35%',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                {activeDot === 1 && (
                                    <div
                                        className={`absolute rounded-full bg-blue-900 ${activeDot === 1 ? 'w-2 h-2' : 'w-0 h-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                                    />
                                )}
                                <div className={`absolute -top-12 left-[-120px] bg-white text-black p-2 rounded-md ${activeDot === 1 ? 'block' : 'hidden'} w-[270px] text-xs`}>
                                    Support patients whose fundraisers are running out of time.
                                </div>
                            </div>

                            {/* Dot 3 */}
                            <div
                                className={`absolute ${activeDot === 2 ? 'w-6 h-6' : 'w-2 h-2'} rounded-full ${activeDot === 2 ? 'bg-white' : 'bg-blue-900'}`}
                                style={{
                                    left: '60%',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                {activeDot === 2 && (
                                    <div
                                        className={`absolute rounded-full bg-blue-900 ${activeDot === 2 ? 'w-2 h-2' : 'w-0 h-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                                    />
                                )}
                                <div className={`absolute -top-12 left-[-120px] bg-white text-black p-2 rounded-md ${activeDot === 2 ? 'block' : 'hidden'} w-[270px] text-xs`}>
                                    Double your impact by helping twice the number of patients in a month!
                                </div>
                            </div>

                            {/* Dot 4 */}
                            <div
                                className={`absolute ${activeDot === 3 ? 'w-6 h-6' : 'w-2 h-2'} rounded-full ${activeDot === 3 ? 'bg-white' : 'bg-blue-900'}`}
                                style={{
                                    left: '85%',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                {activeDot === 3 && (
                                    <div
                                        className={`absolute rounded-full bg-blue-900 ${activeDot === 3 ? 'w-2 h-2' : 'w-0 h-0'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                                    />
                                )}
                                <div className={`absolute -top-12 left-[-200px] bg-white text-black p-2 rounded-md ${activeDot === 3 ? 'block' : 'hidden'} w-[270px] text-xs`}>
                                    Triple your impact by getting critical patients treatment at the earliest.
                                </div>
                            </div>

                            {/* Labels */}
                            <span className="absolute text-white text-sm top-[12px] left-[10%] transform translate-x-[-50%]">₹250</span>
                            <span className="absolute text-white text-sm top-[12px] left-[35%] transform translate-x-[-50%]">₹500</span>
                            <span className="absolute text-white text-sm top-[12px] left-[60%] transform translate-x-[-50%]">₹1000</span>
                            <span className="absolute text-white text-sm top-[12px] left-[85%] transform translate-x-[-50%]">₹2000</span>
                        </div>
                    </div>

                    <button className="flex items-center bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-slate-200 transition-colors w-[220px]">
                        <i className="fas fa-heart heart-icon mr-2 text-lg"></i>
                        BE A GEM DONOR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MonthlySlider;
