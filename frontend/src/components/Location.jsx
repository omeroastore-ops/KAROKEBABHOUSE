import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';

const Location = () => {
  const address = 'Marktstraße 103, 20357 Hamburg';
  const phone = '040 30387414';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Marktstraße+103+20357+Hamburg';

  return (
    <section id="location" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold urban-heading text-white mb-4 fire-glow">
              STANDORT
            </h2>
            <p className="text-xl text-orange-500 font-semibold">Besuchen Sie uns in Hamburg</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Adresse</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{address}</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Telefon</h3>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-orange-500 text-lg font-semibold hover:text-orange-400 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all hover:shadow-lg hover:shadow-orange-500/50"
              >
                <Navigation size={24} />
                <span>Route in Google Maps öffnen</span>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-500/30 h-[400px] md:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.3076891234!2d9.967089!3d53.559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sMarktstra%C3%9Fe%20103%2C%2020357%20Hamburg!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karo Kebab House Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
