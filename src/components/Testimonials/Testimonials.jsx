import React from 'react';
import './testimonials.css';
import IMG1 from '../../assets/avatar3.jpg';
import IMG2 from '../../assets/avatar2.jpg';
import IMG3 from '../../assets/avatar5.jpg';
import IMG4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
/* import 'swiper/css/navigation';
import 'swiper/css/scrollbar'; */

//DIMACALLY ARRAY DISPLAYING

const bkdata = [
  {
    avatar: IMG1,
    name: 'Getrude Afoley',
    reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro quae provident, laboriosam doloremque sunt. At iure assumenda esse animi voluptas sapiente facilis, veniam repellendus officia recusandae, ipsum perspiciatis quas.' 
  },
  
  {
    avatar: IMG2,
    name: 'Bismark Owusu',
    reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro quae provident, laboriosam doloremque sunt. At iure assumenda esse animi voluptas sapiente facilis, veniam repellendus officia recusandae, ipsum perspiciatis quas.' 
  },
  {
    avatar: IMG3,
    name: 'Princess Amakie',
    reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro quae provident, laboriosam doloremque sunt. At iure assumenda esse animi voluptas sapiente facilis, veniam repellendus officia recusandae, ipsum perspiciatis quas.' 
  },
  {
    avatar: IMG4,
    name: 'David Ohene',
    reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro quae provident, laboriosam doloremque sunt. At iure assumenda esse animi voluptas sapiente facilis, veniam repellendus officia recusandae, ipsum perspiciatis quas.' 
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testiomial</h2>

      <Swiper className="container testiomial_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        
        {
          bkdata.map(({avatar, name, reviews}, index)=> {
            return (
        <SwiperSlide className='testimonials_content' key={index}>
            <div className="client_avatar">
            <img src={avatar} alt="Client Avatar" /></div>
            <h5>{name}</h5>
            <small className='review'>{reviews}</small>
        </SwiperSlide>
            )
          })
        }

      </Swiper>

    </section>
  )
}

export default Testimonials