import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Images/logo.png"
import {Link} from 'react-scroll'
const Navbar = () => {
  const[page,setpage]=useState(false  )
 
  return (
    <>
    <div className='Main-nav'>
    <div className='img-icon'>
        <img src={logo}/>
    </div>
    <div className='contant-page'>

      <Link activeClass='active' to='Home' spy={true} smooth={true} offset={-100}  duration={500} className='desktopMenuListItem'><p>Home</p></Link> 
      <Link  activeClass='active' to='About' spy={true} smooth={true} offset={-70}  duration={500} className='desktopMenuListItem'> <p>About</p></Link>
      <Link  activeClass='active' to='Skill' spy={true} smooth={true} offset={-70}  duration={500} className='desktopMenuListItem'><p>Skills</p></Link>
      <Link  activeClass='active' to='Github' spy={true} smooth={true} offset={-80}  duration={500} className='desktopMenuListItem'><p>Github stats</p></Link>
      <Link  activeClass='active' to='Projects' spy={true} smooth={true} offset={-100}  duration={500} className='desktopMenuListItem'><p>Projects</p></Link>
    </div>
    <div className='contact-icon'>
      <i className='bx bx-phone-call'></i>
        <button onClick={()=>{
          document.getElementById('Contact').scrollIntoView({behavior:"smooth"})
        }}>Contact Me</button>
    </div>
    <div className='mob-menu'>
    <i class='bx bx-menu-alt-right' onClick={()=>{setpage(!page)}}></i>
    </div>
    <div className='nav-page' style={{display:page?'flex':'none'}}>

      <Link activeClass='active' to='Home' spy={true} smooth={true} offset={-100}  duration={500} className='listItem' onClick={()=>{setpage(false)}} ><p>Home</p></Link> 
      <Link  activeClass='active' to='About' spy={true} smooth={true} offset={-70}  duration={500} className='listItem' onClick={()=>{setpage(false)}} > <p>About</p></Link>
      <Link  activeClass='active' to='Skill' spy={true} smooth={true} offset={-70}  duration={500} className='listItem' onClick={()=>{setpage(false)}} ><p>Skills</p></Link>
      <Link  activeClass='active' to='Github' spy={true} smooth={true} offset={-80}  duration={500} className='listItem' onClick={()=>{setpage(false)}} ><p>Github stats</p></Link>
      <Link  activeClass='active' to='Projects' spy={true} smooth={true} offset={-100}  duration={500} className='listItem' onClick={()=>{setpage(false)}} ><p>Projects</p></Link>
      <Link  activeClass='active' to='Contact' spy={true} smooth={true} offset={-100}  duration={500} className='listItem' onClick={()=>{setpage(false)}} ><p>Contact</p></Link>
    </div>
    
    </div>
    </>
  )
}

export default Navbar