//css
import './App.css';
//pages
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
//components
import {NavBar} from "./components/NavBar";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />      
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
