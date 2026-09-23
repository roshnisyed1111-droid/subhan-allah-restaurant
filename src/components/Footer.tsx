import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, MapPin, MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#signature' },
    { label: 'About', href: '#intro' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#191616] text-[#FFF9EF] border-t border-[#C59A52]/20 pt-16 pb-12 overflow-hidden bg-dark-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C59A52]/15">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="space-y-1">
              <span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-bold tracking-[0.15em] text-[#FFF9EF] uppercase block">
                SUBHANALLA RESTAURANT
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C59A52] block font-['Manrope'] font-semibold">
                Larkana, Sindh, Pakistan
              </span>
            </div>

            <p className="font-['Cormorant_Garamond'] text-xl text-[#F7F0E3]/85 italic">
              “Authentic taste. Traditional hospitality.”
            </p>

            <p className="text-xs text-[#F7F0E3]/60 max-w-md font-['Manrope'] leading-relaxed">
              Serving the finest desi Karahi, Anda Paratha, charcoal BBQ, and refreshing doodh patti chai around the clock in Chandka Staff Colony, Larkana.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A52] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#F7F0E3]/80 font-['Manrope']">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-[#C59A52] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C59A52] font-semibold block">
              Contact & Hours
            </span>
            <div className="space-y-2.5 text-xs text-[#F7F0E3]/80 font-['Manrope']">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59A52] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59A52] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#C59A52] font-mono"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#25D366] hover:underline"
                >
                  WhatsApp Ordering
                </a>
              </div>
              <div className="pt-2 text-[#C59A52] font-semibold">
                Open 24 Hours Daily
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F0E3]/50 font-['Manrope']">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Subhanalla Restaurant Larkana. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 text-[#C59A52]/70">
            <span>Authentic Pakistani Flavors</span>
            <span>·</span>
            <span>Served with Pride</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
