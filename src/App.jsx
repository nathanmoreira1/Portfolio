import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Avatar } from "./components/Avatar";
import { useState, useEffect } from 'react';

import AboutMe from './pages/AboutMe';
import Experiences from './pages/Experiences';
import Technologies from './pages/Technologies';

function App() {
  const [actualRoute, setActualRoute] = useState("");
  
  useEffect(() => {
    const refreshUrl = () => {
      setActualRoute(window.location.pathname)
    };

    refreshUrl();

    return () => {
      window.removeEventListener('popstate', refreshUrl);
    };
  }, [])

  return (
    <Router>
      <div className='container'>
        <main className='app'>
          <section className='my-informations-main'>
            <h1>Hi, I'm Nathan.</h1>
            <p>Software Developer</p>
            <Menu setActualRoute={setActualRoute} />
          </section>
          <section className='selected-content-main'>
            <Avatar isFocus={actualRoute == "/"} />
            <Routes>
              <Route path="/" element={null} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/technologies" element={<Technologies />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  )
}

export default App
