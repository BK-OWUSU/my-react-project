import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/img3.jpg';
import IMG2 from '../../assets/img4.jpg';
import IMG3 from '../../assets/img5.jpg';
import IMG4 from '../../assets/img6.jpg';
import IMG5 from '../../assets/img7.jpg';
import IMG6 from '../../assets/img8.jpg';

//DINAMICALLY GENRATED CONTENT USING ARRAYS
const mydata = [
  {
    id: 1,
    imgs: IMG1,
    title: 'This is Project Title',
    github: 'https://www.github.com',
    dribbble: 'https://dribbble.com/shots/21713918-Bk-anima'
  },
  
  {
    id: 2,
    imgs: IMG2,
    title: 'This is Project Title',
    github: 'https://www.github.com',
    dribbble: 'https://dribbble.com/shots/21713918-Bk-anima'
  },
  
  {
    id: 3,
    imgs: IMG3,
    title: 'This is Project Title',
    github: 'https://www.github.com',
    dribbble: 'https://dribbble.com/shots/21713918-Bk-anima'
  },
  
  {
    id: 4,
    imgs: IMG4,
    title: 'This is Project Title',
    github: 'https://www.github.com',
    dribbble: 'https://dribbble.com/shots/21713918-Bk-anima'
  },
  
  {
    id: 5,
    imgs: IMG5,
    title: 'This is Project Title',
    github: 'https://www.github.com',
    dribbble: 'https://dribbble.com/shots/21713918-Bk-anima'
  },
  
  {
    id: 6,
    imgs: IMG6,
    title: 'This is Project Title',
    github: 'https://www.github.com',
    dribbble: 'https://dribbble.com/shots/21713918-Bk-anima'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
       {
        mydata.map (({id, imgs, title,github, dribbble}) => {
          return (
            <article key={id}>
            <div className="portfolio_image">
                <img src={imgs} alt="My Image1" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_cta">
                <a href={github} className='btn' target='_blank'  rel="noreferrer">Github</a>
                <a href={dribbble} className='btn btn-primary' target='_blank' rel="noreferrer">Github</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio