 
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import "./GithubCalender.css"
export default function GithubCalender() {
  const[show,setshow]=useState(false)
  useEffect(() => {
     setTimeout(() => {
      setshow(!show)
     }, 5000);
  }, [show])
  
  return (
    <div id="Github">
    <h1>Github Stats -(yuv45)</h1><br/>
    {
      show?  <div>
      <h3 className="month"> Monthly Stats</h3><br/>
        <GitHubCalendar 
          className="react-activity-calendar"
          color="yellow"
          username="yuv45"
        />
      </div>: <div>

<div>
  <img 
    id="github-top-langs"
    width="100%"
    src="https://github-readme-stats.vercel.app/api/top-langs?username=yuv45&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=white"
  />
</div>
<div>
  <img
    id="github-stats-card"
    width="100%"
    src="https://github-readme-stats.vercel.app/api?username=yuv45&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=white"
  />
</div>
<div>
  <img
    id="github-streak-stats"
    width="100%"
    src="https://github-readme-streak-stats.herokuapp.com/?user=yuv45&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
    alt=""
  />
</div>
</div>
    }
  
   
    </div>
  );
}