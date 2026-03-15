import React from 'react';
import { Flame, UtensilsCrossed, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold urban-heading text-white mb-4 fire-glow">
              WILLKOMMEN
            </h2>
            <p className="text-xl text-orange-500 font-semibold">bei Karo Kebab House</p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Unser Restaurant ist ein familiengeführter Betrieb im Herzen des Karolinenviertels.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Als Familie leben wir selbst hier im Viertel und freuen uns jeden Tag, unsere Gäste mit frischem und leckerem Essen begrüßen zu dürfen.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Bei uns stehen <span className="text-orange-500 font-semibold">Qualität, Gastfreundschaft und ein persönlicher Umgang</span> mit unseren Gästen an erster Stelle.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Unsere Gerichte werden <span className="text-orange-500 font-semibold">täglich frisch und mit viel Liebe</span> zubereitet.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Das Karolinenviertel ist für uns nicht nur ein Standort – es ist unsere Heimat.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Wir möchten unseren Gästen eine gemütliche Atmosphäre und echtes Street-Food mit Geschmack bieten.
              </p>
              <p className="text-lg md:text-xl text-orange-500 font-bold leading-relaxed mt-8">
                Wir freuen uns auf Ihren Besuch bei Karo Kebab House!
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-orange-500/20 hover-lift">
                  <Flame className="mx-auto mb-3 text-orange-500" size={40} />
                  <h3 className="font-bold text-white mb-2">Frisch vom Grill</h3>
                  <p className="text-sm text-gray-400">Jeden Tag frisch</p>
                </div>
                <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-orange-500/20 hover-lift">
                  <UtensilsCrossed className="mx-auto mb-3 text-orange-500" size={40} />
                  <h3 className="font-bold text-white mb-2">Hochwertig</h3>
                  <p className="text-sm text-gray-400">Beste Zutaten</p>
                </div>
                <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-orange-500/20 hover-lift">
                  <Heart className="mx-auto mb-3 text-orange-500" size={40} />
                  <h3 className="font-bold text-white mb-2">Mit Liebe</h3>
                  <p className="text-sm text-gray-400">Hausgemacht</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=85"
                  alt="Gegrilltes Fleisch"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
