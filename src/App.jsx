import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import './styles.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div className="bg-Background text-Text">
      <Navbar />
      <Profile />
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <Skills />
      </div>
      <div data-aos="fade-up">
        <Experience />
      </div>
      <div data-aos="fade-up">
        <Projects />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
    </div>
  );
}

export default App;