import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/WhatsApp Image 2025-04-25 at 19.39.17_4f9c2ff6.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Chintu</h1>
          <h5 className="text-light">Full Stack Web Developer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header