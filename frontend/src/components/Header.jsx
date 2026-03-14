import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl urban-heading">K</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold urban-heading text-white leading-tight">
                KARO KEBAB
              </h1>
              <p className="text-orange-500 text-xs font-semibold">HOUSE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-orange-500 transition-colors font-semibold">
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-white hover:text-orange-500 transition-colors font-semibold">
              Menü
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-500 transition-colors font-semibold">
              Über Uns
            </button>
            <button onClick={() => scrollToSection('hours')} className="text-white hover:text-orange-500 transition-colors font-semibold">
              Öffnungszeiten
            </button>
            <button onClick={() => scrollToSection('location')} className="text-white hover:text-orange-500 transition-colors font-semibold">
              Standort
            </button>
            <a
              href="tel:04030387414"
              className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all hover:shadow-lg hover:shadow-orange-500/50"
            >
              <Phone size={18} />
              <span>Anrufen</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-orange-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-white hover:text-orange-500 transition-colors font-semibold py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="block w-full text-left text-white hover:text-orange-500 transition-colors font-semibold py-2">
              Menü
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white hover:text-orange-500 transition-colors font-semibold py-2">
              Über Uns
            </button>
            <button onClick={() => scrollToSection('hours')} className="block w-full text-left text-white hover:text-orange-500 transition-colors font-semibold py-2">
              Öffnungszeiten
            </button>
            <button onClick={() => scrollToSection('location')} className="block w-full text-left text-white hover:text-orange-500 transition-colors font-semibold py-2">
              Standort
            </button>
            <a
              href="tel:04030387414"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all"
            >
              <Phone size={18} />
              <span>Jetzt anrufen</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
