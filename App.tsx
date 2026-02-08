
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import DesignLens from './components/DesignLens/DesignLens';
import { AnimatePresence } from 'framer-motion';
import { DesignPersona } from './types';

const App: React.FC = () => {
  const [isDesignLensOpen, setIsDesignLensOpen] = useState(false);
  const [currentPersona, setCurrentPersona] = useState<DesignPersona>(DesignPersona.TIMELESS);

  const getPersonaClass = () => {
    switch (currentPersona) {
      case DesignPersona.BRUTALIST: return 'persona-brutalist font-sans';
      case DesignPersona.EDITORIAL: return 'persona-editorial font-inter font-light';
      case DesignPersona.NOIR: return 'persona-noir font-serif tracking-tight';
      default: return 'persona-timeless font-serif';
    }
  };

  const isDarkTone = currentPersona === DesignPersona.BRUTALIST || currentPersona === DesignPersona.NOIR;

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isDarkTone ? 'bg-zinc-950 text-white' : 'bg-off-white text-charcoal'
      } ${getPersonaClass()}`}>
      <Navbar
        onOpenDesignLens={() => setIsDesignLensOpen(true)}
        currentPersona={currentPersona}
        onPersonaChange={setCurrentPersona}
      />
      <main>
        <Hero
          onOpenDesignLens={() => setIsDesignLensOpen(true)}
          currentPersona={currentPersona}
        />
        <About currentPersona={currentPersona} />
        <Gallery currentPersona={currentPersona} />
        <Workflow currentPersona={currentPersona} />
        <Contact currentPersona={currentPersona} />
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
