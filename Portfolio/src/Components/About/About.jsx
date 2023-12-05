import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div>
        <div className='About'>
            <h1>About Me</h1><br/>
            <h2>Front-End Developer</h2><br/><br/>
            <p>
              
               
               Hello there! I'm Vinay, a passionate front-end developer with a knack for turning ideas into immersive and visually appealing web experiences. My journey in the digital realm began with the fundamentals—HTML and CSS—forming the foundation of my commitment to creating clean, responsive, and user-friendly interfaces. </p><br/>
               
               <p>Proficient in the art of crafting dynamic user interfaces, I've delved deep into the world of JavaScript, leveraging its power to breathe life into web applications. My toolkit includes React, a library I've come to love for its efficiency and flexibility in building seamless, single-page applications.</p><br/>
                <p>With a keen eye for design and an ear for user experience, I thrive on the ever-evolving landscape of web technologies. I believe in the beauty of simplicity and the impact of well-executed design in enhancing user engagement.</p><br/>
               <p>Drop a mail- @aroravinay1604@gmail.com
               <img className='copy-img' onClick={()=>{
            navigator.clipboard.writeText("@aroravinay1604@gmail.com")
               }} src='https://cdn-icons-png.flaticon.com/512/6051/6051986.png'/></p>
               
              
        </div>
    </div>
  )
}

export default About