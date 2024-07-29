import React from 'react';

const HowItWorks_YouCanChoose = () => {
  return (
    <div className=" grid grid-cols-12 px-5 sm:px-14 mt-5 lg:mt-0"> 
      <div className="col-span-12 lg:col-span-9 flex flex-col justify-center">
      <h1 className="text-2xl lg:text-4xl font-semibold lg:font-semibold text-blue-900 mb-4">
          You can Choose Medical Fundraising with ImpactGuru if
        </h1>
        <ul className="list-disc text-blue-900 font-medium lg:font-semibold ml-6 mb-4">
          <li>You need funds urgently</li>
          <li>You have limited savings</li>
          <li>Medical Loans and Insurance are not enough</li>
        </ul>
        <p className="mb-6 text-blue-900 font-medium lg:font-semibold">
          Get financial help for medical treatment by raising funds
          with the support of donors and well-wishers online.
        </p>
        <div className=' w-auto'>
        <button className="border border-blue-500 rounded-full p-2 px-5 lg:px-10 shadow-lg font-bold bg-blue-600 text-white">GET A CALLBACK</button>

        </div>
      </div>
      <div className="col-span-3 hidden object-contain lg:flex">
        <img
          src="https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/medical-crowdfunding/webp/trial-croped.webp"
          className="h-full w-full "
          alt="Medical Crowdfunding"
        />
      </div>
    </div>
  );
}

export default HowItWorks_YouCanChoose;
