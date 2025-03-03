import React,{useRef}from 'react'
import './contact.css'
import cl1 from '../../assets/shs3.jpg'
import cl2 from '../../assets/wk2.jpeg'
import fb from '../../assets/facebook-icon.png'
import tw from '../../assets/twitter.png'
import yt from '../../assets/youtube.png'
import insta from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(' service_y0sbgqe', 'template_e592pcj  ', form.current, {
            publicKey: 'I3bq-FenM_AQna1HR',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section  id='contactPage'>
        <div id='clients'>
            <h1 className='contactpagetitle'>My Work Experience</h1>
            <p className='clientDesc'> I have had the opportunity to work with both product-based companies and startups, building smart, scalable, and secure solutions driven by innovation and technology.</p>
            <div className='clientimgs'>
                <img src={cl1} alt="" className='clientimg'/>
                <img src={cl2} alt="" className='clientimg1'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactpagetitle'>Contact Me</h1>
            <span className='contactdesc'>  Please fill out the form below to discuss any work opportunities. </span>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value="Send" className='submitbtn'>Submit</button>
                <div className='links'>
                <img src={insta} alt="" className='link'/>
                <img src={fb} alt="" className='link'/>
                <img src={tw} alt="" className='link'/>
                <img src={yt} alt="" className='link'/>
                </div>
            </form>
        </div>
    </section>
)
}

export default Contact