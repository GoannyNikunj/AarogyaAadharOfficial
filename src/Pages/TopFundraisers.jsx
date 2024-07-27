import React from 'react'
import TopFundraisersNavbar from '../Component/TopFundraisersNavbar'
import TopFundraisersHeading from '../Component/TopFundraisersHeading'
import TopFundraisersData from '../Component/TopFundraisersData'
import bgimage from '../assets/Images/Icon Background.jpg'
import ImpactFooter from '../Component/ImpactFooter'


const TopFundraisers = () => {
  return (
    <div style={{ backgroundImage: `url(${bgimage})`, height: '100%', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundAttachment: 'fixed' }}>
      <TopFundraisersNavbar/>
      <TopFundraisersHeading/>
      <TopFundraisersData/>
      <ImpactFooter/>
    </div>
  )
}

export default TopFundraisers
