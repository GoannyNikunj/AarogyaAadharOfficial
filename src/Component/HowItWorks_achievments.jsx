import React from 'react';
import "../css/style.css"
const HowItWorksAchievements = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around py-10 mx-5 sm:mx-14 rounded-2xl px-16 bg-blue-200">
      <div className="">
        <h3 className="text-xl sm:text-3xl font-semibold text-blue-900">30 Lac+</h3>
        <p className=' font-medium text-blue-900'>Generous Donors</p>
      </div>
      <div className="">
        <h3 className="text-xl sm:text-3xl font-semibold mt-5 lg:mt-0 text-blue-900">2 Lac+</h3>
        <p className=' font-medium text-blue-900'>Fundraisers Created Successfully</p>
      </div>
      <div className="">
        <h3 className="text-xl sm:text-3xl font-semibold mt-5 lg:mt-0 text-blue-900">Fastest ₹1 Crore</h3>
        <p className=' font-medium text-blue-900'>Raised In 24 Hrs!</p>
      </div>
    </div>
  );
}

export default HowItWorksAchievements;
