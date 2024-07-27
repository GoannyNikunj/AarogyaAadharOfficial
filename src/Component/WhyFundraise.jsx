import React, { useState } from 'react';

const WhyFundraise = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className='mb-16'>
            <div className='text-2xl text-center mb-3'>
                Why Fundraise With ImpactGuru?
            </div>
            <hr className='divider mb-8' />

            <div className='relative px-4 md:px-10'>
                <div className={`flex gap-4 justify-center items-start transition-all duration-300 ease-in-out ${showMore ? 'h-auto' : 'h-[350px] overflow-hidden'}`}>
                    <div className='flex flex-col gap-4'>
                        <div className='w-[240px] h-[236px] flex flex-col justify-center items-center bg-slate-200'>
                            <img/>
                            <h1>0%</h1>
                            <p>Platform Fee</p>
                        </div>
                        <div className='w-[240px] h-[236px] flex flex-col justify-center items-center bg-slate-200'>
                        <img/>
                            <h1>24*7</h1>
                            <p>Personalized Expert Assistance</p>
                        </div>
                        <div className='w-[240px] h-[236px] flex flex-col justify-center items-center bg-slate-200'>
                        <img/>
                            <h1>Fast</h1>
                            <p>Review of your fundraiser</p>
                        </div>
                        <div className='w-[240px] h-[236px] flex flex-col justify-center items-center bg-slate-200'>
                        <img/>
                            <h1>Robust Due Diligence</h1>
                            <p>To Ensure Trust & Safety
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='w-[240px] h-[311px]  flex flex-col justify-center items-center bg-slate-200'>
                        <img/>
                            <h1>Free Fundraising Mobile App</h1>
                            <p>For iOS and Android</p>
                        </div>
                        <div className='w-[240px] h-[311px]  flex flex-col justify-center items-center bg-slate-200'>
                        <img/>
                            <h1>All Payments Accepted</h1>
                            <p> Google Pay, Paytm, UPI, Net Banking & Wallets Accepted</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='w-[240px] h-[236px] flex flex-col justify-center items-center bg-slate-200'>
                        <img/>
                            <h1>30+ Lakh</h1>
                            <p>Donor Community</p>
                        </div>
                        <div className='w-[240px] h-[236px] flex flex-col justify-center items-center bg-slate-200'>
                        <img/>
                            <h1>25000+</h1>
                            <p>Patients Funded</p>
                        </div>
                        <div className='w-[240px] h-[236px] flex flex-col justify-center items-center bg-slate-200'>
                        <img/>
                            <h1>User-Friendly Dashboard</h1>
                            <p>to Raise Maximum Funds</p>
                        </div>
                        <div className='w-[240px] h-[236px] flex flex-col justify-center items-center bg-slate-200'>
                        <img/>
                            <h1>Premium & Easy-To-Use</h1>
                            <p>Fundraising Tools</p>
                        </div>
                    </div>
                </div>
                {!showMore && (
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-50 to-white/10 pointer-events-none"></div>
                )}
            </div>

            <div className='text-center'>
                <p onClick={() => setShowMore(!showMore)} className='underline text-gray-800'> {showMore ? 'Click to view less' : 'Click to view all features'}</p>
            </div>
            <div className='text-center p-4'>
                <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded" style={{cursor:'pointer'}}>
                    START A FREE FUNDRAISER
                </button>
            </div>
        </div>
    );
}

export default WhyFundraise;
