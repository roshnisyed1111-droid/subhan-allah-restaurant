import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { SignatureDishes } from './components/SignatureDishes';
import { ThreeDFeature } from './components/ThreeDFeature';
import { RestaurantExperience } from './components/RestaurantExperience';
import { VisualGallery } from './components/VisualGallery';
import { ReviewsTrust } from './components/ReviewsTrust';
import { LocationCta } from './components/LocationCta';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MenuModal } from './components/MenuModal';
import { DishItem } from './data/restaurantData';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);

  const handleOpenMenu = () => {
    setSelectedDish(null);
    setIsMenuOpen(true);
  };

  const handleOpenOrder = () => {
    setIsMenuOpen(true);
  };

  const handleSelectDish = (dish: DishItem) => {
    setSelectedDish(dish);
    setIsMenuOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#191616] font-['Manrope'] selection:bg-[#C59A52]/25 selection:text-[#3A1115] relative">
      {/* Navbar with smooth scroll & sticky transition */}
      <Navbar onOpenMenu={handleOpenMenu} onOpenOrder={handleOpenOrder} />

      {/* Main Sections */}
      <main>
        {/* Cinematic Full-Screen Hero */}
        <Hero onOpenMenu={handleOpenMenu} onOpenOrder={handleOpenOrder} />

        {/* Intro Split Section: The Taste of Subhanalla */}
        <IntroSection onOpenMenu={handleOpenMenu} />

        {/* Signature Dishes: Dark Burgundy with 3D Hover Cards */}
        <SignatureDishes onOpenMenu={handleOpenMenu} onSelectDish={handleSelectDish} />

        {/* 3D Showcase: A Taste Worth Experiencing */}
        <ThreeDFeature />

        {/* Restaurant Experience: Warm Cream with 4 Feature Cards */}
        <RestaurantExperience />

        {/* Visual Gallery: Asymmetric Masonry */}
        <VisualGallery />

        {/* Reviews & Trust: Dark Charcoal with Verified 3.7 / 5 Score */}
        <ReviewsTrust />

        {/* Location & Directions CTA: Premium Maroon */}
        <LocationCta />

        {/* Final CTA: Hungry Yet? */}
        <FinalCta onOpenMenu={handleOpenMenu} onOpenOrder={handleOpenOrder} />
      </main>

      {/* Dark Charcoal Footer */}
      <Footer />

      {/* Interactive Menu & WhatsApp Order Modal */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        initialSelectedDish={selectedDish}
      />
    </div>
  );
}
