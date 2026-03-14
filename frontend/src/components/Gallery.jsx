import React, { useState } from 'react';
import { X, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder gallery images - can be replaced with actual restaurant photos
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?q=85',
      title: 'Döner Kebab',
      category: 'Food',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=85',
      title: 'Grill Spezialitäten',
      category: 'Food',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1623556299550-e806c0c1f1e8?q=85',
      title: 'Fresh Bowls',
      category: 'Food',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1771574208749-e3f497200d6f?q=85',
      title: 'Lahmacun',
      category: 'Food',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=85',
      title: 'Frische Pizza',
      category: 'Food',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1701688596783-231b3764ef67?q=85',
      title: 'Falafel',
      category: 'Food',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1705663106388-6c1c51ff5a8d?q=85',
      title: 'Baklava',
      category: 'Dessert',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=85',
      title: 'Fingerfood',
      category: 'Food',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1699728088614-7d1d4277414b?q=85',
      title: 'Vom Grill',
      category: 'Restaurant',
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="gallery" className="py-20 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-6">
              <Camera size={40} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold urban-heading text-white mb-4 fire-glow">
              GALERIE
            </h2>
            <p className="text-xl text-orange-500 font-semibold">Impressionen aus unserem Restaurant</p>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer hover-lift"
                  onClick={() => openLightbox(image)}
                >
                  {/* Image */}
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                      <p className="text-orange-500 text-sm font-semibold">{image.category}</p>
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera size={20} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Text */}
          <div className="text-center mt-12">
            <p className="text-gray-400">
              Alle Gerichte werden täglich frisch zubereitet mit hochwertigen Zutaten
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={28} className="text-white" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            
            {/* Image Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold urban-heading text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-orange-500 font-semibold">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
