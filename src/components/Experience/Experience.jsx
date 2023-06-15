import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
  

        <div className="container_frontend">
          <h3>Frontend Development</h3>
          
          {/* FRONT-END */}
          <div className="front_Back_content">
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        {/* BACKEND */}
        <div className="container_backend">
          <h3>Backend Development</h3>
          <div className="front_Back_content">
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>Node Js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>MySQyl</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article>
              <BsPatchCheckFill className='experience_bullet_icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACK-END */}

      </div>
    </section>
  )
}

export default Experience