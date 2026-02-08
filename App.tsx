
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Workflow from './components/Workflow';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Workflow />
        <Contact />
      </main>
    </div>
  );
};

export default App;
