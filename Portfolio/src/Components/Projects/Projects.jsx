import React from "react";
import macdonaldclone from "../Images/macdonald.clone.png";
import omdb from "../Images/Omdb.png";
import orbitz from "../Images/orbitz.png";
import "./Project.css";

const Projects = () => {
  return (
    <div className="Projects-display" id="Projects">
      <div>
        <h1>Projects</h1>
        <div className="project-theme">
          <div className="mac">
            <img className="project-image" src={macdonaldclone} />
          </div>

          <div className="description">
            <h2>Macdonald's Clone</h2>
            <p>
              Macdonald is a website used for ordering your meal with a
              delicious taste and impressive service{" "}
            </p>
            <br />
            <p>
              <span>Tech-stack -</span> Html, Css, Javascript{" "}
            </p>
            <div className="icons">
              <a
                href="https://github.com/yuv45/you-masai-student-cap05-184/tree/main/macdonalds"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
              <a
                href="https://idyllic-naiad-0901c5.netlify.app"
                target="_blank"
              >
                <i class="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-theme">
          <div className="mac">
            <img src={omdb} />
          </div>

          <div className="description">
            <h2> Movielist Clone</h2>
            <p>
              This website is used to search for the bolloywood ,hollywood and
              others kind of movies{" "}
            </p>
            <br />
            <p>
              <span>Tech-stack -</span> Html, Css, Javascript{" "}
            </p>
            <div className="icons">
              <a
                href="https://github.com/yuv45/you-masai-student-cap05-184/tree/main/Debouncing-throttling/debouncing"
                target="_blank"
              >
                {" "}
                <i class="bx bxl-github"></i>
              </a>
              <a
                href="https://dreamy-conkies-30ded4.netlify.app

"
              >
                <i class="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-theme">
          <div className="mac">
            <img src={orbitz} alt="orbitz" />
          </div>

          <div className="description">
            <h2>Orbitz Clone</h2>
            <p>
              Orbitz is a website where you can do booking for the hotels for
              your vacations and to visit tourist places{" "}
            </p>
            <br />
            <p>
              <span>Tech-stack -</span> React, Html, Css, Javascript{" "}
            </p>
            <div className="icons">
              <a
                href=" https://github.com/yuv45/Project-orbitz/tree/main/orbitz-clone"
                target="_blank"
              >
                <i class="bx bxl-github"></i>
              </a>
             <a href="https://project-orbitz-yuv45-vinays-projects-28252edc.vercel.app?_vercel_share=A1Jk13ITXyNnb2cWwreaCwH3MAX8n5Ck" target="_blank"> <i class="bx bx-link-external"></i></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
