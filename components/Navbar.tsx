
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personaOptions = [
    { id: DesignPersona.TIMELESS, label: 'TIMELESS', icon: '✧' },
    { id: DesignPersona.BRUTALIST, label: 'BRUTALIST', icon: '■' },
    { id: DesignPersona.EDITORIAL, label: 'EDITORIAL', icon: '□' }
  ];

  const navLinks = [
    { name: '철학', href: '#about' },
    { name: '포트폴리오', href: '#projects' },
    { name: '프로세스', href: '#workflow' },
    { name: '문의하기', href: '#contact' },
  ];

  const isDarkTone = currentPersona === DesignPersona.BRUTALIST;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled
          ? (isDarkTone ? 'bg-zinc-900/95 border-zinc-800' : 'bg-white/95 border-gray-100') + ' py-4 border-b'
          : 'bg-transparent py-8'
        }`}>
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <a href="#" className={`text-2xl font-serif tracking-tight transition-colors duration-500 ${isScrolled || isDarkTone ? (isDarkTone ? 'text-white' : 'text-[#1a1a1a]') : 'text-white'
            }`}>
            SOYEON<span className="text-gold">.</span>JEONG
          </a>

          <div className={`hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] ${isScrolled || isDarkTone ? (isDarkTone ? 'text-zinc-400' : 'text-gray-500') : 'text-white/60'
            }`}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gold transition-colors">{link.name}</a>
            ))}
            <button onClick={onOpenDesignLens} className="hover:text-gold transition-colors text-left uppercase">DesignLens AI</button>

            <div className={`flex items-center gap-2 px-1 py-1 rounded-full border ${isDarkTone ? 'border-zinc-800 bg-zinc-800/50' : 'border-gray-200 bg-gray-50'}`}>
              {personaOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onPersonaChange(opt.id)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-500 text-[9px] ${currentPersona === opt.id
                      ? 'bg-gold text-white shadow-lg scale-105'
                      : (isDarkTone ? 'text-zinc-500 hover:text-white' : 'text-gray-400 hover:text-gold')
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className={`hidden sm:block text-[10px] uppercase tracking-widest px-6 py-2.5 border transition-all duration-500 ${isScrolled || isDarkTone
                ? (isDarkTone ? 'border-white text-white hover:bg-white hover:text-zinc-900' : 'border-charcoal text-charcoal hover:bg-gold hover:border-gold hover:text-white')
                : 'border-white text-white hover:bg-gold hover:border-gold'
              }`}>
              컨설팅 문의
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[40] bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif text-charcoal"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDesignLens();
              }}
              className="text-2xl font-serif text-gold"
            >
              DesignLens AI
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 text-xs font-bold uppercase tracking-widest text-gray-400"
            >
              닫기
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
