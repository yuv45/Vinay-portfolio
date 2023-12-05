import React, { useState, useEffect } from "react";
import "./Skill.css";
import Css from "../Images/Css.png";
import html from "../Images/html.png";
import Jx from "../Images/Jx.png";
import react from "../Images/react.png";
import chakra from "../Images/chakra.png";
 
import github from "../Images/github.png";
export default function Skilll() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setshow(!show);
    }, 2500);
  }, [show]);
  return (
    <div id="Skill">
      <h1>Skills</h1>
      {show ? (
        <div className="skills-main">
          <div className="languages-icon">
            <div>
              <img className="languages" src={html} />
            </div>
            <h3>HTML5</h3>
          </div>
          <div className="languages-icon">
            <div>
              <img className="languages" src={Css} />
            </div>
            <h3>CSS3</h3>
          </div>

          <div className="languages-icon">
            <div>
              <img className="languages" src={Jx} />
            </div>
            <h3>Javascript</h3>
          </div>

      
         
        </div>
      ) : (
        <div className="skills-main">
              <div className="languages-icon">
            <div>
              <img className="languages" src={react} />
            </div>
            <h3>React.js</h3>
          </div>
          <div className="languages-icon">
            <div>
              <img className="languages" src={chakra} />
            </div>
            <h3>Chakra </h3>
          </div>
          <div className="languages-icon">
            <div>
              <img className="languages" src={github} />
            </div>
            <h3>Github</h3>
          </div>
        
        </div>
        
      )}
      <h1> Tech stack</h1>
            <div className='skills-main'>
                {
                    show ?
                        <>
                            <div><img className="languages"  src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /><p>GitHub</p></div>
                            <div><img className="languages" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt="" /><p>VS Code</p></div>
                            <div><img className="languages" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1200px-New_Replit_Logo.svg.png" alt="" /><p>Replit</p></div>
                            <div><img className="languages" src="https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png" alt="" /><p>PostMan</p></div>
                        </>
                        :
                        <>
                            <div><img className="languages" src="https://iconape.com/wp-content/png_logo_vector/git-icon.png" alt="" /><p>Git</p></div>
                            <div><img className="languages" src="https://seeklogo.com/images/V/vercel-logo-F748E39008-seeklogo.com.png" alt="" /><p>Vercel</p></div>
                            <div><img className="languages" src="https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png" alt="" /><p>Netlify</p></div>
                            <div><img className="languages" src="https://cdn3.iconfinder.com/data/icons/feather-5/24/codesandbox-512.png" alt="" /><p>CodeSandBox</p></div>
                        </>
                }
            </div>
        <div>
            <p className="skills">
              As a front-end developer for a year now, I'm good at using tools
              like React, JavaScript, HTML, and CSS to make websites look
              awesome and work smoothly. I know how to use Chakra UI to style
              things nicely and make them look cool. I'm also familiar with
              GitHub, which helps me work well with others on coding projects.
              Basically, I make websites that are not only user-friendly but
              also look great!
            </p>
          </div>
    </div>
    
  );
}
