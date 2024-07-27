import React from 'react'
import "../css/style.css"

const HowCanCrowdFundingHelp = () => {
  return (
    <div className="container">
      <text className="text-center lg:mb-2 text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">How Can Crowdfunding Help?</text>
      <text className="text-center lg:mb-2 text-blue-500 text-[12px] font-semibold sm:text-[17px]"><br/>
        Crowdfunding can be an effective way to raise funds.<br/>
        It leverages the power of the crowd to gather small amounts of money from a large number of people.
      </text>
      
      <table className="transparent-section border-collapse w-full mt-5">
  <tbody className="grid grid-cols-2 lg:grid-cols-3 gap-0">
    <tr className="border-b border-white">
      <td className="flex justify-center items-center h-32 lg:h-40 p-4">
        <p className="sm:text-lg lg:text-xl font-bold text-center">25000+<br />Patients Funded</p>
      </td>
    </tr>
    <tr className="border-l border-white">
      <td className="flex justify-center items-center h-32 lg:h-40 p-4">
        <p className="sm:text-lg lg:text-xl font-bold text-center">24/7<br />Personalized Expert Assistance</p>
      </td>
    </tr>
    <tr className="lg:border-l border-white">
      <td className="flex justify-center items-center h-32 lg:h-40 p-4">
        <p className="sm:text-lg lg:text-xl font-bold text-center">30 Lakh+<br />Donor Community</p>
      </td>
    </tr>
    <tr className="border-l border-t lg:border-none border-white">
      <td className="flex justify-center items-center h-32 lg:h-40 p-4">
        <p className="sm:text-lg lg:text-xl font-bold text-center">Fast Review of Fundraisers</p>
      </td>
    </tr>
    <tr className="border-t lg:border-l border-white">
      <td className="flex justify-center items-center h-32 lg:h-40 p-4">
        <p className="sm:text-lg lg:text-xl font-bold text-center">Indian Tax Benefits</p>
      </td>
    </tr>
    <tr className="border-t border-l border-white">
      <td className="flex justify-center items-center h-32 lg:h-40 p-4">
        <p className="sm:text-lg lg:text-xl font-bold text-center">Free iOS & Android App</p>
      </td>
    </tr>
  </tbody>
</table>


    </div>
  )
}

export default HowCanCrowdFundingHelp