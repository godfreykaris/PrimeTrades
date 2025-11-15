import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import logoImage from '../assets/logo.png'; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const sections = ['about', 'services', 'testimonials', 'contact'] as const;

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50 flex justify-between items-center p-4 md:p-6">
      <div className="flex-1 max-w-24 md:max-w-32">
        <img 
          src={logoImage} 
          alt="PrimeTrades Forex Academy Logo" 
          className="w-full h-auto max-h-16 md:max-h-20 object-contain"
        />
      </div>

      <button 
        className="md:hidden text-blue-600 text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`${
        isMenuOpen ? 'flex' : 'hidden'
      } md:flex flex-col md:flex-row absolute md:static top-full right-0 bg-white shadow-xl md:shadow-none w-full md:w-auto p-4 md:p-0 z-40 gap-4 md:gap-8`}>
        <Link 
          to="/" 
          className="text-blue-600 font-semibold hover:text-blue-800 py-2 md:py-0 transition-colors font-['Inter']"
        >
          Home
        </Link>
        {sections.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-gray-700 font-semibold hover:text-blue-600 text-left md:text-center capitalize py-2 md:py-0 transition-colors font-['Inter']"
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;