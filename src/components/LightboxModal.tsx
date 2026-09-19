import React from 'react';
import { GalleryItem } from '../types';
import { X, Calendar, Sparkles, Check, User } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onBookItem: (serviceId?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onBookItem,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FFFBF7] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A86A]/30 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: High-Res Image Showcase */}
        <div className="md:w-1/2 bg-black relative min-h-[300px] sm:min-h-[400px]">
          <img
            src={item.afterImage}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-[#C9A86A] text-xs font-semibold px-3 py-1 rounded-full border border-[#C9A86A]/30">
            {item.category}
          </div>
        </div>

        {/* Right: Technical Specs & Booking Trigger */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A86A] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Lash Architecture Breakdown
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl text-[#121212] font-semibold mt-2">
              {item.title}
            </h3>

            <p className="text-stone-600 text-sm mt-3 leading-relaxed">
              {item.description}
            </p>

            {/* Technical Mapping Specs Grid */}
            <div className="mt-6 bg-[#FCF1F3] border border-[#F9E4E8] rounded-2xl p-4 space-y-2.5 text-xs text-stone-800">
              <div className="flex justify-between border-b border-[#F9E4E8] pb-1.5">
                <span className="text-stone-500 font-medium">Curl Profile:</span>
                <span className="font-semibold text-stone-900">{item.curl}</span>
              </div>
              <div className="flex justify-between border-b border-[#F9E4E8] pb-1.5">
                <span className="text-stone-500 font-medium">Fiber Diameter:</span>
                <span className="font-semibold text-stone-900">{item.diameter}</span>
              </div>
              <div className="flex justify-between border-b border-[#F9E4E8] pb-1.5">
                <span className="text-stone-500 font-medium">Mapped Lengths:</span>
                <span className="font-semibold text-stone-900">{item.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500 font-medium flex items-center gap-1">
                  <User className="w-3 h-3 text-[#C9A86A]" /> Artist Level:
                </span>
                <span className="font-semibold text-[#121212]">{item.artist}</span>
              </div>
            </div>

            {/* Retention & Water Benefits */}
            <div className="mt-4 space-y-1.5 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <span>Instantly oil & waterproof on Day 1 (NovaLash adhesive)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <span>Guaranteed 4 weeks between touchups</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C9A86A] shrink-0" />
                <span>Includes Life is Suite complimentary candy bar tasting</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-4 border-t border-stone-200">
            <button
              onClick={() => {
                onClose();
                onBookItem(item.category === 'Classic' ? 'classic-lashes' : item.category === 'American Volume' ? 'american-volume' : item.category === 'London Volume' ? 'london-volume' : 'candied-lashes');
              }}
              className="w-full py-3.5 bg-[#121212] hover:bg-[#2A2A2A] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 border border-[#C9A86A]/40 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C9A86A]" />
              Book This Exact Look ($185 – $295)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
