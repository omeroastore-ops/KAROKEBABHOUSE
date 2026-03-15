import React, { useEffect, useState } from 'react';
import { Instagram, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/content/settings.json');
        const data = await res.json();
        setSettings(data);
      } catch (error) {
        console.error('Error loading settings.json:', error);
      }
    };

    fetchSettings();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!settings) return null;

  const restaurantName = settings.restaurantName || 'Karo Kebab House';
  const address = settings.address || 'Marktstraße 130, 20357 Hamburg';
  const phone = settings.phone || '040 30387414';
  const instagram = settings.instagram || '#';
  const openingHours = settings.openingHours || [];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <button
              onClick={scrollToTop}
              className="mb-4 hover:opacity-80 transition-opacity text-white text-2xl font-bold"
            >
              {restaurantName}
            </button>
            <p className="text-gray-400 text-sm">
              Frisch. Heiß. Direkt vom Grill.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              <MapPin size={18} className="mr-2 text-orange-500" />
              Adresse
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {address}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              <Phone size={18} className="mr-2 text-orange-500" />
              Kontakt
            </h4>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-orange-500 hover:text-orange-400 transition-colors font-semibold"
            >
              {phone}
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center">
              <Clock size={18} className="mr-2 text-orange-500" />
              Öffnungszeiten
            </h4>
            <div className="text-gray-400 text-sm leading-relaxed">
              {openingHours.map((item, index) => (
                <div key={index}>
                  {item.day}: {item.time}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} {restaurantName}. Alle Rechte vorbehalten.
          </p>

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