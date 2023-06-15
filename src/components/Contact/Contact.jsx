import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  //  FORMS CODE FOR EMAILJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xw3yyiq', 'template_rw3wznt', form.current, 'xsLwL-bXLYjeFSmeu');
    
    e.target.reset();
    
  };
  //  END OF FORMS CODE FOR EMAILJS

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
         {/* CONTACT LEFT-SIDE OPTIONS */}
        <div className="contact_left_options">

          <article>
            <MdOutlineEmail className='contact_social_icons'/>
            <h4>Email</h4>
            <h5>owusubk416@gmail.com</h5>
            <a href="mailto:owusubk416@gmail.com" target='_blank' rel="noreferrer">Send me a message</a>
          </article>

          <article>
            <RiMessengerLine className='contact_social_icons'/>
            <h4>Messenger</h4>
            <h5>Bismark_Okyere</h5>
            <a href="https://m.me/bismark.okyere.505"  target='_blank' rel="noreferrer">Send me a message</a>
          </article>
 
          <article>
            <BsWhatsapp className='contact_social_icons'/>
            <h4>WhatsApp</h4>
            <h5>+233123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+233547270155 "  target='_blank' rel="noreferrer">Send me a message</a>
          </article>

        </div>
          {/* END OF CONTACT LEFT-SIDE */}


          {/* CONTACT RIGHT-SIDE FORM */}
        <div className="contact_right_form">
          <form ref ={form} onSubmit={sendEmail}>
            <input type="text" name='text' placeholder='Enter Your Fullname' required/>
            <input type="email" name='email' placeholder='Enter Your Email' required/>
            <textarea name="message" rows="7" placeholder='Enter Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
        </div>
         {/*END OF CONTACT RIGHT-SIDE FORM */}

      </div>
    </section>
  )
}

export default Contact