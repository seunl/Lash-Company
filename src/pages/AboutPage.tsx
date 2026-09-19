import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, TIMELINE, THREE_PILLARS } from '../data/lashData';
import {
  Sparkles,
  Award,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Quote,
  Star,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full bg-[#FFFBF7] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            The Founder's Legacy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#121212] tracking-tight leading-[1.1]">
            Meet Sophia Navarro
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-stone-600 italic mt-3">
            NovaLash VP of Global Education, Creator of American Volume™, and Master Lash Artist to Icons.
          </p>
        </div>

        {/* Editorial Story Grid: Sophia Portrait + Longform Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Portrait & Credentials Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#EADBC0] shadow-xl bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                alt="Sophia Navarro (Joni Rae Russell) - Founder of The Lash Company Houston"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#C9A86A] font-semibold block">
                  Sophia Navarro (Joni Rae Russell)
                </span>
                <span className="text-sm font-serif italic text-stone-200">
                  Founder & Master Extensionist
                </span>
              </div>
            </div>

            {/* Credentials Callout Card */}
            <div className="bg-[#FCF1F3] border border-[#F9E4E8] rounded-3xl p-6 space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#121212] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#A88748]" />
                Industry Distinctions
              </h3>

              <ul className="space-y-2.5 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                  <span><strong>NovaLash VP of Global Education</strong> — Formulating international safety curricula and certifying master trainers worldwide.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                  <span><strong>Inventor of American Volume™</strong> — The textured, multi-length lash bouquet technique now practiced on six continents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                  <span><strong>Celebrity Clientele</strong> — Personally flown to style global music icons including Beyonce Knowles, Hollywood actresses, and international jetsetters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                  <span><strong>Houston Pioneer (2007)</strong> — Co-founded the city's very first dedicated lash studio at 3109 Kirby Drive.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: The Complete Longform Story */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
            
            <div className="bg-white p-8 rounded-3xl border border-[#EADBC0] shadow-sm mb-6">
              <Quote className="w-8 h-8 text-[#C9A86A] mb-3 opacity-60" />
              <p className="font-serif text-lg sm:text-xl text-[#121212] italic leading-snug">
                "In this industry, there is no shortcut for medical precision. If we compromise ocular health for speed, we have failed. That is why our artists train for months before touching a client's eyes."
              </p>
              <span className="block mt-4 text-xs uppercase tracking-widest text-[#A88748] font-semibold">
                — Sophia Navarro
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#121212] font-semibold pt-2">
              From Independent Makeup Artist to Global Lash Authority
            </h2>

            <p>
              In 2004, Sophia Navarro (known publicly in Houston arts as Joni Rae Russell) was working as an independent freelance makeup artist. Seeking a sustainable, high-craft service that could create lasting transformation for her clients, she enrolled in the <strong>second-ever eyelash extension training class in history</strong>, taught by NovaLash.
            </p>

            <p>
              The response was immediate and overwhelming. Within six months, Sophia was so booked that she walked away from traditional makeup entirely. By 2005, she was seeing nine clients a day in her private studio, amassing a 2-month waiting list and more than 200 fiercely loyal clients in her first twelve months.
            </p>

            <p>
              Word of her meticulous 1:1 lash isolation spread far beyond Texas. Soon, clients were flying into Houston from Los Angeles, New York City, and Miami. Sophia was tapped for international red-carpet travel to lash Hollywood A-listers and global music icons — including styling <strong>Beyonce Knowles</strong>.
            </p>

            <h3 className="font-serif text-xl sm:text-2xl text-[#121212] font-semibold pt-4">
              Co-Founding The Lash Company with NovaLash CEO Sophy Merszei
            </h3>

            <p>
              Recognizing the need for a sanctuary dedicated exclusively to eyelash extensions, Sophia partnered in 2007 with <strong>Sophy Merszei</strong>, the acclaimed cosmetic chemist, biologist, and CEO of NovaLash. Together, they established <strong>The Lash Company</strong> (Life is Suite Lash Company LLC) at 3109 Kirby Drive in Houston's prestigious Upper Kirby district.
            </p>

            <p>
              The studio became the official global "test kitchen" and flagship laboratory for NovaLash Signature Studios worldwide. Every breakthrough formulation — from the instantly oil-proof and waterproof platinum bond to medical-grade hygiene protocols — was tested, refined, and perfected under Sophia's watchful eyes on Kirby Drive.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#121212] hover:bg-[#2A2A2A] text-[#FFFBF7] text-xs uppercase tracking-wider font-semibold rounded-full shadow-md transition-all cursor-pointer flex items-center gap-2 border border-[#C9A86A]/40"
              >
                <Calendar className="w-4 h-4 text-[#C9A86A]" />
                <span>Reserve Appointment with Sophia's Team</span>
              </button>
            </div>

          </div>

        </div>

        {/* TIMELINE: 2004 to Present */}
        <div className="my-24 bg-white p-8 sm:p-14 rounded-3xl border border-[#EADBC0] shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold">
              The Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212] mt-1">
              Two Decades of Eyelash Innovation
            </h2>
          </div>

          <div className="relative border-l-2 border-[#C9A86A]/40 ml-4 sm:ml-32 space-y-12">
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-10">
                {/* Year Badge on the Left */}
                <span className="sm:absolute sm:-left-32 sm:top-0 font-serif text-xl sm:text-2xl font-bold text-[#A88748] block sm:inline-block">
                  {item.year}
                </span>

                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#FFFBF7] border-4 border-[#C9A86A]" />

                <h4 className="font-serif text-xl font-bold text-[#121212]">
                  {item.title}
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The 3 Pillars Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212] mt-1">
              Quality, Safety, Employee Loyalty
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Why our Upper Kirby salon has stood strong for over 17 years while fast-lash competitors vanish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {THREE_PILLARS.map((p, i) => (
              <div key={i} className="bg-[#FCF1F3] p-8 rounded-3xl border border-[#F9E4E8]">
                <span className="font-serif text-2xl font-bold text-[#C9A86A] block mb-2">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#121212]">
                  {p.title}
                </h3>
                <p className="text-xs text-[#A88748] font-semibold mt-1 mb-3">
                  {p.subtitle}
                </p>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Experience Section */}
        <div className="bg-[#121212] text-white p-10 sm:p-16 rounded-3xl text-center border border-[#C9A86A]/30">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold">
            Experience Master-Level Artistry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-4">
            Book Your Lash Appointment with Sophia or Her Master Team
          </h2>
          <p className="text-stone-400 text-sm max-w-xl mx-auto mb-8">
            Located in Upper Kirby at 3109 Kirby Drive with private parking. Enjoy the Life is Suite candy bar before your session.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-[#C9A86A] hover:bg-[#A88748] text-[#121212] font-semibold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer"
          >
            Check Available Appointments ($175–$300)
          </button>
        </div>

      </div>
    </div>
  );
};
