import React from 'react';
import { ViewState } from '../types';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/431/1920/1080" 
          alt="Haru Cafe Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 tracking-widest uppercase border border-white/20">
          Est. 2024
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          HARU CAFE
        </h1>
        <p className="text-lg md:text-2xl text-coffee-50 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          A sanctuary for coffee lovers. Experience serenity, artisanal blends, and the warmth of a perfect cup in the heart of the city.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" onClick={onExplore} className="bg-white text-coffee-900 hover:bg-coffee-50">
            View Menu
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-coffee-900">
             Our Story <ArrowRight size={18} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};