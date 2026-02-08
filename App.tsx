
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import DesignLens from './components/DesignLens/DesignLens';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isDesignLensOpen, setIsDesignLensOpen] = useState(false);

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar onOpenDesignLens={() => setIsDesignLensOpen(true)} />
      <main>
        <Hero onOpenDesignLens={() => setIsDesignLensOpen(true)} />
        <About />
        <Gallery />
        <Workflow />
        <Contact />
      </main>

      <AnimatePresence>
        {isDesignLensOpen && (
          <DesignLens onClose={() => setIsDesignLensOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
