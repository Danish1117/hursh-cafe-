import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'non-coffee' | 'dessert' | 'food'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-coffee-600 tracking-widest text-sm font-bold uppercase mb-2 block">Our Offerings</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-6">Curated Menu</h2>
          <p className="max-w-2xl mx-auto text-coffee-600">
            Handcrafted beverages and artisanal pastries made with the finest ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'coffee', 'non-coffee', 'dessert', 'food'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-coffee-800 text-white shadow-md'
                  : 'bg-coffee-50 text-coffee-600 hover:bg-coffee-100'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex items-start gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 shadow-md">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-2 border-b border-coffee-100 pb-2 border-dashed">
                  <h3 className="text-xl font-serif font-bold text-coffee-900">{item.name}</h3>
                  <span className="text-lg font-medium text-coffee-700 font-serif">{item.price}</span>
                </div>
                <p className="text-coffee-500 text-sm leading-relaxed">{item.description}</p>
                {item.popular && (
                  <span className="inline-block mt-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
                    Popular
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};