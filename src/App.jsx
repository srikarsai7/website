import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './index.css';

function App() {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
      </main>
    </>
  );
}

export default App;