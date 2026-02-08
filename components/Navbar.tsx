
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { DesignPersona } from '../types';

interface NavbarProps {
  onOpenDesignLens: () => void;
  currentPersona: DesignPersona;
  onPersonaChange: (persona: DesignPersona) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDesignLens, currentPersona, onPersonaChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoodOpen, setIsMoodOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personaOptions = [
    { id: DesignPersona.TIMELESS, label: 'T', full: 'Timeless Elegance' },
    { id: DesignPersona.BRUTALIST, label: 'B', full: 'Industrial Brutalism' },
    { id: DesignPersona.EDITORIAL, label: 'E', full: 'Editorial Minimalism' },
    { id: DesignPersona.NOIR, label: 'N', full: 'Midnight Noir' }
  ];

  const currentOption = personaOptions.find(p => p.id === currentPersona) || personaOptions[0];

  const navLinks = [
    { name: '철학', href: '#about' },
    { name: '포트폴리오', href: '#projects' },
    { name: '프로세스', href: '#workflow' },
    { name: '문의하기', href: '#contact' },
  ];

  const isDarkTone = currentPersona === DesignPersona.BRUTALIST || currentPersona === DesignPersona.NOIR;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled
        ? (isDarkTone ? 'bg-zinc-950/95 border-zinc-900 shadow-2xl' : 'bg-white/95 border-gray-100 shadow-sm') + ' py-4 border-b'
        : 'bg-transparent py-8'
        }`}>
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 flex justify-between items-center whitespace-nowrap">
          {/* LEFT: LOGO */}
          <div className="flex-1">
            <a href="#" className={`text-xl md:text-2xl font-serif tracking-tighter transition-colors duration-500 ${isScrolled || isDarkTone ? (isDarkTone ? 'text-white' : 'text-[#1a1a1a]') : 'text-white'
              }`}>
              STUDIO<span className="text-gold">.</span>SOYEON
            </a>
          </div>

          {/* CENTER: NAV LINKS */}
          <div className={`hidden xl:flex flex-1 justify-center items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] ${isScrolled || isDarkTone ? (isDarkTone ? 'text-zinc-400' : 'text-gray-500') : 'text-white/60'
            }`}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gold transition-colors">{link.name}</a>
            ))}
            <button onClick={onOpenDesignLens} className="hover:text-gold transition-colors uppercase">DesignLens AI</button>
          </div>

          {/* RIGHT: MOOD SELECTOR & CTA */}
          <div className="flex-1 flex justify-end items-center gap-4 md:gap-8">
            <div className="relative">
              <button
                onClick={() => setIsMoodOpen(!isMoodOpen)}
                className={`group flex items-center gap-2 px-3 py-2 border transition-all duration-500 rounded-none ${isDarkTone
                  ? 'border-zinc-800 bg-zinc-950 text-white'
                  : 'border-gray-200 bg-white text-charcoal'
                  }`}
              >
                <span className="text-[11px] font-black tracking-tighter w-4 text-center">
                  {currentOption.label}
                </span>
                <svg className={`w-2.5 h-2.5 transition-transform duration-500 ${isMoodOpen ? 'rotate-180' : ''} ${isDarkTone ? 'text-zinc-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <AnimatePresence>
                {isMoodOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    className={`absolute right-0 mt-[-1px] p-0 border shadow-2xl z-[60] min-w-[140px] rounded-none ${isDarkTone
                      ? 'bg-zinc-950 border-zinc-800'
                      : 'bg-white border-gray-200'
                      }`}
                  >
                    <div className="flex flex-col">
                      {personaOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            onPersonaChange(opt.id);
                            setIsMoodOpen(false);
                          }}
                          className={`flex items-center gap-3 w-full px-4 py-3 transition-all duration-300 border-b last:border-b-0 ${isDarkTone ? 'border-zinc-900' : 'border-gray-50'} ${currentPersona === opt.id
                            ? (isDarkTone ? 'bg-zinc-900 text-gold' : 'bg-gray-50 text-gold')
                            : (isDarkTone ? 'text-zinc-500 hover:bg-zinc-900 hover:text-white' : 'text-gray-400 hover:bg-gray-50 hover:text-charcoal')
                            }`}
                        >
                          <span className="text-[10px] font-black">{opt.label}</span>
                          <span className="text-[9px] font-bold uppercase tracking-widest">{opt.full.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className={`hidden sm:block text-[10px] uppercase font-bold tracking-[0.2em] px-5 py-2.5 border transition-all duration-500 rounded-none ${isScrolled || isDarkTone
              ? (isDarkTone ? 'border-white text-white hover:bg-white hover:text-black' : 'border-charcoal text-[#1a1a1a] hover:bg-gold hover:border-gold hover:text-white')
              : 'border-white text-white hover:bg-gold hover:border-gold'
              }`}>
              INQUIRY
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-500 ${isScrolled || isDarkTone ? (isDarkTone ? 'text-white' : 'text-[#1a1a1a]') : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-10 ${isDarkTone ? 'bg-zinc-950 text-white' : 'bg-white text-charcoal'
              }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-serif ${isDarkTone ? 'hover:text-gold' : 'hover:text-gold'}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDesignLens();
              }}
              className="text-3xl font-serif text-gold"
            >
              DesignLens AI
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mt-10 w-12 h-12 rounded-full border flex items-center justify-center ${isDarkTone ? 'border-zinc-800 text-zinc-500' : 'border-gray-200 text-gray-400'
                }`}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
