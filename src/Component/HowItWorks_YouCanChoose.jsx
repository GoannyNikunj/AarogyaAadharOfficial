import React from 'react';

const HowItWorks_YouCanChoose = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row mt-10 mb-14 px-4 md:px-10">
      <div className="md:w-1/2 mb-6 md:mb-0 text-left">
      <h1 className="text-4xl md:text-4xl font-bold mb-4">
          You can Choose<br />
          Medical Fundraising with<br /> ImpactGuru if
        </h1>
        <ul className="list-disc ml-8 md:ml-10 mb-4">
          <li>You need funds urgently</li>
          <li>You have limited savings</li>
          <li>Medical Loans and Insurance are not enough</li>
        </ul>
        <p className="mb-6">
          Get financial help for medical treatment by raising funds
          with the support of donors and well-wishers online.
        </p>
        <button className="border border-blue-500 p-3 w-1/2 shadow-lg">
          <b>GET A CALLBACK</b>
        </button>
      </div>
      <div className="md:w-1/2 flex d:justify-end -mt-12">
        <img
          src="https://d2aq6dqxahe4ka.cloudfront.net/themes/neumorphism/images/medical-crowdfunding/webp/trial-croped.webp"
          className="w-4/5 md:w-full  md:mt-0"
          alt="Medical Crowdfunding"
        />
      </div>
    </div>
  );
}

export default HowItWorks_YouCanChoose;
