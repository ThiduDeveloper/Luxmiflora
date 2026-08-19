'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-24 bg-ivory-100 text-onyx-900 relative">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-sans font-semibold block mb-2">
            VENUE TRANSFORMATION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-maroon-900">
            From Empty Venue → Dream Wedding
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto my-4" />
          <p className="text-xs sm:text-sm text-onyx-600 font-sans font-light">
            Drag the gold divider to reveal the transformation
          </p>
        </div>

        {/* Slider Frame */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[350px] sm:h-[480px] lg:h-[520px] w-full rounded-sm overflow-hidden shadow-2xl select-none cursor-ew-resize border border-ivory-300"
          >
            {/* AFTER IMAGE */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
                alt="After Transformation"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-gold-500 text-onyx-900 font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                AFTER
              </div>
            </div>

            {/* BEFORE IMAGE */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-gold-400 shadow-2xl"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-[300px] sm:min-w-[700px] lg:min-w-[1000px]">
                <Image
                  src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1600&q=85"
                  alt="Before Transformation"
                  fill
                  className="object-cover grayscale brightness-75"
                />
              </div>
              <div className="absolute top-4 left-4 bg-onyx-900 text-ivory-100 font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                BEFORE
              </div>
            </div>

            {/* DRAG HANDLE LINE & BUTTON */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gold-400 z-30 cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-gold-500 text-onyx-900 shadow-lg flex items-center justify-center font-bold text-xs -ml-0.5">
                ⟨⟩
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
