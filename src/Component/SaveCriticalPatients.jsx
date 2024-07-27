import React from 'react';

const SaveCriticalPatients = () => {
    return (
        <div className="w-full  mx-auto flex flex-col md:flex-row mt-10 mb-14 px-12 ">
            <div className="md:w-[60%] mb-6 md:mb-0 text-left">
                <h1 className="text-4xl md:text-4xl font-bold mb-4">
                    Save Critical Patients In India With <i className='text-blue-500'>GEM</i> Subscription
                </h1>
                <p className='font-bold mb-4 text-gray-500'>
                    GEM, a monthly donation subscription, provides urgent financial help to lakhs of patients who wouldn’t have access to life-saving treatment otherwise.
                </p>
                <h6 className='text-blue-600 text-xl font-bold mb-4'>Give Every Month to:</h6>
                <ul className="list-none font-bold text-gray-500 mb-4">
                    <li className="flex items-center mb-2">
                        <img
                            src="https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/landing_pages/v2/Artboard%E2%80%932.png" 
                            className="w-10 h-10 mr-3"
                            alt="Diamond Icon"
                        />
                        You need funds urgently
                    </li>
                    <li className="flex items-center mb-2">
                        <img
                            src="https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/landing_pages/v2/Artboard%E2%80%932.png" 
                            className="w-10 h-10 mr-3"
                            alt="Diamond Icon"
                        />
                        You have limited savings
                    </li>
                    <li className="flex items-center mb-2">
                        <img
                            src="https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/landing_pages/v2/Artboard%E2%80%932.png" 
                            className="w-10 h-10 mr-3"
                            alt="Diamond Icon"
                        />
                        Medical Loans and Insurance are not enough
                    </li>
                </ul>
                <button className="border bg-blue-600 text-white border-blue-700 p-3 w-full md:w-1/2 shadow-lg">
                    <b>GIVE EVERY MONTH</b>
                </button>
            </div>
            
            {/* Image Section with 40% width */}
            <div className="md:w-[40%] flex justify-center items-center">
                <img
                    src="https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/landing_pages/scpi-img.webp"
                    className="w-full"
                    alt="Medical Crowdfunding"
                    style={{borderRadius: 30}}
                />
            </div>
        </div>
    );
}

export default SaveCriticalPatients;
