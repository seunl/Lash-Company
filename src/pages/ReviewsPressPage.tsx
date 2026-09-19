import React, { useState } from 'react';
import { PageId, ReviewItem } from '../types';
import { REVIEWS, PRESS_ARTICLES, BUSINESS_INFO } from '../data/lashData';
import {
  Sparkles,
  Star,
  CheckCircle2,
  Calendar,
  ExternalLink,
  MessageSquare,
  Award,
  Plus,
  Quote,
  Check
} from 'lucide-react';

interface ReviewsPressPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ReviewsPressPage: React.FC<ReviewsPressPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [serviceDone, setServiceDone] = useState('American Volume™');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (authorName.trim() && comment.trim()) {
      const newReview: ReviewItem = {
        id: `rev-user-${Date.now()}`,
        author: authorName,
        source: 'Google',
        rating,
        date: 'Just now',
        service: serviceDone,
        comment,
        verified: true
      };
      setReviewsList([newReview, ...reviewsList]);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowReviewModal(false);
        setAuthorName('');
        setComment('');
      }, 2000);
    }
  };

  return (
    <div className="w-full bg-[#FFFBF7] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Social Proof & Editorial Recognition
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#121212] tracking-tight leading-[1.1]">
            Reviews & Press Features
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            From Voyage Houston to Birdeye and Google, read why Houston high society and celebrity icons have made The Lash Company their premier lash sanctuary for over 17 years.
          </p>
        </div>

        {/* 1. BIRDEYE & GOOGLE RATING SCORECARD */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EADBC0] shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Score Display */}
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-8">
              <span className="font-serif text-6xl sm:text-7xl font-bold text-[#121212]">
                4.6
              </span>
              <div className="flex justify-center lg:justify-start text-[#C9A86A] my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A86A]" />
                ))}
              </div>
              <p className="text-stone-900 font-bold text-sm">
                41+ Verified Upper Kirby Reviews
              </p>
              <p className="text-stone-500 text-xs mt-0.5">
                Aggregated via Birdeye, Google & Salon Direct
              </p>
            </div>

            {/* Pillar Breakdown */}
            <div className="lg:col-span-5 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-medium text-stone-700">Retention & 4-Week Hold</span>
                <span className="font-bold text-[#121212]">4.9 / 5.0</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#C9A86A] h-full w-[98%]" />
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-stone-700">Eye Comfort & Doctor Safety</span>
                <span className="font-bold text-[#121212]">5.0 / 5.0</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#C9A86A] h-full w-[100%]" />
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-stone-700">Life is Suite Candy Bar & Atmosphere</span>
                <span className="font-bold text-[#121212]">4.8 / 5.0</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#C9A86A] h-full w-[96%]" />
              </div>
            </div>

            {/* Action */}
            <div className="lg:col-span-3 text-center lg:text-right">
              <button
                onClick={() => setShowReviewModal(true)}
                className="w-full py-3.5 bg-[#121212] hover:bg-[#2A2A2A] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#C9A86A]/40"
              >
                <Plus className="w-4 h-4 text-[#C9A86A]" />
                <span>Write a Client Review</span>
              </button>
              <span className="text-[11px] text-stone-400 block mt-2">
                Join 5,000+ happy clients
              </span>
            </div>

          </div>
        </div>

        {/* 2. PRESS EDITORIAL FEATURES (Voyage Houston, Modern Luxury, NovaLash Journal) */}
        <div className="mb-24">
          <div className="max-w-xl mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold block mb-1">
              Editorial Coverage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212]">
              In the News & Magazine Archives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRESS_ARTICLES.map((press) => (
              <div
                key={press.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#EADBC0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-stone-900">
                    <img
                      src={press.image}
                      alt={press.headline}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#121212]/80 backdrop-blur-md text-[#FFFBF7] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-[#C9A86A]/40">
                      {press.outlet}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] text-[#A88748] font-semibold uppercase tracking-wider block mb-1">
                      {press.date}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#121212] leading-snug">
                      {press.headline}
                    </h3>
                    <p className="text-stone-600 text-xs mt-3 leading-relaxed">
                      {press.snippet}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100">
                  <span className="text-xs font-bold text-[#A88748] flex items-center gap-1">
                    <span>{press.badge}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. VERIFIED CLIENT TESTIMONIALS MASONRY */}
        <div className="mb-20">
          <div className="max-w-xl mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88748] font-semibold block mb-1">
              Direct Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121212]">
              Real Words from Real Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewsList.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EADBC0] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#C9A86A]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C9A86A]" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FCF1F3] text-stone-700">
                      {rev.source}
                    </span>
                  </div>

                  <p className="font-serif text-sm sm:text-base text-[#121212] italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-stone-900 block">{rev.author}</span>
                    <span className="text-stone-400 text-[11px]">{rev.service}</span>
                  </div>
                  <span className="text-[10px] text-stone-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ready CTA */}
        <div className="bg-[#121212] text-white p-10 sm:p-14 rounded-3xl text-center border border-[#C9A86A]/30">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3">
            Experience the Upper Kirby Standard for Yourself
          </h2>
          <p className="text-stone-400 text-sm max-w-xl mx-auto mb-8">
            Book online in 60 seconds. Four weeks of maintenance-free, waterproof glamour.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-[#C9A86A] hover:bg-[#A88748] text-[#121212] font-semibold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer"
          >
            Book Your Lash Appointment ($175–$300)
          </button>
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#FFFBF7] rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#C9A86A] shadow-2xl relative">
            <h3 className="font-serif text-2xl font-bold text-[#121212] mb-1">
              Share Your Lash Experience
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Help fellow Houstonians discover Sophia Navarro's lash artistry.
            </p>

            {submitted ? (
              <div className="py-8 text-center text-[#121212] space-y-2">
                <Check className="w-10 h-10 text-[#C9A86A] mx-auto" />
                <span className="font-serif text-xl font-bold block">Thank You!</span>
                <p className="text-xs text-stone-600">Your review has been verified and added to our wall.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                <div>
                  <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Katherine H."
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 bg-white focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                    Lash Style Received
                  </label>
                  <select
                    value={serviceDone}
                    onChange={(e) => setServiceDone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 bg-white focus:outline-none focus:border-[#C9A86A]"
                  >
                    <option value="American Volume™ Full Set">American Volume™ (Sophia's Invention)</option>
                    <option value="Classic Lashes">Classic Lashes (1:1 Natural)</option>
                    <option value="London Volume">London Volume (Maximum Density)</option>
                    <option value="Candied Lashes™">Candied Lashes™</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setRating(s)}
                        className="cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            s <= rating ? 'fill-[#C9A86A] text-[#C9A86A]' : 'text-stone-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block uppercase tracking-wider font-bold text-stone-700 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about the retention, the candy bar, and how your lashes feel..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 bg-white focus:outline-none focus:border-[#C9A86A]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="text-stone-500 font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#121212] text-white rounded-full font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
