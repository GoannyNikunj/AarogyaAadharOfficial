import React from 'react';
import "../css/style.css";
import map from "../assets/Images/India-Map-new.png";

const WhatsCrowdFunding = () => {
    return (
        <div className='flex justify-center mt-10 mb-12'>
            <div className='w-4/5 lg:w-4/5'>
                <div className='text-[30px] text-center' style={{marginBottom:80}}>
                    What Is Crowdfunding?
                    <hr className="divider" style={{ marginTop: 20, marginBottom: 30 }} />
                </div>
                <div className='flex flex-wrap md:flex-nowrap justify-between'>
                    <div className='w-full md:w-1/2 p-4'>
                        <p style={{ textAlign: 'left' }}>
                            Crowdfunding is the process of raising funds with the help of people across the country, using donation-based fundraising platforms as the medium. Crowdfunding on ImpactGuru helps fund your emergency medical treatment or chosen cause with free 24*7 support & expert assistance. Anyone can raise funds on donation platforms - from a newborn child, senior citizens to NGOs & more!
                            <br /><br />
                            With donation-based crowdfunding, getting financial help for patients in India is convenient and reliable. Unlike medical loans and insurance, fundraising via online crowdfunding platforms requires no liability to pay back the funds raised. So, all the amount generated can be used to cover the cost of emergency medical treatment.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex justify-center -mt-20'>
                        <img src={map} style={{ width: '100%', maxWidth: 500 }} alt="India Map" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatsCrowdFunding;
