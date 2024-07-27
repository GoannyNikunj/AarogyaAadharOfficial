import React from 'react';
import "../css/style.css"
const HowItWorksAchievements = () => {
  return (
    <div className=" content-container w-11/12 mx-auto rounded-lg shadow-md flex justify-around items-center ">
      <div className="flex-1 m-2 p-5 rounded-lg font-bold">
        <h3 className="text-2xl">30 Lac+</h3>
        <p>Generous Donors</p>
      </div>
      <div className="flex-1 m-2 p-5 rounded-lg font-bold">
        <h3 className="text-2xl">2 Lac+</h3>
        <p>Fundraisers Created Successfully</p>
      </div>
      <div className="flex-1 m-2 p-5 rounded-lg font-bold">
        <h3 className="text-2xl">Fastest ₹1 Crore</h3>
        <p>Raised In 24 Hrs!</p>
      </div>
    </div>
  );
}

export default HowItWorksAchievements;
