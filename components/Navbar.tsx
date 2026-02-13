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
    { name: '포트폴리오', href: '#projects' },
    { name: '프로세스', href: '#workflow' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled
        ? 'bg-white/95 border-b border-gray-100 shadow-sm py-4'
        : 'bg-transparent py-8'
        }`}>
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 flex justify-between items-center whitespace-nowrap">
          {/* LEFT: LOGO */}
          <div className="flex-1">
            <a href="#" className={`text-xl md:text-2xl font-sans font-black tracking-[0.1em] transition-colors duration-500 uppercase ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'
              }`}>
              JEONGSOYEON
            </a>
          </div>

          {/* CENTER: NAV LINKS */}
          <div className={`hidden xl:flex flex-2 justify-center items-center gap-12 text-sm font-bold tracking-widest ${isScrolled ? 'text-gray-500' : 'text-white/90'
            }`}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gold transition-colors">{link.name}</a>
            ))}
            <button onClick={onOpenDesignLens} className="hover:text-gold transition-colors">DesignLens AI</button>
          </div>

          {/* RIGHT: MOBILE MENU TOGGLE */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-500 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`}
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
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-12 bg-white text-charcoal"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-sans font-bold tracking-widest hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDesignLens();
              }}
              className="text-2xl font-sans font-bold tracking-widest text-gold hover:opacity-80 transition-opacity"
            >
              DesignLens AI
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-10 w-12 h-12 rounded-full border border-gray-200 text-gray-400 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
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
