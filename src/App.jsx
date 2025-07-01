import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';


const App = () => {
  return (
    <div className="container mx-auto max-w-7xl ">
      <Navbar /> 
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
