import React from 'react';
import { Flower2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-maroon-950 flex items-center justify-center text-ivory-100">
      <div className="w-10 h-10 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
