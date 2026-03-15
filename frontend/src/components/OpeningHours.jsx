import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const OpeningHours = () => {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/content/settings.json');
        const data = await res.json();
        setHours(data.openingHours || []);
      } catch (error) {
        console.error('Error loading settings.json:', error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <section id="hours" className="py-20 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6">
              <Clock size={40} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold urban-heading text-white mb-4 fire-glow">
              ÖFFNUNGSZEITEN
            </h2>
            <p className="text-xl text-orange-500 font-semibold">Wir freuen uns auf Ihren Besuch</p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-orange-500/20 overflow-hidden shadow-2xl">
            {hours.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-6 transition-colors ${
                  index !== hours.length - 1 ? 'border-b border-zinc-800' : ''
                } hover:bg-zinc-800/50`}
              >
                <span className="text-lg md:text-xl font-semibold text-white">
                  {item.day}
                </span>
                <span className="text-lg md:text-xl font-bold text-gray-300">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              An Feiertagen können abweichende Öffnungszeiten gelten
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;