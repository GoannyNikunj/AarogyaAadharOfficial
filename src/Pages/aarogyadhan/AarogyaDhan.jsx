import React from 'react'
import AarogyaDhanNavbar from '../../Component/AarogyaDhanNavbar'
import GiveEveryMonth from '../../Component/GiveEveryMonth'
import CrowdFundingCategories from '../../Component/CrowdFundingCategories'
import Aarogyadhan_slider from '../../Component/Aarogyadhan_slider'
import TopFundraisers from '../../Component/TopFundraisers'
import ImpactFooter from '../../Component/ImpactFooter'
import HowCanCrowdFundingHelp from '../../Component/HowCanCrowdFundingHelp'

const AarogyaDhan = () => {
  return (
    <div>
      <AarogyaDhanNavbar/>
      <Aarogyadhan_slider/>

      <GiveEveryMonth/> 
      <CrowdFundingCategories/>
      <HowCanCrowdFundingHelp/>

       <TopFundraisers/>
      <ImpactFooter/>
    </div>
  )
}

export default AarogyaDhan

//Responsive Pending
// 1 GiveEveryMonth
// 2 HowCanCrowdFundingHelp