import React from 'react'
import macdonaldclone from "../Images/macdonald.clone.png"
import omdb from '../Images/Omdb.png'
import orbitz from '../Images/orbitz.png'
import './Project.css'

const Projects = () => {
  return (
    <div id='Projects'>
        <div>
            <h1>Projects</h1>
            <div className='project-theme'>
              <div className='mac'>
              <img src={macdonaldclone} />
              </div>
            <hr/>
              <div className='description'> 
              <h2>Macdonald's Clone</h2>
                <p>Macdonald is a website used for ordering your meal with a delicious taste and impressive service </p><br/>
                <p><span>Tech-stack -</span> Html, Css, Javascript </p>
                <div className='icons'> 
                <a href='https://github.com/yuv45/you-masai-student-cap05-184/tree/main/macdonalds' target='_blank'><i class='bx bxl-github'></i></a>
                <i class='bx bx-link-external'></i>

                </div>
             
              </div>
            
              
            </div>
            <div className='project-theme'>
              <div className='mac'>
              <img src={omdb} />
              </div>
            <hr/>
              <div className='description'> 
              <h2> Movielist Clone</h2>
                <p>This website is used to search for the bolloywood ,hollywood and others kind of movies </p><br/>
                <p><span>Tech-stack -</span> Html, Css, Javascript </p>
                <div className='icons'>
              <a href='https://github.com/yuv45/you-masai-student-cap05-184/tree/main/Debouncing-throttling/debouncing' target='_blank'> <i class='bx bxl-github'></i></a> 
                <i class='bx bx-link-external'></i>

                </div>
             
              </div>
            
              
            </div>
            <div className='project-theme'>
              <div className='mac'>
              <img src={orbitz} />
              </div>
            <hr/>
              <div className='description'> 
              <h2>Orbitz Clone</h2>
                <p>Orbitz is a website where you can do booking for the hotels for your vacations and to visit tourist places   </p><br/>
                <p><span>Tech-stack -</span> React, Html, Css, Javascript </p> 
                <div className='icons'>
                 <a href=' https://github.com/yuv45/Project-orbitz/tree/main/orbitz-clone' target='_blank'><i class='bx bxl-github'></i></a>
                <i class='bx bx-link-external'></i>

                </div>
             
              </div>
            
              
            </div>
            
        </div>
    </div>
  )
}

export default Projects