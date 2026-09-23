import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { ZoomIn, X, Camera } from 'lucide-react';

export const VisualGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section id="gallery" className="relative py-28 bg-[#191616] text-[#FFF9EF] overflow-hidden bg-dark-grain">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#9E252B]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C59A52]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-[#C59A52] font-semibold">
            <Camera className="w-4 h-4 text-[#C59A52]" />
            From Our Kitchen & Tandoor
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFF9EF] text-balance">
            VISUAL GALLERY
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#C59A52]/40" />
            <span className="w-2 h-2 rotate-45 border border-[#C59A52] bg-[#C59A52]" />
            <span className="w-12 h-[1px] bg-[#C59A52]/40" />
          </div>

          <p className="text-sm sm:text-base text-[#F7F0E3]/75 font-light font-['Manrope']">
            A visual banquet of freshly rolled parathas, sizzling iron-wok karahis, and charcoal-grilled tikka boti prepared daily in Larkana.
          </p>
        </div>

        {/* Asymmetric / Masonry Layout Grid */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6 auto-rows-[260px] sm:auto-rows-[300px]">
          {/* Card 1: Marquee Big Showcase (7 cols, 2 rows) */}
          <div
            onClick={() => setSelectedImage(GALLERY_ITEMS[0])}
            className="col-span-12 lg:col-span-7 row-span-2 relative rounded-sm overflow-hidden border border-[#C59A52]/30 shadow-2xl group cursor-pointer"
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191616]/90 via-[#191616]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#191616]/70 text-[#C59A52] opacity-0 group-hover:opacity-100 transition-opacity border border-[#C59A52]/40 backdrop-blur-sm">
              <ZoomIn className="w-4 h-4" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 space-y-1">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C59A52] font-semibold block font-['Manrope']">
                Chef's Masterpiece
              </span>
              <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-bold text-[#FFF9EF]">
                {GALLERY_ITEMS[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F0E3]/80 font-light font-['Manrope']">
                {GALLERY_ITEMS[0].caption}
              </p>
            </div>
          </div>

          {/* Card 2: 5 cols (Tikka) */}
          <div
            onClick={() => setSelectedImage(GALLERY_ITEMS[1])}
            className="col-span-12 sm:col-span-6 lg:col-span-5 relative rounded-sm overflow-hidden border border-[#C59A52]/30 shadow-xl group cursor-pointer"
          >
            <img
              src={GALLERY_ITEMS[1].image}
              alt={GALLERY_ITEMS[1].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191616]/90 via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#FFF9EF]">
                {GALLERY_ITEMS[1].title}
              </h3>
              <p className="text-xs text-[#C59A52] font-['Manrope']">{GALLERY_ITEMS[1].caption}</p>
            </div>
          </div>

          {/* Card 3: 5 cols (Tandoor) */}
          <div
            onClick={() => setSelectedImage(GALLERY_ITEMS[2])}
            className="col-span-12 sm:col-span-6 lg:col-span-5 relative rounded-sm overflow-hidden border border-[#C59A52]/30 shadow-xl group cursor-pointer"
          >
            <img
              src={GALLERY_ITEMS[2].image}
              alt={GALLERY_ITEMS[2].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191616]/90 via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#FFF9EF]">
                {GALLERY_ITEMS[2].title}
              </h3>
              <p className="text-xs text-[#C59A52] font-['Manrope']">{GALLERY_ITEMS[2].caption}</p>
            </div>
          </div>

          {/* Card 4: 6 cols (Anda Paratha) */}
          <div
            onClick={() => setSelectedImage(GALLERY_ITEMS[3])}
            className="col-span-12 sm:col-span-6 relative rounded-sm overflow-hidden border border-[#C59A52]/30 shadow-xl group cursor-pointer"
          >
            <img
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191616]/90 via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#FFF9EF]">
                {GALLERY_ITEMS[3].title}
              </h3>
              <p className="text-xs text-[#C59A52] font-['Manrope']">{GALLERY_ITEMS[3].caption}</p>
            </div>
          </div>

          {/* Card 5: 6 cols (Karak Chai) */}
          <div
            onClick={() => setSelectedImage(GALLERY_ITEMS[4])}
            className="col-span-12 sm:col-span-6 relative rounded-sm overflow-hidden border border-[#C59A52]/30 shadow-xl group cursor-pointer"
          >
            <img
              src={GALLERY_ITEMS[4].image}
              alt={GALLERY_ITEMS[4].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191616]/90 via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#FFF9EF]">
                {GALLERY_ITEMS[4].title}
              </h3>
              <p className="text-xs text-[#C59A52] font-['Manrope']">{GALLERY_ITEMS[4].caption}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#191616] border border-[#C59A52] rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#3A1115] text-[#C59A52] hover:text-[#FFF9EF] border border-[#C59A52]/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[70vh] mx-auto"
              />
            </div>
            <div className="p-6 bg-[#3A1115] border-t border-[#C59A52]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#FFF9EF]">
                  {selectedImage.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#C59A52] font-['Manrope'] mt-0.5">
                  {selectedImage.caption}
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FFF9EF]/70 px-3 py-1 bg-[#191616] border border-[#C59A52]/30 rounded-xs">
                Subhanalla Larkana
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
