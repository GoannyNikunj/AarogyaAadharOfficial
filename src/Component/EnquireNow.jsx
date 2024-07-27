// import React, { useState, useEffect } from 'react';
// import { IoClose } from "react-icons/io5";
// import connectwithlogo from '../assets/Images/Aarogya Rakshak logo.png';
// // import chatboot from '../assets/Images/Chatboot_img.png';

// const EnquireButton = () => {
//     const [showButton, setShowButton] = useState(false);
//     const [showForm, setShowForm] = useState(false);

//     const handleScroll = () => {
//         const scrollTop = window.scrollY;
//         const windowHeight = window.innerHeight;
//         if (scrollTop > windowHeight) {
//             setShowButton(true);
//         } else {
//             setShowButton(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const handleButtonClick = () => {
//         setShowForm(true);
//     };

//     const handleCloseForm = () => {
//         setShowForm(false);
//     };

//     return (
//         <div>
//             {showButton && (
//                 <>
//                 <div className="fixed p-1 flex rounded-md bottom-16 lg:bottom-1 h-24 w-40 lg:h-[110px] lg:w-[180px] right-0 z-40 object-contain cursor-pointer" onClick={handleButtonClick}>
//                     <img src={connectwithlogo} alt="" className=''/>
//                 </div>
//                  {/* <div className="fixed  p-1 lg:hidden rounded-full top-44 right-5 z-40 h-28 w-28 object-contain cursor-pointer" onClick={handleButtonClick}>
//                  <img src={chatboot} alt="" className=''/>
//              </div> */}
//              </>
//             )}

//             <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${showForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ zIndex: 1099 }}>
//                 <div className={`fixed bottom-6 right-0 flex justify-end items-center transform transition-transform duration-500 ${showForm ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 1100 }}>
//                     <div className="bg-white px-3 py-2 rounded-lg shadow-lg w-3/4 max-w-sm mx-4 border border-gray-300">
//                         <div className='flex justify-between items-center'>
//                             <h2 className="text-2xl font-bold mb-2">Get Started</h2>
//                             <IoClose className='h-8 w-8 cursor-pointer' onClick={handleCloseForm}/>
//                         </div>
//                         <form>
//                             <div className="mb-2">
//                                 <label className="block text-gray-700 text-sm">Full Name</label>
//                                 <input type="text" placeholder='Enter Full Name' className="w-full p-2 border text-sm border-gray-300 rounded-md" />
//                             </div>
//                             <div className="mb-2 flex space-x-3">
//                                 <div className="w-1/2">
//                                     <label className="block text-gray-700 text-sm">Age</label>
//                                     <input type="number" placeholder='Enter Age' className="w-full p-2 border text-sm border-gray-300 rounded-md" />
//                                 </div>
//                                 <div className="w-1/2">
//                                     <label className="block text-gray-700 text-sm">Gender</label>
//                                     <select className="w-full p-2 border text-sm border-gray-300 rounded-md" placeholder="Select Gender">
//                                         <option value="male">Male</option>
//                                         <option value="female">Female</option>
//                                         <option value="other">Other</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="mb-2 flex space-x-3">
//                                 <div className="w-1/2">
//                                     <label className="block text-gray-700 text-sm">Country</label>
//                                     <input type="text" placeholder='Enter Country' className="w-full p-2 border text-sm border-gray-300 rounded-md" />
//                                 </div>
//                                 <div className="w-1/2">
//                                     <label className="block text-gray-700 text-sm">WhatsApp No</label>
//                                     <input type="text" placeholder='Enter Whatsapp No' className="w-full p-2 border text-sm border-gray-300 rounded-md" />
//                                 </div>
//                             </div>
//                             <div className="mb-2">
//                                 <label className="block text-gray-700 text-sm">Email ID</label>
//                                 <input type="email" placeholder="Enter Email ID" className="w-full p-2 border text-sm border-gray-300 rounded-md" />
//                             </div>
//                             <div className="mb-2">
//                                 <label className="block text-gray-700 text-sm">Message</label>
//                                 <textarea className="w-full p-2 border text-sm border-gray-300 rounded-md" placeholder="Tell us more about your problem"></textarea>
//                             </div>
//                             <div className="flex justify-end">
//                                 <button type="button" onClick={handleCloseForm} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 transition duration-300 mr-2">Close</button>
//                                 <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 transition duration-300">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EnquireButton;

import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import connectwithlogo from '../assets/Images/Aarogya Rakshak logo.png';
// import chatboot from '../assets/Images/Chatboot_img.png';

const EnquireButton = () => {
    const [showButton, setShowButton] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop >= 384) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div>
            {showButton && (
                <>
                <div className="fixed p-1 flex rounded-md bottom-16 lg:bottom-1 h-24 w-40 lg:h-[110px] lg:w-[180px] right-0 z-40 object-contain cursor-pointer" onClick={handleButtonClick}>
                    <img src={connectwithlogo} alt="" className=''/>
                </div>
                 {/* <div className="fixed  p-1 lg:hidden rounded-full top-44 right-5 z-40 h-28 w-28 object-contain cursor-pointer" onClick={handleButtonClick}>
                 <img src={chatboot} alt="" className=''/>
             </div> */}
             </>
            )}

            <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${showForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ zIndex: 1099 }}>
                <div className={`fixed bottom-6 right-0 flex justify-end items-center transform transition-transform duration-500 ${showForm ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 1100 }}>
                    <div className="bg-white px-3 py-2 rounded-lg shadow-lg w-3/4 max-w-sm mx-4 border border-gray-300">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-2xl font-bold mb-2">Get Started</h2>
                            <IoClose className='h-8 w-8 cursor-pointer' onClick={handleCloseForm}/>
                        </div>
                        <form>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm">Full Name</label>
                                <input type="text" placeholder='Enter Full Name' className="w-full p-2 border text-sm border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-2 flex space-x-3">
                                <div className="w-1/2">
                                    <label className="block text-gray-700 text-sm">Age</label>
                                    <input type="number" placeholder='Enter Age' className="w-full p-2 border text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-gray-700 text-sm">Gender</label>
                                    <select className="w-full p-2 border text-sm border-gray-300 rounded-md" placeholder="Select Gender">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2 flex space-x-3">
                                <div className="w-1/2">
                                    <label className="block text-gray-700 text-sm">Country</label>
                                    <input type="text" placeholder='Enter Country' className="w-full p-2 border text-sm border-gray-300 rounded-md" />
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-gray-700 text-sm">WhatsApp No</label>
                                    <input type="text" placeholder='Enter Whatsapp No' className="w-full p-2 border text-sm border-gray-300 rounded-md" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm">Email ID</label>
                                <input type="email" placeholder="Enter Email ID" className="w-full p-2 border text-sm border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm">Message</label>
                                <textarea className="w-full p-2 border text-sm border-gray-300 rounded-md" placeholder="Tell us more about your problem"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={handleCloseForm} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 transition duration-300 mr-2">Close</button>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 transition duration-300">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquireButton;

