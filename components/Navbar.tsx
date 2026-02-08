
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenDesignLens: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDesignLens }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '철학', href: '#about' },
    { name: '포토폴리오', href: '#projects' },
    { name: '프로세스', href: '#workflow' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg py-4 border-b border-gray-100' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <a href="#" className={`text-2xl font-serif tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
            SOYEON<span className="text-gold">.</span>JEONG
          </a>

          <div className={`hidden md:flex gap-12 text-[11px] font-medium uppercase tracking-[0.25em] ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gold transition-colors">{link.name}</a>
            ))}
            <button onClick={onOpenDesignLens} className="hover:text-gold transition-colors text-left uppercase">DesignLens AI</button>
          </div>

          <div className="flex items-center gap-6">
            <button className={`hidden md:block text-[11px] uppercase tracking-widest px-6 py-2 border ${isScrolled ? 'border-[#1a1a1a] text-[#1a1a1a]' : 'border-white text-white'} hover:bg-gold hover:border-gold hover:text-white transition-all`}>
              컨설팅 문의
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}
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
