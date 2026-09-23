import React, { useState, useEffect } from 'react';
import { MessageCircle, UtensilsCrossed, Sparkles, Check, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenMenu: () => void;
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenu, onOpenOrder }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const badges = [
    { label: 'Halal Food', detail: '100% Certified' },
    { label: 'Dine-In', detail: 'Family Seating' },
    { label: 'Takeaway', detail: 'Hot & Fresh' },
    { label: 'Open 24 Hours', detail: 'Round The Clock' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#191616] text-[#FFF9EF] pt-24 pb-16 lg:py-0"
    >
      {/* Background Image with Dark Burgundy Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_pakistani_feast_1790151860355.jpg"
          alt="Pakistani culinary feast at Subhanalla Restaurant Larkana"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          style={{
            transform: `scale(1.05) translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
          }}
        />
        {/* Layered cinematic overlays: deep burgundy, rich maroon, and charcoal */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#191616]/95 via-[#3A1115]/85 to-[#3A1115]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191616] via-transparent to-[#191616]/70" />
        {/* Warm golden light glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C59A52]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#9E252B]/20 rounded-full blur-3xl pointer-events-none" />
        {/* Subtle noise grain texture */}
        <div className="absolute inset-0 bg-dark-grain opacity-60 pointer-events-none" />
      </div>

      {/* Floating spice particle dots (cardamom, coriander, paprika flakes) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-[#C59A52]/60 animate-particle"
          style={{ animationDuration: '6s' }}
        />
        <div
          className="absolute top-1/3 right-[20%] w-1.5 h-1.5 rounded-full bg-[#E0BA75]/70 animate-particle"
          style={{ animationDuration: '4.5s', animationDelay: '1s' }}
        />
        <div
          className="absolute top-2/3 left-[28%] w-2.5 h-2.5 rounded-full bg-[#9E252B]/50 animate-particle"
          style={{ animationDuration: '7s', animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 right-[10%] w-2 h-2 rounded-full bg-[#C59A52]/50 animate-particle"
          style={{ animationDuration: '5.2s', animationDelay: '0.5s' }}
        />
        <div
          className="absolute bottom-1/3 left-[45%] w-1.5 h-1.5 rounded-full bg-[#FFF9EF]/40 animate-particle"
          style={{ animationDuration: '8s', animationDelay: '1.5s' }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[85vh] py-12">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            {/* Top Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#3A1115]/80 border border-[#C59A52]/40 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#C59A52] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C59A52] font-semibold">
                Larkana, Sindh · 24/7 Traditional Kitchen
              </span>
            </div>

            {/* Brand Title */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C59A52] font-semibold font-['Manrope']">
                WELCOME TO
              </h2>
              <h1 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.04em] text-[#FFF9EF] leading-[0.95] drop-shadow-2xl">
                SUBHANALLA
                <span className="block text-3xl sm:text-4xl md:text-5xl font-light text-[#C59A52] italic mt-1 font-['Cormorant_Garamond']">
                  RESTAURANT
                </span>
              </h1>
            </div>

            {/* Tagline & Subtext */}
            <div className="space-y-3 max-w-2xl">
              <p className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl lg:text-4xl text-[#FFF9EF] italic font-medium leading-tight">
                “Authentic Pakistani Taste, Served with Tradition.”
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[#F7F0E3]/80 leading-relaxed font-light font-['Manrope']">
                Rich desi flavors, freshly prepared meals and traditional hospitality in the heart of Larkana.
                From sizzling iron-wok Karahi to golden multi-layered Anda Parathas and Karak Chai.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* ORDER NOW - Dominant maroon-to-red gradient */}
              <button
                onClick={onOpenOrder}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-sm bg-gradient-to-r from-[#651F24] via-[#9E252B] to-[#651F24] text-[#FFF9EF] font-semibold text-sm sm:text-base tracking-wider uppercase border border-[#C59A52] shadow-2xl shadow-[#9E252B]/40 hover:shadow-[#C59A52]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-4 h-4 text-[#C59A52] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* VIEW MENU */}
              <button
                onClick={onOpenMenu}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#FFF9EF]/10 hover:bg-[#FFF9EF]/20 text-[#FFF9EF] font-semibold text-sm sm:text-base tracking-wider uppercase border border-[#C59A52]/40 hover:border-[#C59A52] backdrop-blur-md transition-all duration-200 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#C59A52]" />
                <span>VIEW MENU</span>
              </button>

              {/* WhatsApp Us Button */}
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-sm bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-[#25D366]/40 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* HERO BADGES: 4 elegant mini badges */}
            <div className="pt-4 border-t border-[#C59A52]/20">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
                {badges.map((badge) => (
                  <div
                    key={badge.label}
                    className="p-3 rounded-md bg-[#FFF9EF]/5 hover:bg-[#FFF9EF]/10 border border-[#C59A52]/30 backdrop-blur-md transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-1.5 text-[#C59A52]">
                      <Check className="w-3.5 h-3.5 text-[#C59A52]" />
                      <span className="text-xs font-semibold text-[#FFF9EF] tracking-wide font-['Manrope']">
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#C59A52]/80 mt-0.5 tracking-wider uppercase font-medium">
                      {badge.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Floating 3D-Style Food Showpiece & Ambience */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div
              className="relative w-full max-w-md aspect-square perspective-1000"
              style={{
                transform: `rotateY(${mousePos.x * 0.4}deg) rotateX(${mousePos.y * -0.4}deg)`,
                transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Ambient radial halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9E252B]/30 via-[#C59A52]/20 to-transparent rounded-full blur-2xl animate-pulse-glow" />

              {/* Circular ornate gold ring border */}
              <div className="absolute -inset-2 rounded-full border border-[#C59A52]/40 border-dashed animate-spin" style={{ animationDuration: '60s' }} />

              {/* Floating Karahi / Food element */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#C59A52]/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] animate-float-slow bg-[#191616]">
                <img
                  src="/src/assets/images/signature_karahi_1790151872155.jpg"
                  alt="Sizzling Subhanalla Karahi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-110 hover:scale-115 transition-transform duration-700"
                />

                {/* Sizzling steam effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#191616]/90 via-transparent to-transparent" />

                {/* Floating Tag */}
                <div className="absolute bottom-6 left-6 right-6 text-center p-3 rounded-sm bg-[#3A1115]/90 border border-[#C59A52]/50 backdrop-blur-md">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C59A52] block font-semibold">
                    Signature Larkana Recipe
                  </span>
                  <span className="font-['Cormorant_Garamond'] text-lg font-bold text-[#FFF9EF]">
                    Fresh Iron-Wok Desi Karahi
                  </span>
                </div>
              </div>

              {/* Floating mini badge: Larkana Pride */}
              <div className="absolute -top-4 -right-4 bg-[#651F24] border border-[#C59A52] text-[#FFF9EF] px-3.5 py-2 rounded-sm shadow-xl flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C59A52]" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#C59A52]">Larkana Sindh</div>
                  <div className="text-xs font-bold font-['Manrope']">Original Taste</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#intro"
        aria-label="Scroll to intro section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[#C59A52]/70 hover:text-[#C59A52] flex flex-col items-center gap-1 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Discover</span>
        <div className="w-4 h-7 rounded-full border border-[#C59A52]/50 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#C59A52] animate-bounce" />
        </div>
      </a>
    </section>
  );
};
