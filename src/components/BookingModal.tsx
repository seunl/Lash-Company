import React, { useState, useEffect } from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/lashData';
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles, Star, User, ShieldCheck, Heart } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [location, setLocation] = useState('upper-kirby');
  const [serviceId, setServiceId] = useState(preselectedServiceId || 'american-volume');
  const [appointmentType, setAppointmentType] = useState<'full-set' | 'touchup'>('full-set');
  const [artistTier, setArtistTier] = useState<'senior-artist' | 'sophia-master'>('senior-artist');
  const [selectedDate, setSelectedDate] = useState('2026-09-22');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [candyBoxAddon, setCandyBoxAddon] = useState(false);
  const [depositChoice, setDepositChoice] = useState<'deposit' | 'in-salon'>('deposit');

  // Contact form state
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [referralSource, setReferralSource] = useState('Voyage Houston feature');
  const [notes, setNotes] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[1];
  const basePrice = appointmentType === 'full-set' ? currentService.priceFullSet : currentService.priceFill;
  const artistMultiplier = artistTier === 'sophia-master' ? 50 : 0;
  const candyAddonPrice = candyBoxAddon ? 18 : 0;
  const totalPrice = basePrice + artistMultiplier + candyAddonPrice;

  const timeSlots = [
    '10:30 AM',
    '11:45 AM',
    '1:15 PM',
    '2:45 PM',
    '4:00 PM',
    '5:30 PM',
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Generate confirmation
      const randomCode = 'LASH-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(randomCode);
      setStep(4);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FFFBF7] rounded-3xl shadow-2xl border border-[#C9A86A]/40 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header Ribbon */}
        <div className="bg-[#121212] text-[#FFFBF7] px-6 py-4 flex items-center justify-between border-b border-[#C9A86A]/30">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A86A] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#C9A86A]" />
              Upper Kirby & The Heights VIP Concierge
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
              Book Your Lash Set in 60 Seconds
            </h2>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Social Proof Sub-bar */}
        <div className="bg-[#F9E4E8]/60 px-6 py-2 border-b border-[#F9E4E8] flex items-center justify-between text-xs text-stone-800">
          <div className="flex items-center gap-1 font-medium">
            <Star className="w-3.5 h-3.5 fill-[#C9A86A] text-[#C9A86A]" />
            <span className="font-bold">4.6★</span> 41+ Houston Reviews • Beyonce's Lash Artist
          </div>
          <span className="text-stone-500 hidden sm:inline">
            Free Life is Suite Candy Tasting Included
          </span>
        </div>

        {/* Progress Tracker */}
        {step < 4 && (
          <div className="px-6 pt-4 pb-2">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-500">
              <span className={step >= 1 ? 'text-[#121212]' : ''}>1. Service & Studio</span>
              <span className={step >= 2 ? 'text-[#121212]' : ''}>2. Date & Time</span>
              <span className={step >= 3 ? 'text-[#121212]' : ''}>3. Guest Details</span>
            </div>
            <div className="w-full bg-stone-200 h-1 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#C9A86A] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Body Container */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* STEP 1: Service, Tier, Location */}
          {step === 1 && (
            <div className="space-y-6">
              
              {/* Studio Location Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-2">
                  Select Studio Location
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BUSINESS_INFO.locations.map((loc) => (
                    <button
                      type="button"
                      key={loc.id}
                      onClick={() => setLocation(loc.id)}
                      className={`p-3.5 rounded-2xl text-left border text-xs transition-all cursor-pointer ${
                        location === loc.id
                          ? 'border-[#C9A86A] bg-[#FFF8EE] ring-1 ring-[#C9A86A]'
                          : 'border-stone-200 bg-white hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-stone-900">{loc.name}</span>
                        {loc.isFlagship && (
                          <span className="text-[9px] bg-[#F9E4E8] text-[#121212] px-1.5 py-0.5 rounded font-bold">
                            Flagship
                          </span>
                        )}
                      </div>
                      <p className="text-stone-500 text-[11px]">{loc.address}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-stone-700">
                    Select Lash Style
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setAppointmentType('full-set')}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold cursor-pointer ${
                        appointmentType === 'full-set'
                          ? 'bg-[#121212] text-white'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      Full Set (2–2.5 hrs)
                    </button>
                    <button
                      type="button"
                      onClick={() => setAppointmentType('touchup')}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold cursor-pointer ${
                        appointmentType === 'touchup'
                          ? 'bg-[#121212] text-white'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      4-Week Touchup
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => {
                    const price = appointmentType === 'full-set' ? s.priceFullSet : s.priceFill;
                    const isSelected = serviceId === s.id;
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setServiceId(s.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#C9A86A] bg-[#FFF8EE] shadow-sm ring-1 ring-[#C9A86A]'
                            : 'border-stone-200 bg-white hover:border-stone-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <span className="font-serif font-bold text-stone-900 text-sm">
                            {s.name}
                          </span>
                          <span className="text-xs font-bold text-[#A88748]">
                            ${price}
                          </span>
                        </div>
                        <p className="text-stone-500 text-[11px] line-clamp-2 mt-1">
                          {s.tagline}
                        </p>
                        <div className="mt-2 text-[10px] text-stone-400 flex items-center justify-between">
                          <span>{s.retention}</span>
                          <span className="text-[#C9A86A] font-medium">Day 1 Waterproof</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Artist Tier Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-2">
                  Extensionist Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setArtistTier('senior-artist')}
                    className={`p-3.5 rounded-2xl text-left border text-xs cursor-pointer ${
                      artistTier === 'senior-artist'
                        ? 'border-[#C9A86A] bg-[#FFF8EE] ring-1 ring-[#C9A86A]'
                        : 'border-stone-200 bg-white'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="font-bold text-stone-900">Certified Senior Stylist</span>
                      <span className="text-stone-500 font-semibold">Standard</span>
                    </div>
                    <p className="text-stone-500 text-[11px] mt-1">
                      Personally mentored for months by Sophia. NovaLash certified perfection.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setArtistTier('sophia-master')}
                    className={`p-3.5 rounded-2xl text-left border text-xs cursor-pointer ${
                      artistTier === 'sophia-master'
                        ? 'border-[#C9A86A] bg-[#FFF8EE] ring-1 ring-[#C9A86A]'
                        : 'border-stone-200 bg-white'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="font-bold text-stone-900 flex items-center gap-1">
                        Sophia Navarro VIP <Sparkles className="w-3 h-3 text-[#C9A86A]" />
                      </span>
                      <span className="text-[#A88748] font-bold">+$50</span>
                    </div>
                    <p className="text-stone-500 text-[11px] mt-1">
                      Founder, NovaLash VP Global Education & Beyonce's lash artist.
                    </p>
                  </button>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-2 flex items-center justify-between border-t border-stone-200">
                <div>
                  <span className="text-stone-400 text-xs block">Estimated Total</span>
                  <span className="font-serif text-2xl font-bold text-[#121212]">
                    ${totalPrice}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-8 py-3 bg-[#121212] hover:bg-[#2A2A2A] text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-md cursor-pointer transition-colors"
                >
                  Choose Time Slot →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Date & Time Picker */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-stone-900">
                    Choose Your Preferred Date
                  </span>
                  <span className="text-xs text-stone-500">Tuesdays – Saturdays only</span>
                </div>
                
                <input
                  type="date"
                  value={selectedDate}
                  min="2026-09-19"
                  max="2026-10-31"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-800 text-sm focus:outline-none focus:border-[#C9A86A]"
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-2">
                  Available Upper Kirby Appointment Windows
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`py-3 px-2 rounded-xl text-xs font-semibold text-center border cursor-pointer transition-all ${
                        selectedTime === slot
                          ? 'bg-[#121212] text-[#FFFBF7] border-[#121212]'
                          : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Life is Suite Confectionery Addon */}
              <div className="p-4 bg-[#FCF1F3] rounded-2xl border border-[#F9E4E8] flex items-start gap-3">
                <input
                  type="checkbox"
                  id="candy-addon"
                  checked={candyBoxAddon}
                  onChange={(e) => setCandyBoxAddon(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-[#C9A86A] focus:ring-[#C9A86A] cursor-pointer"
                />
                <label htmlFor="candy-addon" className="text-xs text-stone-800 cursor-pointer">
                  <span className="font-bold block text-stone-900">
                    Complimentary candy bar is always included! 🍬
                  </span>
                  Check this box to also prepare a take-home luxury Life is Suite Gift Box (Swiss chocolates & imported Scandinavian gummies) for +$18.
                </label>
              </div>

              {/* Navigation */}
              <div className="pt-2 flex items-center justify-between border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-stone-500 hover:text-stone-900 text-xs font-semibold cursor-pointer"
                >
                  ← Back to Services
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-8 py-3 bg-[#121212] hover:bg-[#2A2A2A] text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-md cursor-pointer transition-colors"
                >
                  Enter Contact Details →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Client Details & Deposit Option */}
          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lauren Dupont"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-1">
                    Phone Number (for SMS confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(713) 555-0192"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="lauren@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#C9A86A]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-1">
                  How did you hear about us?
                </label>
                <select
                  value={referralSource}
                  onChange={(e) => setReferralSource(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white focus:outline-none focus:border-[#C9A86A]"
                >
                  <option value="Voyage Houston feature">Voyage Houston Interview / Article</option>
                  <option value="Modern Luxury Houston">Modern Luxury Magazine</option>
                  <option value="Google 4.6-star Reviews">Google / Birdeye (4.6★ Top Rated)</option>
                  <option value="Beyonce / Celebrity press">Beyonce & Celebrity Lash Press</option>
                  <option value="Instagram @lashcohouston">Instagram (@lashcohouston)</option>
                  <option value="Friend or Colleague in Upper Kirby">Friend or Colleague Referral</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-1">
                  Eye Sensitivity Notes or Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention contact lenses, sensitive skin, or wedding dates..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-stone-300 text-sm text-stone-900 focus:outline-none focus:border-[#C9A86A]"
                />
              </div>

              {/* Deposit Option */}
              <div className="bg-white p-4 rounded-2xl border border-stone-200">
                <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-2">
                  Payment & Deposit Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDepositChoice('deposit')}
                    className={`p-3 rounded-xl text-left border text-xs cursor-pointer ${
                      depositChoice === 'deposit'
                        ? 'border-[#C9A86A] bg-[#FFF8EE] font-semibold'
                        : 'border-stone-200'
                    }`}
                  >
                    <span className="block text-stone-900">Hold with $50 Deposit</span>
                    <span className="text-[10px] text-stone-500">Remainder paid at salon</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDepositChoice('in-salon')}
                    className={`p-3 rounded-xl text-left border text-xs cursor-pointer ${
                      depositChoice === 'in-salon'
                        ? 'border-[#C9A86A] bg-[#FFF8EE] font-semibold'
                        : 'border-stone-200'
                    }`}
                  >
                    <span className="block text-stone-900">Pay Full at Salon</span>
                    <span className="text-[10px] text-stone-500">Card on file guarantee</span>
                  </button>
                </div>
              </div>

              {/* Submit & Guarantee */}
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-stone-500 hover:text-stone-900 text-xs font-semibold cursor-pointer"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#121212] hover:bg-[#2A2A2A] text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-lg border border-[#C9A86A]/50 cursor-pointer transition-colors"
                >
                  Confirm Lash Appointment (${totalPrice})
                </button>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-stone-500 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A86A]" />
                  24-Hour Free Rescheduling • Doctor-Approved NovaLash Safety
                </p>
              </div>
            </form>
          )}

          {/* STEP 4: Success & Confirmation Voucher */}
          {step === 4 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-[#F9E4E8] text-[#121212] rounded-full mx-auto flex items-center justify-center border border-[#FF8FA3]/40">
                <CheckCircle className="w-8 h-8 text-[#121212]" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-bold">
                  Appointment Reserved Successfully
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212] mt-1">
                  We Can't Wait to Lash You, {clientName || 'Gorgeous'}!
                </h3>
                <p className="text-stone-600 text-sm mt-2 max-w-md mx-auto">
                  A detailed confirmation SMS and calendar invite have been dispatched. Your Life is Suite candy bar tasting will be prepared for your arrival.
                </p>
              </div>

              {/* Confirmation Summary Card */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 max-w-md mx-auto text-left space-y-2 text-xs text-stone-700 shadow-sm">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-stone-400">Confirmation Code:</span>
                  <span className="font-mono font-bold text-stone-900">{confirmationCode}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-stone-400">Studio Location:</span>
                  <span className="font-semibold text-stone-900">
                    {location === 'upper-kirby' ? '3109 Kirby Drive (Upper Kirby)' : '1051 Heights Blvd (The Heights)'}
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-stone-400">Date & Time:</span>
                  <span className="font-semibold text-stone-900">{selectedDate} at {selectedTime}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-stone-400">Lash Service:</span>
                  <span className="font-semibold text-stone-900">{currentService.name}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-stone-400">Artist Tier:</span>
                  <span className="font-semibold text-[#A88748]">
                    {artistTier === 'sophia-master' ? 'Sophia Navarro (Master VIP)' : 'Certified Senior Stylist'}
                  </span>
                </div>
                <div className="flex justify-between pt-1 font-bold text-sm text-stone-900">
                  <span>Total at Studio:</span>
                  <span>${totalPrice}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-6 py-3 bg-stone-100 text-stone-800 text-xs font-semibold rounded-full border border-stone-300"
                >
                  Call Salon: (713) 520-5274
                </a>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-8 py-3 bg-[#121212] text-white text-xs font-semibold tracking-wider uppercase rounded-full"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
