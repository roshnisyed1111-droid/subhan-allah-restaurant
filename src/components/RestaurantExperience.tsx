import React from 'react';
import { ShieldCheck, Users, ShoppingBag, Clock4, Award } from 'lucide-react';

export const RestaurantExperience: React.FC = () => {
  const experiences = [
    {
      title: 'HALAL FOOD',
      subtitle: 'Fresh & Authentic',
      description: '100% verified hand-slaughtered halal meats and poultry, delivered fresh daily and prepared under meticulous hygiene standards.',
      icon: ShieldCheck,
      number: '01',
    },
    {
      title: 'DINE-IN',
      subtitle: 'Comfortable Atmosphere',
      description: 'Dedicated family sections, attentive service, and the vibrant hospitality Larkana is famous for. Comfort for groups of all sizes.',
      icon: Users,
      number: '02',
    },
    {
      title: 'TAKEAWAY',
      subtitle: 'Quick & Convenient',
      description: 'Insulated hot packaging ensures your sizzling karahi, piping hot naans, and tandoori grills arrive at your home with peak flavor intact.',
      icon: ShoppingBag,
      number: '03',
    },
    {
      title: 'OPEN 24 HOURS',
      subtitle: 'Here When You Need Us',
      description: 'Whether it is a sunrise breakfast paratha, an afternoon lunch spread, or a 2:00 AM midnight hunger craving, our fire is always burning.',
      icon: Clock4,
      number: '04',
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 bg-[#F7F0E3] text-[#191616] overflow-hidden bg-grain"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-[#9E252B] font-bold">
            <Award className="w-4 h-4 text-[#C59A52]" />
            The Subhanalla Promise
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#3A1115] text-balance">
            RESTAURANT EXPERIENCE
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#C59A52]/40" />
            <span className="w-2 h-2 rotate-45 border border-[#C59A52] bg-[#C59A52]" />
            <span className="w-12 h-[1px] bg-[#C59A52]/40" />
          </div>

          <p className="text-sm sm:text-base text-[#191616]/75 font-light font-['Manrope']">
            Designed for guests who appreciate authentic hospitality, uncompromised cleanliness, and generous portions.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className="group relative p-8 rounded-sm bg-[#FFF9EF] border border-[#C59A52]/35 shadow-sm hover:shadow-xl hover:border-[#C59A52] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Number index */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#C59A52] font-semibold tracking-wider">
                    {exp.number}
                  </span>
                  <div className="w-12 h-12 rounded-sm bg-[#3A1115] text-[#C59A52] flex items-center justify-center border border-[#C59A52]/40 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-[#C59A52]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#3A1115] group-hover:text-[#9E252B] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C59A52] font-semibold">
                    {exp.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#191616]/75 leading-relaxed pt-2 font-['Manrope']">
                    {exp.description}
                  </p>
                </div>

                {/* Bottom subtle accent line */}
                <div className="pt-6 mt-6 border-t border-[#C59A52]/20">
                  <span className="text-[10px] uppercase tracking-widest text-[#9E252B] font-bold block">
                    Subhanalla Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
