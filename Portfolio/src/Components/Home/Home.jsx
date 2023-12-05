import React from 'react'
import profilepic from "../Images/Profile.png"
 
import "./Home.css"
const Home = () => {
  const openResume = () => {
    window.open(
      " https://drive.google.com/file/d/1viAKJCTIYlhpPYwruanYHBmbZJr7BNjq/view?usp=sharing", 
      "_blank"
    );
     
  
  };
  return (
    <div id='Home'>
    <div className='Home-main'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'> I, m <span className='introName'>Vinay</span><br/>Front-end Developer</span>
            <p className='intropara'>Passionate front-end developer with a creative flair, dedicated to crafting engaging and responsive user experiences through innovative design and cutting-edge web technologies."</p>
            <div className="nav-link resume" onClick={openResume}>
            
            <button  className='btn'>Resume</button>
            </div>
           
        </div>
        <div className='Profile-pic'>
            <img className='pc' src={profilepic} alt='profilepic'/>
        </div>
    </div>
    </div>
  )
}

export default Home