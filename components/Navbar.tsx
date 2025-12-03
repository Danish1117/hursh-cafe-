import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { Coffee, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', value: ViewState.HOME },
    { label: 'Menu', value: ViewState.MENU },
    { label: 'About', value: ViewState.ABOUT },
    { label: 'Visit Us', value: ViewState.CONTACT },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-coffee-50/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onChangeView(ViewState.HOME)}
        >
          <div className="w-8 h-8 bg-coffee-800 text-white rounded-full flex items-center justify-center">
            <Coffee size={18} />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-coffee-900">
            HARU CAFE
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => onChangeView(link.value)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                currentView === link.value 
                  ? 'text-coffee-800 border-b-2 border-coffee-800' 
                  : 'text-coffee-600 hover:text-coffee-900'
              }`}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-coffee-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-coffee-50 border-t border-coffee-200 shadow-xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => {
                onChangeView(link.value);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left text-lg font-serif ${
                currentView === link.value ? 'text-coffee-800 font-bold' : 'text-coffee-600'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};