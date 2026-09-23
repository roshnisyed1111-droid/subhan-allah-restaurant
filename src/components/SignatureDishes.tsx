import React, { useState } from 'react';
import { SIGNATURE_DISHES, DishItem } from '../data/restaurantData';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';

interface SignatureDishesProps {
  onOpenMenu: () => void;
  onSelectDish: (dish: DishItem) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onOpenMenu, onSelectDish }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="signature"
      className="relative py-28 bg-[#3A1115] text-[#FFF9EF] overflow-hidden bg-dark-grain"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#651F24]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-24 right-12 w-80 h-80 bg-[#C59A52]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-[#C59A52] font-semibold">
            <Flame className="w-4 h-4 text-[#C59A52]" />
            Larkana Culinary Legends
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFF9EF] text-balance">
            OUR SIGNATURE FLAVORS
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#C59A52]/40" />
            <span className="w-2 h-2 rotate-45 border border-[#C59A52] bg-[#C59A52]" />
            <span className="w-12 h-[1px] bg-[#C59A52]/40" />
          </div>

          <p className="text-sm sm:text-base text-[#F7F0E3]/75 font-light max-w-xl mx-auto font-['Manrope']">
            Masterfully prepared over live flames using century-tested recipes, fresh local spices, and unmistakable Pakistani soul.
          </p>
        </div>

        {/* 3 Large Cinematic Food Cards with 3D Hover Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 perspective-1000">
          {SIGNATURE_DISHES.map((dish, index) => {
            const isHovered = hoveredCard === dish.id;

            return (
              <div
                key={dish.id}
                onMouseEnter={() => setHoveredCard(dish.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-sm bg-[#191616] border border-[#C59A52]/30 shadow-2xl overflow-hidden transition-all duration-500 cursor-pointer flex flex-col justify-between"
                style={{
                  transform: isHovered
                    ? 'translateY(-10px) rotateY(-2deg) rotateX(4deg) scale(1.02)'
                    : 'translateY(0px) rotateY(0deg) rotateX(0deg) scale(1)',
                  boxShadow: isHovered
                    ? '0 25px 50px -12px rgba(197, 154, 82, 0.25), 0 0 20px rgba(101, 31, 36, 0.6)'
                    : '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
                }}
                onClick={() => onSelectDish(dish)}
              >
                {/* Image Container with Dark Gradient */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191616] via-[#191616]/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#3A1115]/60 via-transparent to-transparent opacity-80" />

                  {/* Gold Tag */}
                  {dish.tag && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#651F24]/90 border border-[#C59A52] text-[#FFF9EF] text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-[#C59A52]" />
                      <span>{dish.tag}</span>
                    </div>
                  )}

                  {/* Urdu Script Calligraphy Overlay */}
                  <div className="absolute top-4 right-4 text-right">
                    <span className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#C59A52]/90 drop-shadow-md">
                      {dish.urduName}
                    </span>
                  </div>

                  {/* Price Tag in Gold */}
                  <div className="absolute bottom-4 right-4 bg-[#3A1115]/90 border border-[#C59A52]/60 px-3.5 py-1.5 rounded-sm backdrop-blur-md">
                    <span className="text-xs font-mono font-bold text-[#C59A52] tracking-wider tabular-nums">
                      {dish.price}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#191616] to-[#250d10]">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#9E252B]" />
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#C59A52] font-semibold">
                        Larkana Authentic
                      </span>
                    </div>

                    <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-bold text-[#FFF9EF] group-hover:text-[#C59A52] transition-colors">
                      {dish.name}
                    </h3>

                    <p className="text-sm text-[#F7F0E3]/75 leading-relaxed font-light font-['Manrope']">
                      {dish.description}
                    </p>
                  </div>

                  {/* Action Link: "Explore Menu" */}
                  <div className="pt-4 border-t border-[#C59A52]/20 flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenMenu();
                      }}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C59A52] hover:text-[#FFF9EF] font-semibold group-hover:underline transition-all cursor-pointer"
                    >
                      <span>Explore Menu</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <span className="text-[10px] text-[#F7F0E3]/50 uppercase tracking-widest">
                      Freshly Cooked
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Menu Action */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenMenu}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-[#651F24] via-[#9E252B] to-[#651F24] text-[#FFF9EF] font-semibold text-sm tracking-widest uppercase border border-[#C59A52] shadow-xl hover:shadow-[#C59A52]/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>View Complete Subhanalla Menu</span>
            <ArrowRight className="w-4 h-4 text-[#C59A52]" />
          </button>
        </div>
      </div>
    </section>
  );
};
