import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../assets/Images/AarogyaDhan.jpeg"
import RapidSSL from '../assets/Images/impactFooterIcons/RapidSSL.png'
import Visa from '../assets/Images/impactFooterIcons/Visa.png'
import MasterCard from '../assets/Images/impactFooterIcons/MasterCard.png'
import AmericanExpress from '../assets/Images/impactFooterIcons/AmericanExpress.png'
import Paytm from '../assets/Images/impactFooterIcons/Paytm.jpeg'
import UPI from '../assets/Images/impactFooterIcons/UPI.png'
import RTGS from '../assets/Images/impactFooterIcons/RTGS.jpg'
import NEFT from '../assets/Images/impactFooterIcons/NEFT.jpeg'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube, faWhatsapp, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const HowItWorksFooter = () => {
    return (
        <div className="w-full  bg-center bg-no-repeat bg-cover" style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 30, backgroundImage: 'url(https://img.freepik.com/premium-photo/crowd-people-are-sitting-theater-with-blue-background-word-big-front_889227-20046.jpg)' }}>
            <div className="w-4/5 mx-auto bg-white bg-opacity-50  flex" style={{ borderRadius: 10 }}>
                <div className="w-1/2 p-4">
                    <h1 className="text-xl font-bold text-white">Join The Impact Community</h1>
                    <div className="mt-4 flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-l-md border border-gray-300 bg-white text-gray-800"
                            style={{ outline: 'none', width: '300px' }}
                        />
                        <button
                            className="p-2 rounded-r-md bg-white text-blue-600 text-gray-800 border border-gray-300"
                            style={{ outline: 'none' }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="w-1/2 p-4">
                    <h1 className="text-xl font-bold text-white">Follow us</h1>
                    <div className="flex space-x-4 mt-4 w-full bg-white gap-3 p-1 pl-4" style={{ borderRadius: 5 }}>
                        <a href="#" className="text-black hover:text-gray-600 text-2xl" aria-label="WhatsApp">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="#" className="text-black hover:text-gray-600 text-2xl" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className="text-black hover:text-gray-600 text-2xl" aria-label="YouTube">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="#" className="text-black hover:text-gray-600 text-2xl" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="#" className="text-black hover:text-gray-600 text-2xl" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-black hover:text-gray-600 text-2xl" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="text-black hover:text-gray-600 text-2xl" aria-label="Pinterest">
                            <FontAwesomeIcon icon={faPinterestP} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white mt-8 p-3" style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <div className="grid grid-cols-12 gap-4 px-10">
                    <div className="col-span-6">
                        <img src={logo} className='w-[150px]' />
                        <p className='text-[10px]'>Impactguru is an online technology platform connecting donors and donees. We do not provide any financial return in any form whatsoever, including but not limited to financial securities (debt or equity), interest, dividend, profit share, rewards in cash, to individuals who make payments on the Platform.</p>
                        <p className='text-[10px]'>Terms of Use - Privacy Policy - Raise a Concern - Cookie Policy</p>
                    </div>
                    <div className="col-span-6 flex justify-center items-center">
                        <div className=' grid grid-cols-4 lg:grid-cols-8 items-center bg-white my-2'>
                            <img src={RapidSSL} alt="" className='h-8' />
                            <img src={Visa} alt="" className='h-8' />
                            <img src={MasterCard} alt="" className='h-8' />
                            <img src={AmericanExpress} alt="" className='h-8' />
                            <img src={Paytm} alt="" className=' h-8' />
                            <img src={UPI} alt="" className='h-8' />
                            <img src={RTGS} alt="" className='h-8' />
                            <img src={NEFT} alt="" className='h-8' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorksFooter;
