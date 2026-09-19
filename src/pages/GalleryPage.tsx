import React, { useState } from 'react';
import { PageId, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/lashData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { LightboxModal } from '../components/LightboxModal';
import {
  Sparkles,
  Calendar,
  Eye,
  Filter,
  Layers,
  Play,
  CheckCircle2,
  ZoomIn
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  const categories = ['All', 'American Volume', 'Classic', 'London Volume', 'Candied Lashes'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full bg-[#FFFBF7] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#121212] tracking-tight leading-[1.1]">
            Transformations & Results
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Real clients. Real Houston humidity. Real 4-week retention. Examine the unretouched technical isolation and fan symmetry produced in our Upper Kirby studio.
          </p>
        </div>

        {/* 1. INTERACTIVE DRAG COMPARISON SLIDER */}
        <div className="mb-20">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1200&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop"
            title="Interactive Split Reveal"
            subtitle="Drag across the divider to inspect the dense, fluffy lash line Sophia Navarro's American Volume™ creates."
          />
        </div>

        {/* 2. FILTER CONTROLS & BEFORE/AFTER TOGGLE */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EADBC0]">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#121212] text-[#FFFBF7] shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-[#F9E4E8] border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Toggle: Before / After view */}
          <div className="flex items-center gap-2 text-xs font-semibold bg-white p-1 rounded-full border border-stone-200 w-fit">
            <span className="text-stone-400 pl-3 text-[11px] uppercase tracking-wider">Show:</span>
            <button
              onClick={() => setViewMode('after')}
              className={`px-3 py-1 rounded-full cursor-pointer ${
                viewMode === 'after' ? 'bg-[#121212] text-white' : 'text-stone-600'
              }`}
            >
              After Set
            </button>
            <button
              onClick={() => setViewMode('before')}
              className={`px-3 py-1 rounded-full cursor-pointer ${
                viewMode === 'before' ? 'bg-[#121212] text-white' : 'text-stone-600'
              }`}
            >
              Natural Before
            </button>
          </div>
        </div>

        {/* 3. FILTERED GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredItems.map((item) => {
            const displayImg = viewMode === 'after' ? item.afterImage : item.beforeImage;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#EADBC0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Zoom trigger */}
                  <div
                    onClick={() => setActiveLightboxItem(item)}
                    className="relative aspect-[4/3] bg-stone-900 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={displayImg}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#121212]/80 backdrop-blur-md text-[#FFFBF7] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#C9A86A]/30">
                      {item.category}
                    </div>

                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-md font-mono">
                      {viewMode === 'after' ? 'Done: ' + item.curl : 'Natural Lash'}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#121212]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A88748] font-medium mt-0.5">
                      By {item.artist}
                    </p>
                    <p className="text-stone-600 text-xs mt-2.5 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Quick Specs */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                      <span>Lengths: {item.length}</span>
                      <span>Diameter: {item.diameter}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenBooking(
                      item.category === 'Classic' ? 'classic-lashes' :
                      item.category === 'American Volume' ? 'american-volume' :
                      item.category === 'London Volume' ? 'london-volume' : 'candied-lashes'
                    )}
                    className="w-full py-2.5 bg-[#FFFBF7] hover:bg-[#121212] text-[#121212] hover:text-white font-semibold text-xs tracking-wider uppercase rounded-xl border border-stone-300 hover:border-[#121212] transition-colors cursor-pointer text-center"
                  >
                    Book This Style
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. VIDEO LOOP & APPLICATION CRAFT SHOWCASE */}
        <div className="mb-20 bg-[#121212] text-white rounded-3xl p-8 sm:p-14 border border-[#C9A86A]/30 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 fill-[#C9A86A] text-[#C9A86A]" />
                Micro-Isolation in Motion
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                The Anatomy of a Perfect NovaLash Bond
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Notice how the artist never allows adhesive to touch the sensitive eyelid skin. Every fiber is attached 0.5mm away from the lash margin to safeguard follicle circulation. The result is zero irritation, zero heaviness, and total comfort.
              </p>
              
              <div className="space-y-2 pt-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A86A]" />
                  <span>Autoclave-sterilized micro forceps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A86A]" />
                  <span>Formaldehyde-free medical adhesive</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A86A]" />
                  <span>Instant cure: shower, swim, or exercise today</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-8 py-3.5 bg-[#C9A86A] hover:bg-[#A88748] text-[#121212] font-semibold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer"
                >
                  Book Your Lash Set
                </button>
              </div>
            </div>

            {/* Video Aesthetic Frame */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-stone-700 shadow-2xl aspect-[16/10] bg-stone-900 group">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                alt="Lash application motion reel"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl">
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-[11px] text-stone-200 px-3 py-1 rounded-md">
                Master Application Reel • Upper Kirby Studio
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* High-Resolution Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onBookItem={(sId) => {
          setActiveLightboxItem(null);
          onOpenBooking(sId);
        }}
      />
    </div>
  );
};
