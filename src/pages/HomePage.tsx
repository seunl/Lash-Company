import React, { useState } from 'react';
import { PageId, GalleryItem } from '../types';
import { BUSINESS_INFO, SERVICES, THREE_PILLARS, REVIEWS, GALLERY_ITEMS } from '../data/lashData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { LightboxModal } from '../components/LightboxModal';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Droplets,
  Clock,
  Award,
  Star,
  CheckCircle2,
  Heart,
  Instagram,
  Eye,
  Candy,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION: Full-screen editorial visual */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center bg-[#121212] text-[#FFFBF7] overflow-hidden">
        {/* Background Editorial High-Res Lash Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=2000&auto=format&fit=crop"
            alt="Flawless American Volume Eyelash Extensions at The Lash Company Houston"
            className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/90 via-[#121212]/40 to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            
            {/* Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-[#C9A86A]/40 backdrop-blur-md mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold">
                Upper Kirby • Houston's Original Lash Studio Since 2007
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#FFFBF7] leading-[1.08]">
              Where Lash Dreams <br />
              <span className="italic font-normal text-[#F9E4E8]">Come True.</span>
            </h1>

            {/* Sub-headline with USPs */}
            <p className="mt-6 text-base sm:text-xl text-stone-300 font-light leading-relaxed max-w-2xl">
              Instantly oil-proof and waterproof from minute one. Co-founded by Master Trainer Sophia Navarro and NovaLash CEO Sophy Merszei. Four effortless weeks between touchups.
            </p>

            {/* Social Proof Stats Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 py-3 px-5 rounded-2xl bg-[#1C1C1C]/80 backdrop-blur-md border border-[#C9A86A]/30 w-fit text-xs text-stone-200">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <div className="flex text-[#C9A86A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A86A]" />
                  ))}
                </div>
                <span>4.6 Stars (41+ Reviews)</span>
              </div>
              <span className="text-stone-600 hidden sm:inline">•</span>
              <span className="font-medium text-stone-300">5,000+ Clients Lashed</span>
              <span className="text-stone-600 hidden sm:inline">•</span>
              <span className="text-[#C9A86A] font-semibold">Beyonce's Lash Artist</span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                id="hero-book-btn"
                className="px-8 py-4 bg-[#C9A86A] hover:bg-[#A88748] text-[#121212] font-semibold text-xs tracking-wider uppercase rounded-full shadow-[0_10px_30px_rgba(201,168,106,0.3)] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#121212]" />
                <span>Book Your Lash Set</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium text-xs tracking-wider uppercase rounded-full border border-stone-600 transition-all text-center cursor-pointer"
              >
                View Services & Pricing ($175–$300)
              </button>
            </div>

            {/* Quick Micro Proof Point */}
            <div className="mt-6 flex items-center gap-3 text-[11px] text-stone-400">
              <span className="flex items-center gap-1 text-stone-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A86A]" /> No 24-hr shower wait
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-stone-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A86A]" /> Complimentary candy bar
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-stone-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A86A]" /> 65–75 lashes per eye
              </span>
            </div>

          </div>
        </div>

        {/* Bottom subtle gradient edge */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#FFFBF7] to-transparent pointer-events-none" />
      </section>

      {/* 2. TRUST BADGES BAR */}
      <section className="bg-[#FFFBF7] py-10 border-b border-[#EADBC0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-2xl bg-white border border-[#EADBC0]/40 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FCF1F3] text-[#121212] flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-[#A88748]" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#121212]">NovaLash Certified</h4>
              <p className="text-xs text-stone-500 mt-1">U.S. Patent-Pending Physician Formulated</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#EADBC0]/40 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FCF1F3] text-[#121212] flex items-center justify-center mb-3">
                <Droplets className="w-6 h-6 text-[#A88748]" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#121212]">Waterproof Day 1</h4>
              <p className="text-xs text-stone-500 mt-1">Cry, swim, run, shower immediately</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#EADBC0]/40 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FCF1F3] text-[#121212] flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-[#A88748]" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#121212]">4 Weeks Retention</h4>
              <p className="text-xs text-stone-500 mt-1">Only once a month touchups required</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#EADBC0]/40 shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#FCF1F3] text-[#121212] flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6 text-[#A88748]" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#121212]">Doctor-Reviewed Safety</h4>
              <p className="text-xs text-stone-500 mt-1">Optometry lectures & zero ocular damage</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW GRID: 4 cards with hover lift */}
      <section className="py-20 lg:py-28 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold block mb-2">
                Curated Luxury Menu
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-[#121212] leading-tight">
                Lash Artistry Designed for Upper Kirby Sophistication
              </h2>
            </div>
            <div className="mt-6 md:mt-0">
              <button
                onClick={() => onNavigate('services')}
                className="text-xs uppercase tracking-wider font-bold text-[#121212] hover:text-[#A88748] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Compare All 4 Styles & Pricing</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#EADBC0]/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    {service.badge && (
                      <div className="absolute top-3 left-3 bg-[#121212]/80 backdrop-blur-md text-[#FFFBF7] text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-[#C9A86A]/40">
                        {service.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] text-[#C9A86A] font-medium block">
                        Full Set: Starting at ${service.priceFullSet}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-[#121212]">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#A88748] font-medium mt-1">
                      {service.tagline}
                    </p>
                    <p className="text-stone-600 text-xs mt-3 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-stone-100 space-y-1.5 text-[11px] text-stone-500">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium text-stone-800">{service.durationFullSet}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Touchup Refill:</span>
                        <span className="font-medium text-stone-800">Starting at ${service.priceFill}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Retention:</span>
                        <span className="font-bold text-[#121212]">{service.retention}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="w-full py-3 bg-[#121212] group-hover:bg-[#C9A86A] text-white group-hover:text-[#121212] text-xs font-semibold tracking-wider uppercase rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Book {service.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY THE LASH COMPANY: The 3 Pillars */}
      <section className="py-20 bg-[#FCF1F3] border-y border-[#F9E4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold">
              The Gold Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212] mt-2">
              Built on Three Immutable Pillars
            </h2>
            <p className="text-stone-600 text-sm mt-3">
              When Sophia Navarro co-founded The Lash Company in 2007, she resolved never to compromise health for speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {THREE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#F9E4E8] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl text-[#C9A86A] font-bold block mb-4">
                    0{idx + 1}.
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#121212]">
                    {pillar.title}
                  </h3>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#A88748] mt-1 mb-4">
                    {pillar.subtitle}
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <span className="text-[11px] font-bold text-[#121212] bg-[#FCF1F3] px-3 py-1.5 rounded-full inline-block">
                    ✓ {pillar.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. BEFORE & AFTER INTERACTIVE LIGHTBOX & SLIDER */}
      <section className="py-20 lg:py-28 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Interactive Drag Reveal Component */}
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop"
            title="The Sophia Navarro Signature Difference"
            subtitle="Drag the slider to examine how American Volume™ achieves featherweight density with zero damage to natural lashes."
          />

          {/* Gallery Preview Grid */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold">
                  Studio Results
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
                  Real Transformations from Upper Kirby
                </h3>
              </div>
              <button
                onClick={() => onNavigate('gallery')}
                className="text-xs uppercase tracking-wider font-bold text-[#121212] hover:text-[#A88748] flex items-center gap-1 cursor-pointer"
              >
                <span>View Complete Gallery</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedGalleryItem(item)}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all border border-[#EADBC0]"
                >
                  <img
                    src={item.afterImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                    <span className="text-[10px] font-bold text-[#C9A86A]">{item.category}</span>
                    <span className="text-xs font-semibold truncate">{item.title}</span>
                    <span className="text-[9px] text-stone-300 mt-0.5">Click for mapping specs</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. CANDY BAR EXPERIENCE SPOTLIGHT */}
      <section className="py-20 bg-[#121212] text-[#FFFBF7] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A86A]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#242424] border border-[#FF8FA3]/30 text-xs text-[#FF8FA3]">
                <Candy className="w-3.5 h-3.5" />
                <span>The Life is Suite™ Differentiator</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-semibold leading-tight text-white">
                The First Ever Lash Salon with a Candy Bar.
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                When Sophia Navarro envisioned her salon, she wanted appointments to feel like a decadent European retreat, not a clinical chore. The name <span className="text-[#F9E4E8] font-semibold">Life is Suite</span> was born — an affectionate pun celebrating both our private luxury suites and the sweet joys of life.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-stone-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A86A] mt-0.5 shrink-0" />
                  <span>Complimentary international candies: German sour drops, Swedish berry gummies, Swiss dark chocolates, Japanese crisps.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A86A] mt-0.5 shrink-0" />
                  <span>Paired with San Pellegrino sparkling mineral water or warm lavender teas.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A86A] mt-0.5 shrink-0" />
                  <span>Relax on ergonomic heated plush memory foam lash beds while you drift into slumber.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('candy-bar')}
                  className="px-7 py-3.5 bg-[#C9A86A] hover:bg-[#A88748] text-[#121212] font-semibold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-md"
                >
                  Explore The Candy Bar Experience →
                </button>
              </div>
            </div>

            {/* Candy Bar Imagery */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border border-stone-700 shadow-xl h-60">
                  <img
                    src="https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?q=80&w=800&auto=format&fit=crop"
                    alt="Artisan Confectionery at The Lash Company"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-[#1C1C1C] rounded-2xl border border-stone-800 text-center">
                  <span className="font-serif text-lg font-bold text-[#C9A86A]">100% Complimentary</span>
                  <p className="text-[11px] text-stone-400 mt-1">Included with every single service</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 bg-[#1C1C1C] rounded-2xl border border-stone-800 text-center">
                  <span className="font-serif text-lg font-bold text-white">Imported Weekly</span>
                  <p className="text-[11px] text-stone-400 mt-1">Direct from Switzerland & Scandinavia</p>
                </div>
                <div className="rounded-3xl overflow-hidden border border-stone-700 shadow-xl h-60">
                  <img
                    src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop"
                    alt="Candies and luxury lash care"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL */}
      <section className="py-20 lg:py-28 bg-[#FFFBF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FCF1F3] text-xs font-semibold text-stone-800 mb-6">
            <Star className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]" />
            <span>Birdeye 4.6 Stars (41+ Reviews) • Google Verified</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212]">
            Loved by Houston High Society & Hollywood Stars
          </h2>

          {/* Active Testimonial Card */}
          <div className="mt-12 bg-white p-8 sm:p-12 rounded-3xl border border-[#EADBC0] shadow-[0_15px_35px_rgba(0,0,0,0.04)] relative">
            <div className="flex justify-center text-[#C9A86A] mb-6">
              {[...Array(REVIEWS[activeReviewIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C9A86A]" />
              ))}
            </div>

            <blockquote className="font-serif text-lg sm:text-2xl text-[#121212] font-normal leading-relaxed italic">
              "{REVIEWS[activeReviewIndex].comment}"
            </blockquote>

            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="font-bold text-stone-900 text-sm block">
                  {REVIEWS[activeReviewIndex].author}
                </span>
                <span className="text-xs text-stone-500">
                  {REVIEWS[activeReviewIndex].service} • Verified {REVIEWS[activeReviewIndex].source} Review
                </span>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                      activeReviewIndex === idx
                        ? 'bg-[#121212] scale-125'
                        : 'bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. INSTAGRAM FEED: @lashcohouston */}
      <section className="py-16 bg-[#FFFBF7] border-t border-[#EADBC0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold flex items-center gap-1.5">
                <Instagram className="w-4 h-4 text-[#C9A86A]" /> Follow The Artistry
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#121212]">
                @lashcohouston on Instagram
              </h3>
            </div>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 sm:mt-0 text-xs font-bold uppercase tracking-wider text-[#A88748] hover:text-[#121212]"
            >
              Follow Studio Feed →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop',
                caption: 'Sophia’s patented American Volume™ fresh set for our Upper Kirby bride 🕊️'
              },
              {
                img: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=600&auto=format&fit=crop',
                caption: 'Zero clumping. 1:1 isolation. 4-week retention is science, not luck ✨'
              },
              {
                img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop',
                caption: 'London Volume midnight density. Waterproof the second you leave 🖤'
              },
              {
                img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop',
                caption: 'Life is Suite candy bar restocked with Swiss sea salt truffles! 🍬'
              }
            ].map((feed, i) => (
              <a
                key={i}
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden border border-[#EADBC0] shadow-sm block"
              >
                <img
                  src={feed.img}
                  alt={feed.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white text-xs">
                  <div className="flex justify-end">
                    <Instagram className="w-5 h-5 text-[#C9A86A]" />
                  </div>
                  <p className="line-clamp-3 text-[11px] leading-relaxed">{feed.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="py-20 bg-[#121212] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold">
            Ready for Effortless Mornings?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold mt-3 mb-4 leading-tight">
            Reserve Your Lash Appointment at Houston's Original Studio
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Experience 4-week retention, doctor-reviewed optometric safety, and the complimentary Life is Suite candy bar. $175–$300 full sets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-[#C9A86A] hover:bg-[#A88748] text-[#121212] font-semibold text-xs tracking-wider uppercase rounded-full shadow-lg transition-all cursor-pointer"
            >
              Book Your Lash Set
            </button>
            <a
              href="tel:7135205274"
              className="w-full sm:w-auto px-8 py-4 bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs tracking-wider uppercase rounded-full border border-stone-700 transition-all text-center"
            >
              Call (713) 520-LASH
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onBookItem={(sId) => {
          setSelectedGalleryItem(null);
          onOpenBooking(sId);
        }}
      />
    </div>
  );
};
