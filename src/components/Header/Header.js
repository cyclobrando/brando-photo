import React from 'react'
import './Header.css'
const Logo = require('./templogo.png')

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-box'>
        <img src={Logo} alt="Brandon Lee Photography" />
        </div>
    
        <div className='header-box'>
            <p>+Works</p>
            <p>About</p>
            <p>Contact</p>
        </div>
      
        

    </div>
  )
}

export default Header
