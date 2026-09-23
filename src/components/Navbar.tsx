import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu, onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#signature' },
    { label: 'About', href: '#intro' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#3A1115]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#C59A52]/20'
            : 'bg-gradient-to-b from-[#191616]/80 via-[#191616]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Wordmark brand */}
            <a
              href="#hero"
              className="group flex flex-col focus:outline-none"
              aria-label="Subhanalla Restaurant Home"
            >
              <span className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#FFF9EF] group-hover:text-[#C59A52] transition-colors uppercase">
                SUBHANALLA
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#C59A52] uppercase -mt-1 font-medium font-['Manrope']">
                Restaurant · Larkana
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium tracking-wider text-[#FFF9EF]/85 hover:text-[#C59A52] transition-colors relative py-1 focus:outline-none cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C59A52] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Zone 3: Actions */}
            <div className="flex items-center space-x-3">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Subhanalla Restaurant"
                className="hidden sm:inline-flex items-center justify-center p-2.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-all duration-200 hover:scale-105"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenOrder}
                className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-sm bg-gradient-to-r from-[#651F24] via-[#9E252B] to-[#651F24] text-[#FFF9EF] border border-[#C59A52]/50 shadow-lg hover:shadow-[#9E252B]/30 hover:border-[#C59A52] hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Order Now
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="lg:hidden p-2 text-[#FFF9EF] hover:text-[#C59A52] transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#3A1115]/98 backdrop-blur-lg lg:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#C59A52] border-b border-[#C59A52]/20 pb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 font-['Cormorant_Garamond'] text-2xl text-[#FFF9EF] hover:text-[#C59A52] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-[#C59A52]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-[#651F24] to-[#9E252B] text-[#FFF9EF] border border-[#C59A52] rounded-sm shadow-md"
            >
              Order Now
            </button>
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-center text-sm font-semibold uppercase tracking-wider bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 rounded-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us (+92 310 3358405)
            </a>
          </div>
        </div>
      )}
    </>
  );
};
