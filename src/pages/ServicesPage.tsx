import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/lashData';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  Eye,
  ShieldCheck,
  Droplets,
  DollarSign,
  ArrowRight,
  HelpCircle,
  Award
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[1].id); // American Volume default
  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[1];

  return (
    <div className="w-full bg-[#FFFBF7] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Bespoke Lash Architecture
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#121212] tracking-tight leading-[1.1]">
            Services & Pricing Menu
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
            Every set is individually mapped to your orbital anatomy using physician-developed NovaLash adhesives. Instantly oil-proof and waterproof with 4 full weeks between touchups.
          </p>
        </div>

        {/* 1. COMPREHENSIVE SERVICE DETAIL CARDS */}
        <div className="space-y-12 mb-24">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-3xl border border-[#EADBC0] overflow-hidden shadow-sm hover:shadow-lg transition-shadow grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Photo */}
              <div className="lg:col-span-4 relative min-h-[280px] sm:min-h-[350px] bg-stone-900">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                {service.badge && (
                  <div className="absolute top-4 left-4 bg-[#121212]/85 backdrop-blur-md text-[#FFFBF7] text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-[#C9A86A]/40">
                    {service.badge}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-3 rounded-xl text-white text-xs">
                  <span className="text-[#C9A86A] font-semibold block">{service.lashCount}</span>
                  <span className="text-stone-300 text-[11px]">Best for: {service.bestForEyeShape}</span>
                </div>
              </div>

              {/* Right Details */}
              <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 pb-4">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
                        {service.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#A88748] font-medium mt-0.5">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Pricing Badge */}
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">
                        Full Set (Starting at)
                      </div>
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
                        ${service.priceFullSet}
                      </span>
                      <span className="text-xs text-stone-500 block">
                        Touchup Fill: Starting at ${service.priceFill}
                      </span>
                    </div>
                  </div>

                  {/* Description & Inventor Note */}
                  <div className="py-4 space-y-3">
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {service.inventorNote && (
                      <div className="p-3.5 bg-[#FCF1F3] rounded-2xl border border-[#F9E4E8] text-xs text-stone-800 flex items-start gap-2.5">
                        <Award className="w-4 h-4 text-[#A88748] shrink-0 mt-0.5" />
                        <span><strong>Inventor's Note:</strong> {service.inventorNote}</span>
                      </div>
                    )}
                  </div>

                  {/* Technical & Maintenance Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 bg-[#FFFBF7] p-4 rounded-2xl border border-[#EADBC0]/50 text-xs">
                    <div>
                      <span className="font-bold text-stone-900 block mb-1">Ideal Candidate:</span>
                      <p className="text-stone-600">{service.whoItIsFor}</p>
                    </div>
                    <div>
                      <span className="font-bold text-stone-900 block mb-1">Session Timing & Retention:</span>
                      <p className="text-stone-600">
                        Full Set: {service.durationFullSet} • Touchup: {service.durationFill}
                        <br />
                        <strong className="text-stone-900">{service.retention}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Maintenance Tips */}
                  <div className="mt-4">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-stone-700 block mb-1.5">
                      Doctor-Reviewed Maintenance:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                      {service.maintenanceTips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A86A] mt-0.5 shrink-0" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-stone-500">
                    Includes complimentary Life is Suite international candy bar & private suite
                  </span>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#121212] hover:bg-[#C9A86A] text-white hover:text-[#121212] font-semibold text-xs tracking-wider uppercase rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book {service.name}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. SIDE-BY-SIDE COMPARISON TABLE */}
        <div className="mb-24 bg-white rounded-3xl border border-[#EADBC0] p-6 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold">
              At a Glance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212] mt-1">
              Compare Our Lash Techniques
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              All styles are 100% waterproof and oil-proof on Day 1 using NovaLash molecular bond technology.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-3 px-4 font-bold text-stone-800 text-sm">Feature</th>
                  <th className="py-3 px-4 font-bold text-stone-800 text-sm">Classic</th>
                  <th className="py-3 px-4 font-bold text-[#A88748] text-sm bg-[#FCF1F3] rounded-t-xl">American Volume™</th>
                  <th className="py-3 px-4 font-bold text-stone-800 text-sm">London Volume</th>
                  <th className="py-3 px-4 font-bold text-stone-800 text-sm">Candied Lashes™</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Application Ratio</td>
                  <td className="py-3 px-4">1:1 Single Fiber</td>
                  <td className="py-3 px-4 bg-[#FCF1F3]/50 font-semibold text-stone-900">Multi-Length 3D Bouquet</td>
                  <td className="py-3 px-4">4D–6D Micro Fan</td>
                  <td className="py-3 px-4">Hybrid Flare + Colored Tips</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Visual Finish</td>
                  <td className="py-3 px-4">Mascara Natural</td>
                  <td className="py-3 px-4 bg-[#FCF1F3]/50 font-semibold text-stone-900">Feathery, Wispy & Textured</td>
                  <td className="py-3 px-4">Velvet Liquid Liner Depth</td>
                  <td className="py-3 px-4">Subtle Color Glimmer</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Lash Count Per Eye</td>
                  <td className="py-3 px-4">65–75 lashes</td>
                  <td className="py-3 px-4 bg-[#FCF1F3]/50 font-semibold text-stone-900">150–220 lightweight fibers</td>
                  <td className="py-3 px-4">250–350 ultra-micro</td>
                  <td className="py-3 px-4">100–180 + accents</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Retention Between Touchups</td>
                  <td className="py-3 px-4 font-semibold">4 Weeks</td>
                  <td className="py-3 px-4 bg-[#FCF1F3]/50 font-bold text-[#A88748]">4+ Weeks</td>
                  <td className="py-3 px-4 font-semibold">4 Weeks</td>
                  <td className="py-3 px-4 font-semibold">4 Weeks</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Full Set Price</td>
                  <td className="py-3 px-4 font-bold text-stone-900">Starting at $185</td>
                  <td className="py-3 px-4 bg-[#FCF1F3]/50 font-bold text-stone-900">Starting at $265</td>
                  <td className="py-3 px-4 font-bold text-stone-900">Starting at $295</td>
                  <td className="py-3 px-4 font-bold text-stone-900">Starting at $245</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Monthly Refill Price</td>
                  <td className="py-3 px-4">$75</td>
                  <td className="py-3 px-4 bg-[#FCF1F3]/50 font-bold text-stone-900">$85</td>
                  <td className="py-3 px-4">$95</td>
                  <td className="py-3 px-4">$85</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-stone-900">Action</td>
                  <td className="py-3 px-4">
                    <button onClick={() => onOpenBooking('classic-lashes')} className="text-[#A88748] font-bold hover:underline">Book Classic</button>
                  </td>
                  <td className="py-3 px-4 bg-[#FCF1F3]/50">
                    <button onClick={() => onOpenBooking('american-volume')} className="px-3 py-1 bg-[#121212] text-white rounded-full font-bold">Book American</button>
                  </td>
                  <td className="py-3 px-4">
                    <button onClick={() => onOpenBooking('london-volume')} className="text-[#A88748] font-bold hover:underline">Book London</button>
                  </td>
                  <td className="py-3 px-4">
                    <button onClick={() => onOpenBooking('candied-lashes')} className="text-[#A88748] font-bold hover:underline">Book Candied</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. WHAT TO EXPECT: The 4-Step Client Journey */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold">
              The Client Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212] mt-1">
              What to Expect During Your Visit
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              From your first candy tasting to your final mirror reveal, every minute is tailored for serene luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Welcome & Candy Bar',
                desc: 'Arrive at our Upper Kirby studio. Select your complimentary artisanal confections and sparkling San Pellegrino before settling into your private suite.'
              },
              {
                step: '02',
                title: 'Bespoke Lash Mapping',
                desc: 'Your certified extensionist analyzes your ocular shape, eyelid contour, and natural lash health to customize length, curl, and diameter balance.'
              },
              {
                step: '03',
                title: 'Weightless Application',
                desc: 'Relax on our ergonomic memory foam heated lash bed. Most clients fall into a serene lash nap while we isolate each individual follicle.'
              },
              {
                step: '04',
                title: 'Immediate Water Cure',
                desc: 'NovaLash molecular bonding cures instantaneously. You leave with lashes that are 100% waterproof, oil-proof, and good for 4 weeks.'
              }
            ].map((st, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-[#EADBC0] shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-serif text-3xl font-bold text-[#C9A86A] block mb-3">
                    {st.step}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#121212] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SAFETY PROTOCOLS */}
        <div className="bg-[#121212] text-white p-8 sm:p-14 rounded-3xl border border-[#C9A86A]/30">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold flex items-center gap-1.5 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#C9A86A]" />
              Hospital-Grade Hygiene Standards
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-white mt-1">
              Doctor-Reviewed Optometric Safety Protocols
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm mt-3 leading-relaxed">
              Eye safety is not our marketing phrase; it is our founding law. The Lash Company enforces the most rigorous medical safety benchmarks in North America:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-stone-300">
              <div className="p-4 bg-[#1C1C1C] rounded-2xl border border-stone-800">
                <span className="font-bold text-white block mb-1">Doctor of Optometry Lectures</span>
                <p className="text-stone-400">Our entire staff receives periodic continuing education directly from optometrists on ocular physiology.</p>
              </div>
              <div className="p-4 bg-[#1C1C1C] rounded-2xl border border-stone-800">
                <span className="font-bold text-white block mb-1">Mandatory Condition Refusal</span>
                <p className="text-stone-400">If any blepharitis, dry eye infection, or allergy inflammation is visible, we strictly postpone service for your protection.</p>
              </div>
              <div className="p-4 bg-[#1C1C1C] rounded-2xl border border-stone-800">
                <span className="font-bold text-white block mb-1">Medical-Grade Autoclave Sterilization</span>
                <p className="text-stone-400">All precision stainless steel isolation tweezers are medically sterilized between every single client.</p>
              </div>
              <div className="p-4 bg-[#1C1C1C] rounded-2xl border border-stone-800">
                <span className="font-bold text-white block mb-1">Formaldehyde-Free NovaLash Chemistry</span>
                <p className="text-stone-400">Physician-developed adhesives that cause zero fumes, stinging, or damage to native lash follicles.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-400">
                Have ocular questions or wear contact lenses? We are happy to advise.
              </span>
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-3.5 bg-[#C9A86A] hover:bg-[#A88748] text-[#121212] font-semibold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer"
              >
                Book Your Consultation & Full Set
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
