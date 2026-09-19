import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, FAQS, SERVICES } from '../data/lashData';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ChevronUp,
  Calendar,
  CheckCircle2,
  Car,
  ShieldCheck,
  Send,
  Navigation
} from 'lucide-react';

interface BookingContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const BookingContactPage: React.FC<BookingContactPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [activeLocationTab, setActiveLocationTab] = useState<'upper-kirby' | 'heights'>('upper-kirby');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Contact / Consultation Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'american-volume',
    preferredDate: '',
    referralSource: 'Voyage Houston interview',
    message: '',
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmittedMessage(true);
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="w-full bg-[#FFFBF7] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Appointments & Studios
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#121212] tracking-tight leading-[1.1]">
            Locations & Concierge Booking
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Reserve your lash set online in 60 seconds or reach our Upper Kirby concierge directly. Private parking provided for every guest.
          </p>
        </div>

        {/* 1. INTERACTIVE INSTANT BOOKING ENGINE WIDGET (Fresha / Vagaro Luxury Architecture) */}
        <div className="bg-white rounded-3xl border border-[#C9A86A]/40 shadow-xl p-8 sm:p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A86A]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FCF1F3] text-xs font-semibold text-stone-800">
              <Calendar className="w-3.5 h-3.5 text-[#C9A86A]" />
              <span>Live Salon Schedule • Instant Confirmation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#121212]">
              Reserve Your Lash Suite in 60 Seconds
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Skip back-and-forth phone calls. Select your studio, choose between Classic, American Volume™, London Volume, or touchups, and lock in your appointment instantly.
            </p>

            {/* Quick Service Selection Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left py-2">
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => onOpenBooking(srv.id)}
                  className="p-3.5 rounded-2xl border border-stone-200 hover:border-[#C9A86A] bg-[#FFFBF7] hover:bg-[#FFF8EE] cursor-pointer transition-all group"
                >
                  <span className="font-serif font-bold text-xs sm:text-sm text-stone-900 group-hover:text-[#A88748] block">
                    {srv.name}
                  </span>
                  <span className="text-[11px] font-bold text-stone-600 mt-1 block">
                    From ${srv.priceFullSet}
                  </span>
                  <span className="text-[10px] text-stone-400 block mt-0.5">
                    {srv.retention}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                id="booking-widget-launch-btn"
                className="w-full sm:w-auto px-10 py-4 bg-[#121212] hover:bg-[#2A2A2A] text-white font-semibold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all cursor-pointer border border-[#C9A86A]/50 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C9A86A]" />
                <span>Open Instant Booking Widget</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto px-8 py-4 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold text-xs uppercase tracking-wider rounded-full transition-all border border-stone-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C9A86A]" />
                <span>Call (713) 520-LASH</span>
              </a>
            </div>

            <div className="text-[11px] text-stone-400 flex items-center justify-center gap-4 pt-2">
              <span>✓ $50 deposit option</span>
              <span>•</span>
              <span>✓ 24-hr free rescheduling</span>
              <span>•</span>
              <span>✓ Complimentary candy bar</span>
            </div>
          </div>
        </div>

        {/* 2. DUAL STUDIO LOCATIONS & GOOGLE MAPS */}
        <div className="mb-24">
          <div className="max-w-xl mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold block mb-1">
              Visit Our Houston Studios
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212]">
              Two Convenient Houston Locations
            </h2>
          </div>

          {/* Location Toggle */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setActiveLocationTab('upper-kirby')}
              className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase cursor-pointer transition-all ${
                activeLocationTab === 'upper-kirby'
                  ? 'bg-[#121212] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-[#F9E4E8] border border-stone-200'
              }`}
            >
              Flagship: Upper Kirby / Greenway (3109 Kirby Dr)
            </button>
            <button
              onClick={() => setActiveLocationTab('heights')}
              className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase cursor-pointer transition-all ${
                activeLocationTab === 'heights'
                  ? 'bg-[#121212] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-[#F9E4E8] border border-stone-200'
              }`}
            >
              The Heights (1051 Heights Blvd)
            </button>
          </div>

          {/* Location Content Box */}
          <div className="bg-white rounded-3xl border border-[#EADBC0] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
            
            {/* Studio Info Left */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
              {activeLocationTab === 'upper-kirby' ? (
                <div className="space-y-4">
                  <div className="inline-block bg-[#F9E4E8] text-[#121212] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                    Original Flagship Since 2007
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
                    Upper Kirby Studio
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-stone-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-stone-900 block">3109 Kirby Drive</strong>
                        <span>Houston, TX 77098</span>
                        <p className="text-stone-400 text-xs mt-0.5">(Also listed as 3019 Kirby Dr listing)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                      <div>
                        <a href="tel:7135205274" className="font-bold text-stone-900 hover:underline">
                          (713) 520-5274 / (713) 520-LASH
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-stone-900 block">Studio Hours:</strong>
                        <span>Tuesday – Saturday: 10:00 AM – 7:00 PM</span>
                        <span className="block text-stone-400 text-xs">Sunday & Monday: Closed</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Car className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-stone-900 block">Complimentary Guest Parking:</strong>
                        <span>Private dedicated parking lot located directly behind the Kirby studio. Kirby valet service also available during peak hours.</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="inline-block bg-[#F9E4E8] text-[#121212] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                    Second Location
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
                    The Heights Studio
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-stone-600">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-stone-900 block">1051 Heights Blvd, Suite 250</strong>
                        <span>Houston, TX 77008</span>
                        <p className="text-stone-400 text-xs mt-0.5">Historic Houston Heights District</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                      <div>
                        <a href="tel:7135205274" className="font-bold text-stone-900 hover:underline">
                          (713) 520-5274
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-stone-900 block">Studio Hours:</strong>
                        <span>Tuesday – Saturday: 10:00 AM – 7:00 PM</span>
                        <span className="block text-stone-400 text-xs">Sunday & Monday: Closed</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Car className="w-4 h-4 text-[#A88748] mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-stone-900 block">Covered Parking:</strong>
                        <span>Garage and dedicated surface parking directly adjoining the building.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <a
                  href={`https://maps.google.com/?q=${
                    activeLocationTab === 'upper-kirby'
                      ? '3109+Kirby+Dr,+Houston,+TX+77098'
                      : '1051+Heights+Blvd+Suite+250,+Houston,+TX+77008'
                  }`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#121212] text-white text-xs uppercase font-bold tracking-wider rounded-xl text-center flex items-center justify-center gap-2 hover:bg-[#C9A86A] hover:text-[#121212] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions via Google Maps</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed Frame Right */}
            <div className="lg:col-span-7 bg-stone-100 min-h-[350px] relative">
              <iframe
                title="The Lash Company Studio Location Map"
                src={`https://maps.google.com/maps?q=${
                  activeLocationTab === 'upper-kirby'
                    ? '3109+Kirby+Drive,+Houston,+TX+77098'
                    : '1051+Heights+Blvd+Suite+250,+Houston,+TX+77008'
                }&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>

        {/* 3. CONTACT FORM WITH VOYAGE HOUSTON REFERRAL TRACKING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold block">
              Direct Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212]">
              Send a Private Message to Sophia's Concierge
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Have a question about bridal lash packages, severe sensitivities, or booking an executive evening appointment? Our concierge responds promptly within studio hours.
            </p>

            <div className="p-6 bg-white rounded-3xl border border-[#EADBC0] space-y-3 text-xs text-stone-700">
              <div className="flex items-center gap-2 font-bold text-stone-900">
                <Mail className="w-4 h-4 text-[#A88748]" />
                <span>jonijra@gmail.com</span>
              </div>
              <p className="text-stone-500">
                Direct public email contact for Sophia Navarro (as featured in Voyage Houston).
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#EADBC0] shadow-sm">
            {submittedMessage ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#C9A86A] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Message Received
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm max-w-sm mx-auto">
                  Thank you, {formData.name}. Our concierge will contact you shortly via {formData.phone || formData.email}.
                </p>
                <button
                  onClick={() => setSubmittedMessage(false)}
                  className="mt-4 px-6 py-2 bg-stone-100 text-stone-800 text-xs font-semibold rounded-full border border-stone-300"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:border-[#C9A86A]"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(713) 555-0144"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:border-[#C9A86A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:border-[#C9A86A]"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                      Service Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 bg-white focus:outline-none focus:border-[#C9A86A]"
                    >
                      <option value="american-volume">American Volume™ ($265)</option>
                      <option value="classic-lashes">Classic Lashes ($185)</option>
                      <option value="london-volume">London Volume ($295)</option>
                      <option value="candied-lashes">Candied Lashes™ ($245)</option>
                      <option value="touchup">4-Week Maintenance Refill</option>
                      <option value="bridal-special">Bridal / Event Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                      Preferred Date / Time Window
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Next Thursday afternoon"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:border-[#C9A86A]"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                      How did you hear about us?
                    </label>
                    <select
                      value={formData.referralSource}
                      onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 bg-white focus:outline-none focus:border-[#C9A86A]"
                    >
                      <option value="Voyage Houston interview">Voyage Houston Interview</option>
                      <option value="Modern Luxury Magazine">Modern Luxury Magazine</option>
                      <option value="Google 4.6★ Search">Google 4.6-star Search</option>
                      <option value="Beyonce press mention">Beyonce / Celebrity lash press</option>
                      <option value="Instagram @lashcohouston">Instagram @lashcohouston</option>
                      <option value="Friend in Upper Kirby">Friend in Upper Kirby</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                    Special Inquiries or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about any specific eye shape goals or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-900 focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-stone-400 text-[11px]">
                    Responses within 24 business hours
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#121212] hover:bg-[#2A2A2A] text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-md transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C9A86A]" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* 4. COMPREHENSIVE FAQ ACCORDION */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold">
              Answers & Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212] mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              Everything you need to know about our 4-week retention, waterproof guarantee, and candy bar.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#EADBC0] overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#121212]">
                      {faq.question}
                    </span>
                    <span className="text-[#C9A86A] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-[#FFFBF7]/40">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
