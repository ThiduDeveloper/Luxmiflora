import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  darkBackground?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  darkBackground = false,
  className,
}) => {
  return (
    <div className={cn('max-w-3xl mb-12 sm:mb-16', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className="inline-block text-gold-400 font-sans text-xs tracking-[0.25em] uppercase font-semibold mb-3">
          — {eyebrow} —
        </span>
      )}
      <h2
        className={cn(
          'font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-4',
          darkBackground ? 'text-ivory-100' : 'text-maroon-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed font-sans font-light max-w-2xl',
            centered && 'mx-auto',
            darkBackground ? 'text-ivory-300' : 'text-onyx-600'
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'w-16 h-0.5 mt-6 bg-gradient-to-r from-transparent via-gold-400 to-transparent',
          centered && 'mx-auto'
        )}
      />
    </div>
  );
};
