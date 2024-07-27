import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import All_Routes from './AllRoutes/All_Routes'
import EnquireButton from './Component/EnquireNow'
import OurPolicies from './Component/OurPolicies'
import MobileNavbar from './Component/MobileNavabr'
import bgimage from './assets/Images/Icon Background.jpg'
import BottomTab from './Component/BottomTab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   
      <div style={{ backgroundImage: `url(${bgimage})`, height: '100%', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundAttachment: 'fixed' }}>  
            <All_Routes/>
     <EnquireButton/>

    <div>
      <BottomTab/>
    </div>
      </div>

    </div>
  )
}

export default App
