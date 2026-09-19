import React, { useState, useRef, useCallback } from 'react';
import { Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Bare Natural Lashes',
  afterLabel = 'American Volume™ (Waterproof)',
  title = 'Interactive Lash Reveal',
  subtitle = 'Drag the slider to see how Sophia Navarro\'s custom fan mapping transforms eye architecture without weight',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      {title && (
        <div className="text-center mb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A86A] font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Immediate Visual Proof
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#121212] font-semibold mt-1">
            {title}
          </h3>
          {subtitle && (
            <p className="text-stone-600 text-sm max-w-xl mx-auto mt-2">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Interactive Canvas */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-[#EADBC0] bg-stone-900"
      >
        {/* AFTER Image (Full background) */}
        <img
          src={afterImage}
          alt="After: American Volume Eyelash Extensions"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before: Natural Lashes"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          {/* Bare natural tag */}
          <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase border border-white/20">
            {beforeLabel}
          </div>
        </div>

        {/* After tag */}
        <div className="absolute top-4 right-4 z-10 bg-[#C9A86A]/90 backdrop-blur-sm text-[#121212] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#FFFBF7]/40 shadow-sm">
          {afterLabel}
        </div>

        {/* Draggable Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-ew-resize pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Centered Drag Handle Knob */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#121212] border-2 border-[#C9A86A] text-[#FFFBF7] shadow-xl flex items-center justify-center text-xs font-bold">
            <span className="text-[10px] tracking-tighter">◀ ▶</span>
          </div>
        </div>

        {/* Bottom Helper Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white/90 text-[11px] px-4 py-1 rounded-full pointer-events-none hidden sm:block">
          Swipe or drag left and right to inspect fan density & lash health
        </div>
      </div>
    </div>
  );
};
