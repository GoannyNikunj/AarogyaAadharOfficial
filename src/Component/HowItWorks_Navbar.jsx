import React from 'react'
import "../css/style.css"
import logo from "../assets/Images/AarogyaDhan.jpeg"
const HowItWorks_Navbar = () => {
    return (
        <>
            <div className="navbar-container ">
                <div className="top-banner-howitworks">
                    <div className="flex space-x-2 px-10 py-2">
                        <img src={logo} alt="Logo" className='logo h-14 w-32 ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks_Navbar