
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenDesignLens: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDesignLens }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg py-4 border-b border-gray-100' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <a href="#" className={`text-2xl font-serif tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
          SOYEON<span className="text-gold">.</span>JEONG
        </a>
        <div className={`hidden md:flex gap-12 text-[11px] font-medium uppercase tracking-[0.25em] ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
          <a href="#about" className="hover:text-gold transition-colors">Philosophy</a>
          <a href="#projects" className="hover:text-gold transition-colors">Portfolio</a>
          <button onClick={onOpenDesignLens} className="hover:text-gold transition-colors text-left uppercase">DesignLens AI</button>
          <a href="#workflow" className="hover:text-gold transition-colors">Process</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-6">
          <button className={`hidden md:block text-[11px] uppercase tracking-widest px-6 py-2 border ${isScrolled ? 'border-[#1a1a1a] text-[#1a1a1a]' : 'border-white text-white'} hover:bg-gold hover:border-gold hover:text-white transition-all`}>
            Consulting
          </button>
          <button className={`md:hidden ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
