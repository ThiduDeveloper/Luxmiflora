'use client';

import React from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-onyx-900/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-ivory-100 hover:text-gold-400 transition-colors z-50"
        aria-label="Close Lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 p-3 rounded-full bg-maroon-900/80 border border-gold-400/30 text-ivory-100 hover:bg-gold-400 hover:text-onyx-900 transition-colors z-50"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 p-3 rounded-full bg-maroon-900/80 border border-gold-400/30 text-ivory-100 hover:bg-gold-400 hover:text-onyx-900 transition-colors z-50"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gold-400/20">
        <Image
          src={images[currentIndex]}
          alt={`Gallery View ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};
