import React, { useState } from 'react';
import { PageId } from '../types';
import { CANDY_BAR_ITEMS, BUSINESS_INFO } from '../data/lashData';
import {
  Sparkles,
  Candy,
  Heart,
  Calendar,
  Coffee,
  CheckCircle2,
  Gift,
  Smile,
  ArrowRight
} from 'lucide-react';

interface CandyBarPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const CandyBarPage: React.FC<CandyBarPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedCandyIndex, setSelectedCandyIndex] = useState(0);
  const activeCandy = CANDY_BAR_ITEMS[selectedCandyIndex];

  return (
    <div className="w-full bg-[#FFFBF7] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCF1F3] border border-[#FF8FA3]/40 text-xs font-semibold text-[#121212] mb-3">
            <Candy className="w-3.5 h-3.5 text-[#FF8FA3]" />
            <span>Signature Studio Differentiator Since 2007</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#121212] tracking-tight leading-[1.1]">
            The Life is Suite™ Candy Bar
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-stone-600 italic mt-3">
            Houston's First Ever Eyelash Salon with a Complimentary International Candy Bar.
          </p>
        </div>

        {/* Feature Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#121212] font-semibold">
              The Story of the "Life is Suite" Pun
            </h2>

            <p>
              When founder Sophia Navarro expanded into her flagship salon at 3109 Kirby Drive in Houston's Upper Kirby district, she was determined to overturn the sterile, clinical feel of standard medical offices and strip mall franchises.
            </p>

            <p>
              She designed the studio around private, whisper-quiet treatment suites. Reflecting on the joy and renewal women feel when they look in the mirror after a fresh set, the name <strong>"Life is Suite"</strong> was coined — a clever double entendre honoring both our serene private suites and life's sweetest, most luxurious moments.
            </p>

            <p>
              To bring that pun delightfully to life, Sophia established the <strong>First-Ever Complimentary Candy Bar in an Eyelash Salon</strong> in the United States. Before slipping onto our heated memory foam lash beds, every client is greeted with an exquisite tiered presentation of artisanal international candies imported weekly from Europe, Scandinavia, and Japan.
            </p>

            <div className="bg-[#FCF1F3] p-6 rounded-3xl border border-[#F9E4E8] space-y-3">
              <span className="font-serif text-lg font-bold text-[#121212] block">
                Always 100% Complimentary
              </span>
              <p className="text-xs sm:text-sm text-stone-700">
                Whether you are coming in for a 4-week American Volume touchup or a dramatic wedding set, your sweet tasting bag and chilled San Pellegrino are on the house.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#121212] hover:bg-[#C9A86A] text-white hover:text-[#121212] text-xs uppercase tracking-wider font-semibold rounded-full shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Session & Taste The Suite Life</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-[#EADBC0] shadow-xl h-96">
              <img
                src="https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=1000&auto=format&fit=crop"
                alt="Life is Suite Candy Bar at The Lash Company"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider text-[#C9A86A] font-bold block">
                  Upper Kirby Flagship Bar
                </span>
                <p className="text-sm font-serif italic text-stone-200">
                  Imported confections restocked fresh every Tuesday morning
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#EADBC0] h-44">
                <img
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=600&auto=format&fit=crop"
                  alt="Swiss dark chocolate and berry treats"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#EADBC0] h-44">
                <img
                  src="https://images.unsplash.com/photo-1575224300306-1b8da36134ec?q=80&w=600&auto=format&fit=crop"
                  alt="Gourmet candies in glass jars"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* 2. INTERACTIVE CONFECTIONERY TASTING MENU */}
        <div className="mb-24 bg-white p-8 sm:p-14 rounded-3xl border border-[#EADBC0] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold">
              The Tasting Flight
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212] mt-1">
              Explore Our International Confectionery Roster
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              Click through our signature sweets to preview the curated flavor profiles waiting for you.
            </p>
          </div>

          {/* Candy Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {CANDY_BAR_ITEMS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCandyIndex(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCandyIndex === idx
                    ? 'bg-[#121212] text-[#FFFBF7] shadow-md'
                    : 'bg-[#FCF1F3] text-stone-800 hover:bg-[#F9E4E8]'
                }`}
              >
                {item.name.split('&')[0]}
              </button>
            ))}
          </div>

          {/* Highlighted Candy Tasting Card */}
          <div className="max-w-3xl mx-auto bg-[#FFFBF7] p-8 rounded-3xl border border-[#C9A86A]/40 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EADBC0] pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A88748] font-bold">
                  Imported From: {activeCandy.origin}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#121212] mt-0.5">
                  {activeCandy.name}
                </h3>
              </div>
              <div className="px-3.5 py-1 rounded-full bg-[#FCF1F3] text-[#121212] text-xs font-bold w-fit">
                Complimentary
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-stone-900 block mb-1">Flavor Notes & Texture:</span>
                <p className="text-stone-600 leading-relaxed">{activeCandy.tasteProfile}</p>
              </div>
              <div>
                <span className="font-bold text-stone-900 block mb-1">Beverage Pairing:</span>
                <p className="text-stone-600 leading-relaxed">{activeCandy.pairWith}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. THE SENSORY PSYCHOLOGY: Why Sweetness Matters */}
        <div className="bg-[#121212] text-white p-8 sm:p-14 rounded-3xl border border-[#C9A86A]/30">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold">
              The Luxury Ritual
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
              Self-Care That Awakens Every Sense
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              When you visit The Lash Company, you aren't just getting your lashes filled — you are stepping away from Houston traffic, phone notifications, and daily stress. A quiet room, a sweet confection on your tongue, soothing aromatherapy, and two hours of weightless pampering. You wake up with mesmerizing lashes and a renewed spirit.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-[#C9A86A] hover:bg-[#A88748] text-[#121212] font-semibold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer"
              >
                Experience Life is Suite ($175–$300)
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider rounded-full border border-stone-600 transition-all cursor-pointer"
              >
                View Lash Services Menu
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
