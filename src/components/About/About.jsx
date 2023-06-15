import React from 'react';
import './about.css';
import ME from '../../assets/girl_hood.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import {GiTrophyCup} from 'react-icons/gi';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="About Bismark" />
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>40+ Completed </small>
            </article>

            <article>
              <GiTrophyCup className='about_icon'/>
              <h5>Awards</h5>
              <small>10+ Awards</small>
            </article>

          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quam eos nostrum cum. Dolore, deserunt totam. Cum, quisquam. Totam quam ducimus dicta nostrum aut! Aut consectetur fuga ipsa natus soluta?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About