import React from 'react';
import './tailwind.generated.css';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';

function App() {
  return (
    <div className="font-light">
        <Header />
        <About />
        <Skills />
        <ProjectsList />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
