import React from 'react';
import { Flame, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface IntroSectionProps {
  onOpenMenu: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenMenu }) => {
  const highlights = [
    {
      title: 'AUTHENTIC DESI TASTE',
      description: 'Handcrafted with traditional ground masalas, slow-cooked gravies, and time-honored Larkana culinary recipes.',
      icon: Flame,
    },
    {
      title: 'FRESHLY PREPARED',
      description: 'Every karahi is made fresh in a sizzling wok when you order, served straight from fire to your table.',
      icon: Clock,
    },
    {
      title: 'TRADITIONAL HOSPITALITY',
      description: 'Rooted in Sindhi and Pakistani warmth. Families, travelers, and late-night diners are treated like honored guests.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="intro" className="relative py-24 bg-[#F7F0E3] text-[#191616] overflow-hidden bg-grain">
      {/* Subtle decorative gold borders top and bottom */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C59A52]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C59A52]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Close-Up Pakistani Food Visual */}
          <div className="lg:col-span-6 relative">
            {/* Decorative Offset Gold Frame */}
            <div className="absolute -inset-3 border-2 border-[#C59A52]/40 rounded-sm translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />

            <div className="relative rounded-sm overflow-hidden shadow-2xl bg-[#191616] group">
              <img
                src="/images/signature_karahi_1790151872155.jpg"
                alt="Close-up of Subhanalla Signature Desi Karahi"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A1115]/80 via-transparent to-transparent opacity-60" />

              {/* Bottom Tag overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-[#3A1115]/90 border border-[#C59A52]/50 text-[#FFF9EF] backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C59A52] font-semibold">
                  Handcrafted In Larkana
                </p>
                <p className="font-['Cormorant_Garamond'] text-xl font-bold mt-0.5">
                  Pure Desi Ghee & Iron-Wok Cooking
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#3A1115] text-[#FFF9EF] p-4 sm:p-5 rounded-sm border border-[#C59A52] shadow-xl">
              <span className="block font-['Cormorant_Garamond'] text-3xl font-bold text-[#C59A52] leading-none">
                24/7
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#FFF9EF]/80 font-medium">
                Always Hot & Ready
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Intro & 3 Gold Highlights */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9E252B] font-bold">
                <span className="w-6 h-[1.5px] bg-[#9E252B]" />
                Tradition Since Day One
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3A1115] leading-[1.05]">
                THE TASTE OF SUBHANALLA
              </h2>
              <div className="w-20 h-[2px] bg-[#C59A52]" />
            </div>

            <p className="font-['Cormorant_Garamond'] text-2xl sm:text-2xl text-[#651F24] italic font-medium leading-snug">
              “Traditional Pakistani flavors prepared with care — from rich karahi and desi curries to fresh parathas and comforting tea.”
            </p>

            <p className="text-base text-[#191616]/80 leading-relaxed font-['Manrope']">
              Located at Chandka Staff Colony in Larkana, Subhanalla Restaurant is where rich aromas of roasting cumin, searing chicken tikka, and bubbling karahi fill the air. Whether you stop by for a hearty morning breakfast of crispy Anda Paratha with hot doodh patti chai, or gather with family for a midnight dinner feast, we honor true Pakistani culinary heritage with every plate.
            </p>

            {/* 3 Premium Highlights with Gold Icons */}
            <div className="space-y-5 pt-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-sm bg-[#FFF9EF] border border-[#C59A52]/30 shadow-sm hover:border-[#C59A52] hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-sm bg-[#3A1115] text-[#C59A52] flex items-center justify-center shrink-0 border border-[#C59A52]/40 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-['Manrope'] text-sm font-bold uppercase tracking-wider text-[#3A1115]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#191616]/75 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={onOpenMenu}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-sm bg-[#3A1115] hover:bg-[#651F24] text-[#FFF9EF] font-semibold text-sm tracking-wider uppercase border border-[#C59A52] transition-colors cursor-pointer shadow-md"
              >
                Explore Full Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
