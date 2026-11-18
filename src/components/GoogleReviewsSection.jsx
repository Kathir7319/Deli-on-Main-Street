import React, { useState } from 'react';
import { Star, ExternalLink, MessageSquare, CheckCircle2, ChevronRight, Award, Play, Pause, Sparkles } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEWS_STATS } from '../data/deliData';

export const GoogleReviewsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Split reviews into two complementary streams for dynamic dual-line running sequence
  const row1 = REVIEWS.filter((_, i) => i % 2 === 0);
  const row2 = REVIEWS.filter((_, i) => i % 2 !== 0);

  // Tripled lists to ensure smooth, infinite unbroken continuous marquee loop
  const streamRow1 = [...row1, ...row1, ...row1];
  const streamRow2 = [...row2, ...row2, ...row2];

  const renderReviewCard = (rev, key) => (
    <div
      key={key}
      className="w-[320px] sm:w-[380px] lg:w-[410px] p-5 rounded-2xl bg-white border border-charcoal-200/90 shadow-sm hover:shadow-lg hover:border-burgundy-700/50 transition-all flex flex-col justify-between space-y-3.5 flex-shrink-0 mx-3 text-left group"
    >
      {/* Header: User, Local Guide Badge, Date */}
      <div className="space-y-2.5">
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            <img
              src={rev.avatar}
              alt={rev.name}
              className="w-10 h-10 rounded-full object-cover border border-charcoal-200 shadow-xs flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-1">
                <h4 className="font-bold text-xs text-charcoal-900 group-hover:text-burgundy-700 transition leading-tight">
                  {rev.name}
                </h4>
                <span className="text-[10px] text-blue-600 font-bold" title="Verified Google Reviewer">
                  ✓
                </span>
              </div>
              <span className="text-[10px] text-charcoal-500 font-medium block">
                {rev.role}
              </span>
            </div>
          </div>

          <span className="text-[10px] font-mono text-charcoal-400 whitespace-nowrap bg-charcoal-50 px-2 py-0.5 rounded border border-charcoal-100">
            {rev.date}
          </span>
        </div>

        {/* Rating Stars & Meal context */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, sIdx) => (
              <Star
                key={sIdx}
                className={`w-3.5 h-3.5 ${
                  sIdx < rev.rating
                    ? 'fill-[#fabb05] text-[#fabb05]'
                    : 'fill-charcoal-200 text-charcoal-200'
                }`}
              />
            ))}
          </div>

          {rev.mealType && (
            <span className="text-[10px] font-medium bg-amber-50 text-amber-800 border border-amber-200/60 px-2 py-0.5 rounded">
              {rev.mealType}
            </span>
          )}
        </div>

        {/* Review text */}
        <p className="text-xs text-charcoal-700 leading-relaxed italic line-clamp-4">
          "{rev.content}"
        </p>
      </div>

      {/* Footer Details: Dish mentioned & Owner response if present */}
      <div className="space-y-2 pt-2.5 border-t border-charcoal-100">
        {rev.dishMention && (
          <div className="flex items-center gap-1.5 text-[11px] text-burgundy-900 bg-burgundy-50/70 border border-burgundy-200/50 px-2.5 py-1 rounded-lg">
            <span className="font-bold">Ordered:</span>
            <span className="truncate">{rev.dishMention}</span>
          </div>
        )}

        {rev.ownerResponse && (
          <div className="bg-cream-100 rounded-xl p-2.5 border border-charcoal-200 text-[10px] space-y-1">
            <div className="flex items-center gap-1 font-bold text-burgundy-700">
              <Award className="w-3 h-3 flex-shrink-0" />
              <span>Owner Response (Deli on Main Street)</span>
            </div>
            <p className="text-charcoal-600 italic line-clamp-2 leading-snug">
              "{rev.ownerResponse}"
            </p>
          </div>
        )}

        <div className="flex items-center justify-between text-[10px] text-charcoal-400 pt-1">
          <span className="flex items-center gap-1 text-charcoal-500 font-medium">
            <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Verified Google Review</span>
          </span>

          <a
            href={GOOGLE_REVIEWS_STATS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-burgundy-700 hover:text-burgundy-900 font-bold flex items-center gap-0.5"
          >
            <span>Google Maps</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="google-reviews" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="bg-white rounded-3xl border border-charcoal-200 shadow-sm overflow-hidden">
        
        {/* Google Reviews Header & Scorecard */}
        <div className="bg-gradient-to-b from-[#FBFBF9] to-white p-6 sm:p-10 border-b border-charcoal-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Left Header Info */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Official Google Icon */}
                <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-charcoal-200 flex items-center justify-center p-1.5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm text-charcoal-900 tracking-tight">
                    Google Maps Customer Reviews
                  </span>
                  <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" />
                    <span>Verified Listing</span>
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-serif font-black text-2xl sm:text-3xl text-charcoal-900">
                  Real Reviews Running Live in Sequence
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                  Hover over any card to pause and read. Extracted directly from Deli on Main Street at 604 N Main St.
                </p>
              </div>

              {/* Popular Mentions Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[11px] font-semibold text-charcoal-500 mr-1">Trending Topics:</span>
                {GOOGLE_REVIEWS_STATS.popularMentions.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold bg-cream-300 text-charcoal-700 px-2.5 py-1 rounded-lg border border-charcoal-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Scorecard & Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-5 rounded-2xl border border-charcoal-200 shadow-sm flex-shrink-0">
              <div className="flex items-center gap-3 pr-3 sm:border-r border-charcoal-200">
                <div className="text-center">
                  <div className="text-4xl font-black text-charcoal-900 leading-none">
                    {GOOGLE_REVIEWS_STATS.overallRating}
                  </div>
                  <div className="flex justify-center text-amber-500 my-1.5">
                    {[1, 2, 3, 4].map(i => (
                      <Star key={i} className="w-4 h-4 fill-[#fabb05] text-[#fabb05]" />
                    ))}
                    <div className="relative">
                      <Star className="w-4 h-4 text-charcoal-300 fill-charcoal-300" />
                      <div className="absolute inset-0 overflow-hidden w-[35%]">
                        <Star className="w-4 h-4 fill-[#fabb05] text-[#fabb05]" />
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-charcoal-500 font-bold block">
                    {GOOGLE_REVIEWS_STATS.totalReviews} reviews
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <a
                  href={GOOGLE_REVIEWS_STATS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-charcoal-900 hover:bg-black text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition whitespace-nowrap"
                >
                  <span>Open Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className={`text-[11px] font-bold py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 transition whitespace-nowrap ${
                    isPaused
                      ? 'bg-amber-100 text-amber-900 border-amber-300'
                      : 'bg-cream-200 hover:bg-cream-300 text-charcoal-800 border-charcoal-300'
                  }`}
                >
                  {isPaused ? (
                    <>
                      <Play className="w-3 h-3 text-emerald-700 fill-emerald-700" />
                      <span>Resume Running Stream</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-3 h-3 text-amber-700 fill-amber-700" />
                      <span>Pause Running Line</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Live Running Sequence Indicator Bar */}
        <div className="bg-[#FAF9F5] border-b border-charcoal-200 px-6 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'
              }`}
            />
            <span className="font-bold text-charcoal-800">
              {isPaused ? 'Stream Paused' : 'Live Running Reviews Stream'}
            </span>
            <span className="text-charcoal-400 hidden sm:inline">•</span>
            <span className="text-charcoal-500 text-[11px] hidden sm:inline">
              Continuous marquee sequence • Hover any card to pause
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-charcoal-500">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>234 Verified Google Reviews</span>
          </div>
        </div>

        {/* RUNNING LINES IN SEQUENCE (Marquee Tracks) */}
        <div className="relative py-6 sm:py-8 overflow-hidden bg-gradient-to-b from-white via-cream-100/50 to-white">
          
          {/* Subtle Left & Right Gradient Shadows to give smooth fade effect at edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Running Line Row 1: Leftward Sequence */}
          <div className="mb-5 overflow-hidden flex">
            <div
              className={`animate-marquee-left pause-on-hover ${
                isPaused ? 'marquee-paused' : ''
              }`}
            >
              {streamRow1.map((rev, idx) => renderReviewCard(rev, `row1-${idx}`))}
            </div>
          </div>

          {/* Running Line Row 2: Rightward Sequence */}
          <div className="overflow-hidden flex">
            <div
              className={`animate-marquee-right pause-on-hover ${
                isPaused ? 'marquee-paused' : ''
              }`}
            >
              {streamRow2.map((rev, idx) => renderReviewCard(rev, `row2-${idx}`))}
            </div>
          </div>

        </div>

        {/* Running Stream Action Footer */}
        <div className="bg-[#FAF9F5] border-t border-charcoal-200 p-6 sm:p-8 text-center space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-left sm:text-right">
              <h4 className="font-serif font-bold text-base text-charcoal-900">
                Loved your meal at Deli on Main Street?
              </h4>
              <p className="text-xs text-charcoal-500">
                Join our 234+ Google reviewers and help other Fuquay-Varina families find us.
              </p>
            </div>

            <a
              href={GOOGLE_REVIEWS_STATS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs font-bold py-3 px-5 rounded-xl shadow-md transition whitespace-nowrap"
            >
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Write a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
