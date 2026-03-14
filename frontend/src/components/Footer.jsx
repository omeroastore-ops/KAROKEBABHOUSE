import React from 'react';
import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button 
              onClick={scrollToTop}
              className="mb-4 hover:opacity-80 transition-opacity"
            >
              <img
                src="https://customer-assets.emergentagent.com/job_karo-hamburg-eats/artifacts/jrzmw4bv_Schermafbeelding%202026-03-14%20182812.png"
                alt="Karo Kebab House Logo"
                className="h-20 w-auto object-contain"
              />
            </button>
            <p className="text-gray-400 text-sm">
              Frisch. Heiß. Direkt vom Grill.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              <MapPin size={18} className="mr-2 text-orange-500" />
              Adresse
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Marktstraße 103<br />
              20357 Hamburg
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              <Phone size={18} className="mr-2 text-orange-500" />
              Kontakt
            </h4>
            <a
              href="tel:04030387414"
              className="text-orange-500 hover:text-orange-400 transition-colors font-semibold"
            >
              040 30387414
            </a>
          </div>

          {/* Opening Hours Summary */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              <Clock size={18} className="mr-2 text-orange-500" />
              Öffnungszeiten
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mo-Do: 10:00 – 22:00<br />
              Fr-Sa: 10:00 – 23:00<br />
              So: 10:00 – 22:00
            </p>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/karokebabhouse?igsh=OXZhejBwMTZhN2tu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
              aria-label="Instagram - Karo Kebab House"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Karo Kebab House. Alle Rechte vorbehalten.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="text-orange-500 hover:text-orange-400 transition-colors font-semibold text-sm"
          >
            Nach oben ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
