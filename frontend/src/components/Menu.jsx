import React, { useEffect, useMemo, useState } from 'react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch('/content/menu.json');
        const data = await res.json();

        const categoriesFromJson = (data.categories || []).map((cat, index) => ({
          id: cat.id || cat.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9äöüß-]/gi, '') || `cat-${index}`,
          title: cat.name || `Kategorie ${index + 1}`,
          image: cat.image || '/images/WhatsApp Image 2.jpeg',
          items: (cat.items || []).map((item) => ({
            name: item.title || '',
            price: item.price || '',
            description: item.description || '',
          })),
        }));

        setMenuData(categoriesFromJson);
      } catch (error) {
        console.error('Error loading menu.json:', error);
        setMenuData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const categories = useMemo(() => {
    return [
      { id: 'all', name: 'Alle' },
      ...menuData.map((cat) => ({
        id: cat.id,
        name: cat.title,
      })),
    ];
  }, [menuData]);

  const filteredMenu =
    selectedCategory === 'all'
      ? menuData
      : menuData.filter((cat) => cat.id === selectedCategory);

  if (loading) {
    return (
      <section id="menu" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold urban-heading text-white mb-4 fire-glow">
              UNSERE SPEISEKARTE
            </h2>
            <p className="text-xl text-orange-500 font-semibold">Wird geladen...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold urban-heading text-white mb-4 fire-glow">
            UNSERE SPEISEKARTE
          </h2>
          <p className="text-xl text-orange-500 font-semibold">
            Frisch zubereitet, direkt vom Grill
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/50'
                  : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {filteredMenu.map((category) => (
            <div key={category.id} className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift h-[400px]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl md:text-4xl font-bold urban-heading text-white fire-glow">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="menu-card bg-zinc-900/50 backdrop-blur-sm p-5 rounded-lg border border-zinc-800"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-1">{item.name}</h4>
                          {item.description && (
                            <p className="text-sm text-gray-400">{item.description}</p>
                          )}
                        </div>
                        <div className="ml-4">
                          <span className="text-xl font-bold text-orange-500">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filteredMenu.length === 0 && (
            <div className="text-center text-gray-400">Keine Menüdaten gefunden.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;