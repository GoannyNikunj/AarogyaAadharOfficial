import React from 'react';
import "../css/style.css";

const GiveEveryMonth = () => {
  return (
    <>
      <div className="flex justify-center items-center h-auto mt-3 ">
        <div className="middle-section lg:flex w-[88%] h-auto bg-white rounded-[30px]">
          <div className=" flex-1 flex lg:block flex-col justify-center items-center p-[20px]">
            <h1 className='text-blue-900 font-bold text-3xl lg:text-4xl text-center lg:text-left'>Give Every Month</h1>
            <p className='text-blue-900 text-2xl lg:text-3xl text-center lg:text-left' >To Save Countless Lives</p>
            <p className=' text-sm lg:text-md mt-4 text-blue-900 text-center lg:text-left px-5 sm:px-12 lg:px-0'>GEM or ‘Give Every Month’ is a monthly donation subscription that helps patients in India afford life-saving treatment on time.</p>
            <br />
            <button className='bg-white rounded-full font-semibold text-blue-900 px-4 py-2'>Give Every Month</button>
          </div>
          <div className=" flex-1 grid grid-cols-2 gap-">
            <div className="partition">
                <img src='https://d2aq6dqxahe4ka.cloudfront.net/themes/front/images/homepage-icons/gem-section-percent.png' className=' w-[30%] h-auto'/>
                <h5 className=' lg:text-lg text-[16px] text-blue-900'>100% Transparency</h5>
            </div>
            <div className="partition">
                <img src='https://d2aq6dqxahe4ka.cloudfront.net/themes/front/images/homepage-icons/gem-content_tax.png' className=' w-[30%] h-auto'/>
                <h5 className=' lg:text-lg text-[16px] text-blue-900'>80G Tax Benefits</h5>
            </div>
            <div className="partition">
                <img src='https://d2aq6dqxahe4ka.cloudfront.net/themes/front/images/homepage-icons/gem_content_award.png' className=' w-[30%] h-auto'/>
                <h5 className=' lg:text-lg text-[16px] text-blue-900'>Win Rewards</h5>
            </div>
            <div className="partition">
                <img src='https://d2aq6dqxahe4ka.cloudfront.net/themes/front/images/homepage-icons/gem_content_growth.png' className=' w-[30%] h-auto'/>
                <h5 className=' lg:text-lg text-[16px] text-blue-900'>Track Your Impact</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiveEveryMonth;