import React from 'react'
import "./contact.css"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fvkyimp', 'template_s1je1o8', form.current, 'FChQ3fpa6tDGFeFRF')
        .then((result) => {
            console.log(result.text);
            alert("Email sent!")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
            alert("Error sending email. Please try again later.");
        });
    };
  return (
    <div id='Contact'>
     <h1>Contact Me</h1>
     <div className='contactDetails'>
          <div className='contactInfo'>
            <i className='bx bxl-linkedin-square'></i>
            <p>Linkedin</p>
            <p>You can contact me on Linkedin</p>
            <p onClick={() => window.open('https://www.linkedin.com/in/vinay-arora-1a286027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}>Vinay arora</p>
          </div>
          <div className='contactInfo'>
            <i className='bx bxs-phone'></i>
            <p>Phone</p>
            <p>Here is my Phone Number</p>
            <p onClick={() => navigator.clipboard.writeText(9012827920)}>9012827920</p>
          </div>
          <div className='contactInfo'>
            <i className='bx bxl-gmail' ></i>
            <p>Email</p>
            <p>Here is my Email</p>
            <p onClick={() => navigator.clipboard.writeText('aroravinay2004@gmail.com')}>aroravinay2004@email.com</p>
          </div>
        </div>
     <p>Please fill out form below to discuss any work opportunity  </p>
     <form onSubmit={sendEmail} ref={form} className='ContactForm'>
        <input type='text' className='name' placeholder='Your Name' name='yourName'/>
        <input type="email" className="email" placeholder="Your Email" name='yourEmail' />
        <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
        <button value="send" type='submit' className='submitBtn'>Submit</button>
     </form>
    </div>
  )
}

export default Contact