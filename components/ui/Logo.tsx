import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 'md', onClick }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn('inline-flex items-center gap-3 group select-none', className)}
    >
      {/* Emblem Circle Badge */}
      <div
        className={cn(
          'relative rounded-full border border-gold-400/90 bg-maroon-950 p-0.5 shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-gold-300 shrink-0',
          iconSizes[size]
        )}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/Logo/Luxmi Flora Logo Emblem.png"
            alt="Luxmi Flora Emblem"
            fill
            sizes="48px"
            className="object-cover scale-110"
            priority
          />
        </div>
      </div>

      {/* Brand Text: Luxmi (White) + Flora (Gold) */}
      <div className="flex items-center tracking-tight">
        <span
          className={cn(
            'font-serif font-normal text-ivory-100 group-hover:text-ivory-200 transition-colors',
            textSizes[size]
          )}
        >
          Luxmi
        </span>
        <span
          className={cn(
            'font-serif font-normal text-gold-400 group-hover:text-gold-300 transition-colors ml-1.5',
            textSizes[size]
          )}
        >
          Flora
        </span>
      </div>
    </Link>
  );
};
