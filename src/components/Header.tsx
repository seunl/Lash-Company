import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/lashData';
import { Phone, Calendar, Menu, X, Sparkles, MapPin, Clock, Award } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Meet Sophia' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'candy-bar', label: 'Candy Bar', badge: 'Signature' },
    { id: 'gallery', label: 'Results' },
    { id: 'reviews', label: 'Reviews & Press' },
    { id: 'contact', label: 'Locations & Booking' },
  ];

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#121212] text-[#FFFBF7] py-2 px-4 border-b border-[#C9A86A]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs sm:text-[13px] tracking-wide">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#C9A86A] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
              Houston's Original Lash Studio Since 2007
            </span>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hidden md:inline text-stone-300">
              Instantly Waterproof & Oil-Proof • 4 Weeks Retention
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <a
              href="tel:7135205274"
              className="flex items-center gap-1.5 hover:text-[#C9A86A] transition-colors"
              title="Call The Lash Company"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span className="font-semibold text-stone-100">{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="hidden lg:inline text-stone-500">|</span>
            <span className="hidden lg:inline text-stone-300">
              Upper Kirby Flagship: 3109 Kirby Dr
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Luxury Navbar */}
      <nav className="bg-[#FFFBF7]/95 backdrop-blur-md border-b border-[#EADBC0]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNav('home')}
            className="text-left group cursor-pointer focus:outline-none"
            id="header-brand-logo"
          >
            <span className="block font-serif text-2xl sm:text-3xl tracking-tight text-[#121212] font-semibold group-hover:text-[#A88748] transition-colors">
              THE LASH COMPANY
            </span>
            <span className="block text-[10px] sm:text-[11px] tracking-[0.25em] text-[#A88748] uppercase font-medium">
              Life is Suite • Est. 2007 • Upper Kirby
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  id={`nav-link-${link.id}`}
                  className={`relative py-1 cursor-pointer transition-colors ${
                    isActive
                      ? 'text-[#121212] font-semibold'
                      : 'text-stone-600 hover:text-[#121212]'
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[9px] uppercase tracking-wider font-semibold rounded-full bg-[#F9E4E8] text-[#121212] border border-[#FF8FA3]/30">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A86A] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action: Book Now & Phone */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              id="header-book-now-button"
              className="relative overflow-hidden cursor-pointer bg-[#121212] hover:bg-[#2A2A2A] text-[#FFFBF7] px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#C9A86A]/50 shadow-md hover:shadow-lg transition-all group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#C9A86A]" />
                Book Your Set
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A86A]/20 to-transparent -translate-x-full group-hover:translate-x-full duration-700 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-2 text-xs font-semibold bg-[#121212] text-[#FFFBF7] rounded-full border border-[#C9A86A]/40"
              id="mobile-quick-book"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-stone-800 hover:bg-[#F9E4E8]/50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFBF7] border-b border-[#EADBC0] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="space-y-1 pb-3 border-b border-stone-200/70">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`w-full flex items-center justify-between text-left px-3 py-2.5 rounded-lg text-sm ${
                    currentPage === link.id
                      ? 'bg-[#F9E4E8] text-[#121212] font-semibold'
                      : 'text-stone-700 hover:bg-[#FFFBF7]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[10px] bg-white rounded-full text-[#121212] border border-[#FF8FA3]/30">
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Contact Information */}
            <div className="pt-2 text-xs text-stone-600 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A86A]" />
                <span>3109 Kirby Dr, Upper Kirby Houston</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9A86A]" />
                <span>Tues–Sat 10:00 AM – 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-stone-800 font-medium">
                <Award className="w-4 h-4 text-[#C9A86A]" />
                <span>Beyonce's Lash Artist • NovaLash Certified</span>
              </div>
              <div className="pt-2 flex gap-2">
                <a
                  href="tel:7135205274"
                  className="flex-1 py-2.5 text-center bg-stone-100 text-stone-900 rounded-lg text-xs font-semibold border border-stone-300"
                >
                  Call (713) 520-5274
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="flex-1 py-2.5 text-center bg-[#121212] text-white rounded-lg text-xs font-semibold"
                >
                  Book Online
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
