import React from 'react';
import { Star, MapPin, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsTrust: React.FC = () => {
  const { score, totalReviews, source } = RESTAURANT_INFO.rating;

  // Star breakdown based on 3.7 overall score
  const ratingDistribution = [
    { stars: 5, percentage: 52 },
    { stars: 4, percentage: 24 },
    { stars: 3, percentage: 12 },
    { stars: 2, percentage: 6 },
    { stars: 1, percentage: 6 },
  ];

  const highlights = [
    { label: 'Authentic Flavor Profile', desc: 'Renowned for rich, robust masala gravies and freshly cooked karahi' },
    { label: 'Popular Breakfast Destination', desc: 'Favored local morning stop for fresh hot Anda Paratha & tea' },
    { label: 'Late Night Availability', desc: 'Consistent 24-hour service serving warm meals anytime' },
    { label: 'Larkana Community Choice', desc: 'Serving families, doctors, and travelers across Chandka Colony' },
  ];

  return (
    <section id="reviews" className="relative py-24 bg-[#191616] text-[#FFF9EF] overflow-hidden bg-dark-grain">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C59A52]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-[#C59A52] font-semibold">
            <Award className="w-4 h-4 text-[#C59A52]" />
            Verified Customer Sentiment
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFF9EF] text-balance">
            LOVED FOR THE DESI TASTE
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#C59A52]/40" />
            <span className="w-2 h-2 rotate-45 border border-[#C59A52] bg-[#C59A52]" />
            <span className="w-12 h-[1px] bg-[#C59A52]/40" />
          </div>

          <p className="text-sm sm:text-base text-[#F7F0E3]/75 font-light font-['Manrope']">
            Public rating summary and diner feedback compiled from verified visitors in Larkana, Pakistan.
          </p>
        </div>

        {/* Rating Scorecard */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-sm bg-[#3A1115]/60 border border-[#C59A52]/40 shadow-2xl backdrop-blur-md">
          {/* Main Score & Stars */}
          <div className="md:col-span-5 text-center md:text-left space-y-4 border-b md:border-b-0 md:border-r border-[#C59A52]/30 pb-6 md:pb-0 md:pr-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59A52]/20 border border-[#C59A52]/50 text-xs text-[#C59A52] font-semibold uppercase tracking-wider">
              <CheckCircle className="w-3.5 h-3.5" />
              Verified Public Rating
            </div>

            <div className="flex items-baseline justify-center md:justify-start gap-2">
              <span className="font-['Cormorant_Garamond'] text-6xl sm:text-7xl font-bold text-[#FFF9EF] tracking-tight tabular-nums">
                {score}
              </span>
              <span className="text-2xl text-[#C59A52] font-light">/ 5.0</span>
            </div>

            {/* Star Visual */}
            <div className="flex items-center justify-center md:justify-start gap-1.5">
              {[1, 2, 3].map((star) => (
                <Star key={star} className="w-6 h-6 fill-[#C59A52] text-[#C59A52]" />
              ))}
              {/* Partial star for 3.7 */}
              <div className="relative w-6 h-6">
                <Star className="w-6 h-6 text-[#C59A52]/40" />
                <div className="absolute inset-0 overflow-hidden w-[70%]">
                  <Star className="w-6 h-6 fill-[#C59A52] text-[#C59A52]" />
                </div>
              </div>
              <Star className="w-6 h-6 text-[#C59A52]/40" />
            </div>

            <div className="space-y-1">
              <div className="text-base font-semibold text-[#FFF9EF] font-['Manrope']">
                Based on <span className="text-[#C59A52] font-mono tabular-nums">{totalReviews}</span> verified diner ratings
              </div>
              <div className="text-xs text-[#F7F0E3]/60 flex items-center justify-center md:justify-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C59A52]" />
                <span>{source} · Larkana</span>
              </div>
            </div>
          </div>

          {/* Rating Breakdown Bars */}
          <div className="md:col-span-7 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C59A52] font-semibold mb-2">
              Rating Distribution
            </h4>
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3 text-xs">
                <span className="w-12 text-[#FFF9EF]/80 font-mono flex items-center gap-1 shrink-0">
                  {item.stars} <Star className="w-3 h-3 fill-[#C59A52] text-[#C59A52]" />
                </span>
                <div className="flex-1 h-2 rounded-full bg-[#191616] overflow-hidden border border-[#C59A52]/20">
                  <div
                    className="h-full bg-gradient-to-r from-[#C59A52] to-[#E0BA75] rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="w-10 text-right font-mono text-[#C59A52] tabular-nums">
                  {item.percentage}%
                </span>
              </div>
            ))}

            <div className="pt-4 border-t border-[#C59A52]/20 flex items-center justify-between text-[11px] text-[#F7F0E3]/70">
              <span>Authentic Local Larkana Experience</span>
              <a
                href="https://maps.google.com/?q=Subhanalla+restaurant+Larkana"
                target="_blank"
                rel="noreferrer"
                className="text-[#C59A52] hover:text-[#FFF9EF] inline-flex items-center gap-1 font-semibold"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Diner Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="p-5 rounded-sm bg-[#191616]/80 border border-[#C59A52]/25 space-y-1.5"
            >
              <div className="flex items-center gap-2 text-[#C59A52]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59A52]" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#FFF9EF]">
                  {h.label}
                </h5>
              </div>
              <p className="text-xs text-[#F7F0E3]/70 font-light font-['Manrope'] leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
