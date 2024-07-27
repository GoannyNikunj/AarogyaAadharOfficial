import React from 'react';
import "../css/style.css";

const Aarogyadhan_slider = () => {
    return (
        <div className="slider">
            <div className=" flex justify-center sm:block">
                <div className="label mt-10 lg:mt-36 " style={{paddingLeft:40}}>
                    <h1 className='text-blue-900 text-center sm:text-left font-bold text-[20px] sm:text-[35px] md:text-[40px] leading-8 sm:leading-[50px] lg:leading-[60px] lg:text-[45px] xl:text-[50px]' >Need Funds For Your <br/>Medical Treatment</h1> 
                    <p className='text-center text-blue-500 font-semibold text-[15px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]'>Dont worry wou've come to the right platform</p>
                    <hr/>
                    <br/>
                    <p className='text-center text-blue-500 font-semibold text-[15px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]'>With <b className='text-blue-900 font-bold'>0%*</b> platform fee, you can raise funds too!</p>
                    <br/>
                    <button className='btn help-button rounded-full py-[5px] px-5 sm:p-[10px] md:p-[15px] bg-blue-600 border-blue-700' >Start A Free Fundraiser</button>
                </div>
                <img src="https://st4.depositphotos.com/16122460/28631/i/450/depositphotos_286315472-stock-photo-woman-giving-red-heart-to.jpg" alt="Image" className=' h-80 lg:h-[85vh]' />
            </div>
        </div>
    );
}

export default Aarogyadhan_slider;