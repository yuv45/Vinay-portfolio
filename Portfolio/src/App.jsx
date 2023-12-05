import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skilll from './Components/Skill/Skilll';
import GitHubCalendar from './Components/Github-stats/GithubCalender';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skilll />
      <GitHubCalendar />
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App
