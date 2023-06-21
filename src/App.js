import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import './styles.css'

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
