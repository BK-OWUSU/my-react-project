import React from 'react';
import './header.css';
import CTA from './CTA';
import BK from '../../assets/bk_owusu.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Bismark Kofi Owusu</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>
        
        <HeaderSocials />

        <div className="bk">
          <img src={BK} alt="BK-OWUSU"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header