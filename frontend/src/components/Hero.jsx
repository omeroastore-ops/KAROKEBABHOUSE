import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1699728088614-7d1d4277414b?q=85)',
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold urban-heading fire-glow text-white leading-none">
              KARO KEBAB
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold urban-heading text-orange-500 leading-none">
              HOUSE
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl lg:text-4xl font-light text-white mt-8">
              Frisch. Heiß. Direkt vom Grill.
            </p>

            {/* CTA Button */}
            <div className="mt-12">
              <button
                onClick={scrollToMenu}
                className="btn-fire text-lg md:text-xl px-12 py-4 urban-heading"
              >
                Speisekarte ansehen
              </button>
            </div>

            {/* Location Badge */}
            <div className="mt-8 inline-block bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-white font-semibold">📍 Marktstraße 103, Hamburg</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={40} className="text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
