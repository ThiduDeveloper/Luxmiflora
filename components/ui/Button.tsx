'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none tracking-wider uppercase text-xs sm:text-sm';
  
  const variants = {
    primary: 'bg-maroon-800 text-ivory-100 hover:bg-maroon-900 hover:shadow-luxury border border-maroon-700/50',
    secondary: 'bg-ivory-100 text-maroon-900 border border-maroon-800/20 hover:bg-ivory-200 hover:border-maroon-800/40 shadow-sm',
    gold: 'bg-gradient-to-r from-gold-400 to-gold-600 text-onyx-900 font-semibold hover:shadow-gold-glow hover:brightness-110 border border-gold-300',
    outline: 'bg-transparent text-gold-400 border border-gold-400/60 hover:bg-gold-400/10 hover:border-gold-400',
    ghost: 'bg-transparent text-maroon-800 hover:bg-maroon-800/10 hover:text-maroon-900',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs sm:text-sm',
    lg: 'px-8 py-4 text-sm sm:text-base',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
