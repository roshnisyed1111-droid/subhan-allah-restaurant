import React, { useState, useRef, useEffect } from 'react';
import { Rotate3d, Sparkles, Flame, Eye, Volume2, ShieldCheck } from 'lucide-react';

export const ThreeDFeature: React.FC = () => {
  const [activeItem, setActiveItem] = useState<'karahi' | 'paratha' | 'chai'>('karahi');
  const [rotation, setRotation] = useState({ x: 8, y: 15 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Auto gentle floating rotation when not dragging
  useEffect(() => {
    if (!isAutoRotating || isDragging) return;
    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: Math.sin(Date.now() / 2000) * 8,
        y: (prev.y + 0.4) % 360,
      }));
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoRotating, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;
    dragStart.current = { x: e.clientX, y: e.clientY };

    setRotation((prev) => ({
      x: Math.max(-25, Math.min(25, prev.x - deltaY * 0.4)),
      y: prev.y + deltaX * 0.5,
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const itemDetails = {
    karahi: {
      title: 'Sizzling Iron Karahi',
      urdu: 'شنواری و لاہوری ذائقہ',
      desc: 'Forged in heavy iron woks to seal in succulent chicken juices with fresh red tomatoes, crushed coriander, cumin seeds, and ginger juliennes.',
      image: '/src/assets/images/centerpiece_karahi_1790151907065.jpg',
      spices: ['Whole Cumin', 'Ginger Juliennes', 'Black Pepper', 'Green Chili', 'Tomato Masala'],
      heat: 'Cooked over 400°C live flame',
      texture: 'Rich Tari Gravy'
    },
    paratha: {
      title: 'Crisp Multi-Layered Anda Paratha',
      urdu: 'خستہ و لذیذ انڈا پراٹھا',
      desc: 'Hand-rolled spiral dough layers, griddled with pure desi ghee on heavy cast iron tawa until blistered gold, served with seasoned desi egg.',
      image: '/src/assets/images/signature_anda_paratha_1790151895917.jpg',
      spices: ['Desi Ghee', 'Ajwain & Kalonji', 'Cracked Pepper', 'Farm Egg'],
      heat: 'Evenly blistered golden on tawa',
      texture: 'Flaky & Melts in Mouth'
    },
    chai: {
      title: 'Karak Doodh Patti Chai',
      urdu: 'کڑک دودھ پتی چائے',
      desc: 'Full-fat fresh milk boiled slow with crushed green cardamom pods and premium black tea leaves until deep amber color and velvet smooth.',
      image: '/src/assets/images/gallery_pakistani_tea_1790151934436.jpg',
      spices: ['Green Cardamom', 'Sindhi Buffalo Milk', 'Black CTC Tea', 'Raw Sugar'],
      heat: 'Simmered slow in copper degchi',
      texture: 'Rich, Creamy & Aromatic'
    }
  };

  const active = itemDetails[activeItem];

  return (
    <section className="relative py-28 bg-[#191616] text-[#FFF9EF] overflow-hidden">
      {/* Dynamic backdrop with lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3A1115]/70 via-[#191616] to-[#3A1115]/90" />
      
      {/* Warm volumetric lighting spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#C59A52]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#9E252B]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating subtle spice particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#C59A52]/50 animate-particle"
            style={{
              width: `${(i % 3) * 2 + 3}px`,
              height: `${(i % 3) * 2 + 3}px`,
              top: `${15 + (i * 9)}%`,
              left: `${10 + (i * 10)}%`,
              animationDuration: `${4 + (i % 4)}s`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[#C59A52] font-semibold">
            <Rotate3d className="w-4 h-4 text-[#C59A52] animate-spin" style={{ animationDuration: '8s' }} />
            Interactive 3D Sensory Showcase
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFF9EF] text-balance">
            A TASTE WORTH EXPERIENCING
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#C59A52]/40" />
            <span className="w-2 h-2 rotate-45 border border-[#C59A52] bg-[#C59A52]" />
            <span className="w-12 h-[1px] bg-[#C59A52]/40" />
          </div>

          <p className="text-sm sm:text-base text-[#F7F0E3]/75 font-light font-['Manrope']">
            Inspect every nuance: from the blistered wok crust to glistening tari oil and aromatic spices. Drag horizontally to rotate the showpiece.
          </p>

          {/* Selector Tabs */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-[#3A1115]/90 border border-[#C59A52]/40 shadow-inner mt-4">
            {(['karahi', 'paratha', 'chai'] as const).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveItem(key);
                  setRotation({ x: 8, y: 15 });
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeItem === key
                    ? 'bg-gradient-to-r from-[#651F24] to-[#9E252B] text-[#FFF9EF] shadow-md border border-[#C59A52]'
                    : 'text-[#FFF9EF]/70 hover:text-[#C59A52]'
                }`}
              >
                {key === 'karahi' ? 'Chicken Karahi' : key === 'paratha' ? 'Anda Paratha' : 'Karak Chai'}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Showcase Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details: Spices & Craft */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            <div className="p-6 rounded-sm bg-[#3A1115]/70 border border-[#C59A52]/30 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between border-b border-[#C59A52]/20 pb-3">
                <span className="text-xs uppercase tracking-widest text-[#C59A52] font-semibold font-['Manrope']">
                  Sensory Blueprint
                </span>
                <span className="text-xs font-mono text-[#C59A52]">{active.urdu}</span>
              </div>

              <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-bold text-[#FFF9EF]">
                {active.title}
              </h3>

              <p className="text-sm text-[#F7F0E3]/80 leading-relaxed font-['Manrope']">
                {active.desc}
              </p>

              {/* Spices Breakdown */}
              <div className="space-y-2 pt-2">
                <span className="text-xs uppercase tracking-wider text-[#C59A52] block font-semibold">
                  Aromatic Profile
                </span>
                <div className="flex flex-wrap gap-2">
                  {active.spices.map((spice) => (
                    <span
                      key={spice}
                      className="text-xs px-2.5 py-1 rounded-xs bg-[#191616] text-[#F7F0E3] border border-[#C59A52]/30 font-medium"
                    >
                      {spice}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric stats */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#C59A52]/20 text-xs">
                <div>
                  <span className="text-[#C59A52]/80 block text-[10px] uppercase tracking-wider">Preparation</span>
                  <span className="font-semibold text-[#FFF9EF]">{active.heat}</span>
                </div>
                <div>
                  <span className="text-[#C59A52]/80 block text-[10px] uppercase tracking-wider">Texture</span>
                  <span className="font-semibold text-[#FFF9EF]">{active.texture}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center 3D Interactive Stage */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div
              className="relative w-72 sm:w-96 aspect-square perspective-1000 select-none cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Pedestal Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/80 rounded-full blur-xl transform scale-y-50" />

              {/* Ornate Gold Rotating Base Ring */}
              <div
                className="absolute inset-2 rounded-full border-2 border-[#C59A52]/40"
                style={{
                  transform: `rotateX(70deg) rotateZ(${rotation.y}deg)`,
                  boxShadow: '0 0 30px rgba(197, 154, 82, 0.2)',
                }}
              />

              {/* The 3D rotating food dish */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#C59A52] shadow-[0_30px_60px_rgba(0,0,0,0.9)] transition-transform ease-out"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={active.image}
                  alt={active.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover pointer-events-none scale-105"
                />

                {/* Sizzling light glint reflection overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                  style={{
                    transform: `translateX(${rotation.y % 100}%)`,
                  }}
                />

                {/* Depth shadow scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              </div>
            </div>

            {/* Interaction Instructions & Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#3A1115] border border-[#C59A52]/50 text-[#C59A52] hover:bg-[#651F24] transition-colors cursor-pointer"
              >
                <Rotate3d className="w-3.5 h-3.5" />
                <span>{isAutoRotating ? 'Pause Rotation' : 'Resume 360° Spin'}</span>
              </button>

              <span className="text-[11px] text-[#F7F0E3]/60 tracking-wider">
                Click & drag to tilt 3D angle
              </span>
            </div>
          </div>

          {/* Right Column: Larkana Culinary Heritage Notes */}
          <div className="lg:col-span-3 space-y-5 order-3">
            <div className="p-5 rounded-sm bg-[#3A1115]/50 border border-[#C59A52]/20 space-y-3">
              <div className="flex items-center gap-2 text-[#C59A52]">
                <Flame className="w-4 h-4 text-[#C59A52]" />
                <span className="text-xs font-bold uppercase tracking-wider">Wok & Tawa Precision</span>
              </div>
              <p className="text-xs text-[#F7F0E3]/80 leading-relaxed font-['Manrope']">
                Unlike mass commercial kitchens, every Subhanalla wok is seasoned with garlic water and mustard oil before each batch.
              </p>
            </div>

            <div className="p-5 rounded-sm bg-[#3A1115]/50 border border-[#C59A52]/20 space-y-3">
              <div className="flex items-center gap-2 text-[#C59A52]">
                <ShieldCheck className="w-4 h-4 text-[#C59A52]" />
                <span className="text-xs font-bold uppercase tracking-wider">Pure Ingredients</span>
              </div>
              <p className="text-xs text-[#F7F0E3]/80 leading-relaxed font-['Manrope']">
                Zero artificial colorants, zero frozen meats. Only halal cuts sourced daily from vetted local Larkana suppliers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
