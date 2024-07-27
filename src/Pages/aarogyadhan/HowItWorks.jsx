import React from 'react'
import HowItWorks_Navbar from '../../Component/HowItWorks_Navbar'
import HowItWorks_slider from '../../Component/HowItWorks_slider'
import HowItWorksAchievements from '../../Component/HowItWorks_achievments'
import HowItWorks_YouCanChoose from '../../Component/HowItWorks_YouCanChoose'
import RaiseFund from '../../Component/RaiseFund'
import HowItWorks_slider2 from '../../Component/HowItWorks_slider2'
import WhatsCrowdFunding from '../../Component/WhatsCrowdFunding'
import HowDoesCrowdfunding from '../../Component/HowDoesCrowdfunding'
import FundraisingJourney from '../../Component/FundraisingJourney'
import WhyFundraise from '../../Component/WhyFundraise'
import Faq from '../../Component/Faq'
import HowItWorksFooter from '../../Component/HowItWorksFooter'
const HowItWorks = () => {
    return (
        <>
            <HowItWorks_Navbar />
            <HowItWorks_slider />
            <HowItWorksAchievements />
            <HowItWorks_YouCanChoose />
            <RaiseFund />
            <HowItWorks_slider2 />
            <WhatsCrowdFunding />
            <HowDoesCrowdfunding />
            <FundraisingJourney />
            <WhyFundraise />
            <Faq />
            <HowItWorksFooter />
        </>
    )
}

export default HowItWorks
