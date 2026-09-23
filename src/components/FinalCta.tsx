import React from 'react';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';

interface FinalCtaProps {
  onOpenMenu: () => void;
  onOpenOrder: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenMenu, onOpenOrder }) => {
  return (
    <section className="relative py-32 bg-[#191616] text-[#FFF9EF] overflow-hidden flex items-center justify-center">
      {/* Cinematic Food Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_pakistani_feast_1790151860355.jpg"
          alt="Subhanalla Restaurant Larkana Desi Feast"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-[#3A1115]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#191616] via-[#191616]/75 to-[#191616]/90" />
        <div className="absolute inset-0 bg-dark-grain opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[#C59A52] font-semibold">
          <span className="w-8 h-[1px] bg-[#C59A52]" />
          Larkana's Authentic Kitchen
          <span className="w-8 h-[1px] bg-[#C59A52]" />
        </div>

        <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFF9EF] drop-shadow-lg">
          HUNGRY YET?
        </h2>

        <p className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl text-[#FFF9EF] italic font-medium max-w-xl mx-auto leading-relaxed">
          “Your next desi favorite is waiting.”
        </p>

        <p className="text-sm sm:text-base text-[#F7F0E3]/80 font-light max-w-lg mx-auto font-['Manrope']">
          Sizzling karahis, smoky charbroiled tikkas, and warm layered parathas are prepared fresh on order right now in Larkana.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenOrder}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-[#651F24] via-[#9E252B] to-[#651F24] text-[#FFF9EF] font-bold text-sm sm:text-base tracking-wider uppercase border border-[#C59A52] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>ORDER NOW</span>
            <ArrowRight className="w-4 h-4 text-[#C59A52] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenMenu}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-sm bg-[#FFF9EF]/10 hover:bg-[#FFF9EF]/20 text-[#FFF9EF] font-bold text-sm sm:text-base tracking-wider uppercase border border-[#C59A52]/50 hover:border-[#C59A52] backdrop-blur-md transition-all duration-200 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#C59A52]" />
            <span>VIEW MENU</span>
          </button>
        </div>
      </div>
    </section>
  );
};
