import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Chatbot } from './components/Chatbot';
import { ViewState } from './types';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.MENU:
        return <Menu />;
      case ViewState.CONTACT:
        return <ContactSection />;
      case ViewState.ABOUT:
        return <AboutSection />;
      case ViewState.HOME:
      default:
        return (
          <>
            <Hero onExplore={() => setCurrentView(ViewState.MENU)} />
            <FeatureSection />
            <MenuPreview onSeeAll={() => setCurrentView(ViewState.MENU)} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-coffee-50 flex flex-col">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <Footer onChangeView={setCurrentView} />
      <Chatbot />
    </div>
  );
};

// Sub-components for cleaner App.tsx structure

const FeatureSection = () => (
  <section className="py-24 bg-coffee-100">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="text-center p-6">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-coffee-800">
          <Clock size={32} />
        </div>
        <h3 className="text-xl font-serif font-bold text-coffee-900 mb-3">Slow Bar</h3>
        <p className="text-coffee-600">We take our time to craft each pour-over to perfection. Patience creates the perfect flavor profile.</p>
      </div>
      <div className="text-center p-6">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-coffee-800">
          <MapPin size={32} />
        </div>
        <h3 className="text-xl font-serif font-bold text-coffee-900 mb-3">Serene Space</h3>
        <p className="text-coffee-600">Designed with wood and light to provide a peaceful escape from the bustling city noise.</p>
      </div>
      <div className="text-center p-6">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-coffee-800">
          <Sparkles size={32} />
        </div>
        <h3 className="text-xl font-serif font-bold text-coffee-900 mb-3">Curated Beans</h3>
        <p className="text-coffee-600">Sourced from sustainable farms in Ethiopia and Colombia, roasted locally for peak freshness.</p>
      </div>
    </div>
  </section>
);

const MenuPreview = ({ onSeeAll }: { onSeeAll: () => void }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-serif font-bold text-coffee-900">Taste the Difference</h2>
        <p className="text-coffee-600 text-lg leading-relaxed">
          From our signature Haru Latte to our freshly baked Earl Grey Scones, every item on our menu is a labor of love. We believe in quality over quantity, serving only what we love to eat and drink ourselves.
        </p>
        <button 
          onClick={onSeeAll}
          className="text-coffee-800 font-bold border-b-2 border-coffee-800 hover:text-coffee-600 hover:border-coffee-600 transition-colors pb-1"
        >
          View Full Menu
        </button>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        <img src="https://picsum.photos/400/500?random=10" alt="Coffee art" className="rounded-2xl shadow-lg mt-8" />
        <img src="https://picsum.photos/400/500?random=11" alt="Pastry" className="rounded-2xl shadow-lg mb-8" />
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-32 bg-coffee-50">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-8">Our Story</h2>
      <div className="prose prose-lg mx-auto text-coffee-700">
        <p className="mb-6">
          "Haru" (Spring/Day) represents a new beginning. We started Haru Cafe with a simple dream: to create a space where time slows down. In a world that's always rushing, we wanted to offer a pause button.
        </p>
        <p className="mb-6">
          Inspired by the minimalist cafes of Seoul and Tokyo, our space is designed to be a canvas for your thoughts. Whether you're here to work, chat with a friend, or simply enjoy a book, we hope you find a moment of peace in every cup.
        </p>
        <img src="https://picsum.photos/800/400?random=20" alt="Cafe Team" className="w-full rounded-2xl shadow-xl my-10" />
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="pt-32 pb-20 bg-white h-full flex-grow">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="space-y-8">
        <h2 className="text-4xl font-serif font-bold text-coffee-900">Visit Us</h2>
        <p className="text-coffee-600 text-lg">We are located in the quiet corner of the district, just a short walk from the central park.</p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-coffee-800 mt-1" />
            <div>
              <h4 className="font-bold text-coffee-900">Address</h4>
              <p className="text-coffee-600">123 Serenity Lane, District 1<br/>Seoul, South Korea</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Clock className="text-coffee-800 mt-1" />
            <div>
              <h4 className="font-bold text-coffee-900">Hours</h4>
              <p className="text-coffee-600">Mon - Fri: 8am - 8pm<br/>Sat - Sun: 9am - 9pm</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-coffee-800 mt-1" />
            <div>
              <h4 className="font-bold text-coffee-900">Contact</h4>
              <p className="text-coffee-600">+82 2-1234-5678<br/>hello@harucafe.com</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-96 bg-coffee-100 rounded-2xl overflow-hidden shadow-lg relative">
        {/* Placeholder for Map */}
        <img 
          src="https://picsum.photos/800/600?grayscale" 
          alt="Map location" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg font-bold text-coffee-900 shadow-sm">
                Map View Placeholder
            </span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ onChangeView }: { onChangeView: (view: ViewState) => void }) => (
  <footer className="bg-coffee-900 text-coffee-200 py-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-serif font-bold text-white mb-4">HARU CAFE</h3>
        <p className="max-w-xs text-sm opacity-80 mb-6">
          Cultivating moments of peace through exceptional coffee and a warm atmosphere.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><MessageCircle size={20} /></a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-white mb-4">Navigation</h4>
        <ul className="space-y-2 text-sm">
          <li><button onClick={() => onChangeView(ViewState.HOME)} className="hover:text-white transition-colors">Home</button></li>
          <li><button onClick={() => onChangeView(ViewState.MENU)} className="hover:text-white transition-colors">Menu</button></li>
          <li><button onClick={() => onChangeView(ViewState.ABOUT)} className="hover:text-white transition-colors">Our Story</button></li>
          <li><button onClick={() => onChangeView(ViewState.CONTACT)} className="hover:text-white transition-colors">Contact</button></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-white mb-4">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-coffee-800 text-center text-xs opacity-60">
      &copy; {new Date().getFullYear()} Haru Cafe. All rights reserved.
    </div>
  </footer>
);

// Icon for footer
import { MessageCircle, Sparkles } from 'lucide-react';

export default App;