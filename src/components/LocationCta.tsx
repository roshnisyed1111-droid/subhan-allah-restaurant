import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Shield } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationCta: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Subhanalla restaurant Larkana Chandka Staff Colony Pakistan')}`;

  return (
    <section id="location" className="relative py-24 bg-[#651F24] text-[#FFF9EF] overflow-hidden">
      {/* Decorative gradient overlay & grain */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3A1115] via-[#651F24] to-[#9E252B]/80" />
      <div className="absolute inset-0 bg-dark-grain opacity-40 pointer-events-none" />

      {/* Warm ambient circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59A52]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#3A1115]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3A1115]/80 border border-[#C59A52]/50 text-[#C59A52] text-xs uppercase tracking-[0.3em] font-semibold">
            <MapPin className="w-4 h-4" />
            Larkana, Sindh · Visit Us Today
          </div>

          {/* Headline */}
          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FFF9EF] leading-tight text-balance">
            COME TASTE THE REAL DESI FLAVOR
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#C59A52]/50" />
            <span className="w-2 h-2 rotate-45 border border-[#C59A52] bg-[#C59A52]" />
            <span className="w-12 h-[1px] bg-[#C59A52]/50" />
          </div>

          {/* Address & Hours */}
          <div className="space-y-3">
            <p className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl text-[#FFF9EF] font-medium tracking-wide">
              {RESTAURANT_INFO.address}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#F7F0E3]/85 font-['Manrope']">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C59A52]" />
                {RESTAURANT_INFO.hours}
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#C59A52]" />
                Family & Group Seating Available
              </span>
            </div>
          </div>

          {/* 3 Prominent Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* GET DIRECTIONS */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-sm bg-[#FFF9EF] hover:bg-[#F7F0E3] text-[#3A1115] font-bold text-sm tracking-wider uppercase shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#9E252B]" />
              <span>GET DIRECTIONS</span>
            </a>

            {/* CALL NOW */}
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-sm bg-[#3A1115] hover:bg-[#191616] text-[#FFF9EF] font-bold text-sm tracking-wider uppercase border border-[#C59A52] shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#C59A52]" />
              <span>CALL NOW</span>
            </a>

            {/* WHATSAPP US */}
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-sm bg-[#25D366] hover:bg-[#22c35e] text-white font-bold text-sm tracking-wider uppercase shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          {/* Contact Direct Number Display */}
          <div className="pt-4 text-xs tracking-widest text-[#FFF9EF]/80 font-mono">
            Direct Kitchen Line: <span className="text-[#C59A52] font-bold text-sm">{RESTAURANT_INFO.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
