import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/lashData';
import { Phone, Mail, MapPin, Instagram, Facebook, Sparkles, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-[#121212] text-[#FFFBF7] border-t border-[#C9A86A]/20 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top VIP Invitation Bar */}
        <div className="bg-[#1C1C1C] border border-[#C9A86A]/30 rounded-3xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A86A]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                The Life is Suite VIP Club
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mt-2 font-semibold">
                Receive Sweet Privileges & Priority Booking
              </h3>
              <p className="text-stone-400 text-sm mt-2">
                Be the first to secure prime holiday appointment blocks with Sophia Navarro, seasonal candied lash menu updates, and complimentary candy bar reserve releases.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 bg-[#262626] border border-[#C9A86A] text-[#FFFBF7] px-6 py-3.5 rounded-full text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A86A]" />
                  <span>Welcome to Life is Suite. Check your inbox for your welcome sweet treat!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address..."
                    className="px-5 py-3 rounded-full bg-[#121212] border border-stone-700 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-[#C9A86A] flex-1"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#C9A86A] hover:bg-[#A88748] text-[#121212] font-semibold text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer"
                  >
                    Join VIP
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-stone-800">
          
          {/* Col 1: Brand & Heritage */}
          <div className="space-y-4">
            <h4 className="font-serif text-2xl font-bold tracking-tight text-white">
              THE LASH COMPANY
            </h4>
            <p className="text-xs tracking-[0.2em] uppercase text-[#C9A86A]">
              Life is Suite Lash Company LLC
            </p>
            <p className="text-stone-400 text-sm leading-relaxed">
              Founded in 2007 by celebrity lash artist Sophia Navarro. Houston's longest-standing dedicated lash studio. Pioneering the NovaLash technique and American Volume worldwide.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-[#C9A86A] hover:border-[#C9A86A] transition-colors"
                aria-label="Instagram @lashcohouston"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/TheLashCo"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-[#C9A86A] hover:border-[#C9A86A] transition-colors"
                aria-label="Facebook TheLashCo"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300 hover:text-[#C9A86A] hover:border-[#C9A86A] transition-colors"
                aria-label="Email Studio"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Studio Locations & NAP */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C9A86A]" />
              Houston Studios (NAP)
            </h4>
            
            {/* Upper Kirby Flagship */}
            <div className="bg-[#1C1C1C] p-3.5 rounded-xl border border-stone-800 space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C9A86A] block">
                Flagship Studio • Upper Kirby
              </span>
              <p className="text-stone-200 text-sm font-medium">3109 Kirby Drive</p>
              <p className="text-stone-400 text-xs">Houston, TX 77098 (also 3019 Kirby Dr listing)</p>
              <p className="text-stone-500 text-[11px]">Free private parking lot behind studio</p>
            </div>

            {/* The Heights Location */}
            <div className="bg-[#1C1C1C] p-3.5 rounded-xl border border-stone-800 space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C9A86A] block">
                Heights Studio
              </span>
              <p className="text-stone-200 text-sm font-medium">1051 Heights Blvd, Suite 250</p>
              <p className="text-stone-400 text-xs">Houston, TX 77008</p>
              <p className="text-stone-500 text-[11px]">Covered garage parking available</p>
            </div>
          </div>

          {/* Col 3: Hours & Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-semibold">
              Hours & Inquiries
            </h4>
            <div className="text-sm space-y-2 text-stone-300">
              <div className="flex justify-between border-b border-stone-800/80 pb-1.5">
                <span className="text-stone-400">Tuesday – Saturday</span>
                <span className="font-medium text-white">10:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-stone-800/80 pb-1.5">
                <span className="text-stone-400">Sunday & Monday</span>
                <span className="text-[#FF8FA3]">Closed (Rest & Training)</span>
              </div>
            </div>

            <div className="pt-2 space-y-2 text-sm">
              <a
                href="tel:7135205274"
                className="flex items-center gap-2.5 text-stone-200 hover:text-[#C9A86A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A86A]" />
                <span className="font-semibold">{BUSINESS_INFO.phoneDisplay} / 713-520-5274</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2.5 text-stone-300 hover:text-[#C9A86A] transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-[#C9A86A]" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full mt-3 py-2.5 bg-stone-800 hover:bg-[#C9A86A] hover:text-stone-900 text-white font-medium text-xs tracking-wider uppercase rounded-xl transition-all border border-stone-700 cursor-pointer"
            >
              Book an Appointment
            </button>
          </div>

          {/* Col 4: Quick Navigation & Pillars */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white font-semibold">
              The Experience
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sophia Navarro Story & Credentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Classic vs American Volume vs London
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('candy-bar')}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#C9A86A]"
                >
                  Life is Suite Candy Bar Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Before & After Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Voyage Houston & 4.6★ Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Driving Directions & Map
                </button>
              </li>
            </ul>

            <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-400 leading-relaxed">
              <span className="text-[#C9A86A] font-semibold block mb-0.5">NovaLash Certified Platinum Partner</span>
              Refusing service on compromised ocular tissue. Optometrist reviewed protocols.
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} The Lash Company / Life is Suite Lash Company LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Houston, TX</span>
            <span>Upper Kirby & The Heights</span>
            <span>American Volume™ is a trademark of Sophia Navarro & NovaLash</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
