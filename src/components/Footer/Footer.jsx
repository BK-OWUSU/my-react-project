import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {AiOutlineCopyright} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer_logo'>B-MARK'S</a>

      <ul className="all_links">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <smaall className="copyright">
        <AiOutlineCopyright className='copy_Icon'/>Copyright & Reserved at Bk-Owusu
      </smaall>
    </footer>
  )
}

export default Footer