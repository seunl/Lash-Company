import React from 'react';
import { Phone, Calendar, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lashData';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick mobile booking"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-lg border-t border-[#C9A86A]/40 px-4 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.3)]"
    >
      <div className="flex items-center justify-between gap-3">
        {/* Info teaser */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-white tracking-wider uppercase">
              Book in 60 Seconds
            </span>
            <span className="flex items-center text-[10px] text-[#C9A86A] font-semibold bg-[#222] px-1.5 py-0.5 rounded">
              <Star className="w-2.5 h-2.5 fill-[#C9A86A] mr-0.5" />
              4.6★
            </span>
          </div>
          <span className="text-[10px] text-stone-400">
            Waterproof Day 1 • 4-Wk Touchup
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-10 h-10 rounded-full bg-stone-800 border border-stone-600 flex items-center justify-center text-stone-200 active:scale-95 transition-transform"
            aria-label="Call studio immediately"
          >
            <Phone className="w-4 h-4 text-[#C9A86A]" />
          </a>

          <button
            onClick={onOpenBooking}
            className="relative overflow-hidden cursor-pointer bg-gradient-to-r from-[#C9A86A] to-[#EADBC0] text-[#121212] font-bold text-xs px-5 py-2.5 rounded-full shadow-md active:scale-95 transition-transform uppercase tracking-wider"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Book Set
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};
