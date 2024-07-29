import React from 'react'
import "../css/style.css"
import logo from "../assets/Images/AarogyaDhan.jpeg"
import { useNavigate } from 'react-router-dom'
const HowItWorks_Navbar = () => {
    const navigate =useNavigate()
    return (
        <>
            <div className="navbar-container ">
                <div className="top-banner-howitworks">
                    <div className="flex space-x-2 px-10 py-2" onClick={()=>navigate('/aarogyadhan')}>
                        <img src={logo} alt="Logo" className='logo h-14 w-32 ' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks_Navbar