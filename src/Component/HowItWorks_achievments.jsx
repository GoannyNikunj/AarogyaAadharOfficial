import React from 'react';
import "../css/style.css"

const HowItWorksAchievements = () => {
  return (

    <div className='px-20'>
      <div className="lg:flex justify-around  px-10  bg-blue-500 text-white py-6" style={{ borderRadius: 5 }}>
        <div className="col-span-4  rounded-lg font-bold">
          <h3 className="text-2xl lg:text-3xl">30 Lac+</h3>
          <p>Generous Donors</p>
        </div>
        <div className="col-span-4 rounded-lg font-bold ">
          <h3 className="text-2xl lg:text-3xl">2 Lac+</h3>
          <p>Fundraisers Created Successfully</p>
        </div>
        <div className="col-span-4 rounded-lg font-bold ">
          <h3 className="text-2xl lg:text-3xl">Fastest ₹1 Crore</h3>
          <p>Raised In 24 Hrs!</p>
        </div>

      </div>
    </div>
  );
}

export default HowItWorksAchievements;
