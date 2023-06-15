import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
       <h5>What I offer</h5>
        <h2>Services</h2>

      <div className="container service_container">
       
       {/*  UI/UX Design */}
        <article>
          <div className="service_header">
            <h3>UI/UX Design</h3>
          </div>
          <ul>

            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>

          </ul>
        </article>
        {/* END UI/UX DESIGN */}
        
       {/*  WEB DEVELOPMENT */}
        <article>
          <div className="service_header">
            <h3>Web Development</h3>
          </div>
          <ul>

            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>

          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

       {/*  CONTENET CREATION */}
        <article>
          <div className="service_header">
            <h3>Content Creation</h3>
          </div>
          <ul>

            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>
            <li>
              <BiCheck className='service-check-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur elite.</p>
            </li>

          </ul>
        </article>
        {/* END OF CONTENT CREATION*/}

      </div>
    </section>
  )
}

export default Services