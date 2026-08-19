import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Flower2, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-maroon-950 text-ivory-100 flex items-center justify-center pt-24 pb-16">
      <Container className="text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/40 flex items-center justify-center mx-auto text-gold-400">
          <Flower2 className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-5xl sm:text-7xl font-normal text-gold-400">404</h1>
        <h2 className="font-serif text-2xl sm:text-3xl text-ivory-100 font-light">
          This Royal Sanctuary Page Does Not Exist
        </h2>
        <p className="text-xs sm:text-sm text-ivory-300 font-sans max-w-md mx-auto leading-relaxed">
          The page or floral installation portfolio you are looking for may have been moved or updated.
        </p>
        <div className="pt-4">
          <Button href="/" variant="gold" size="md" className="inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span>Return to Main Atelier</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
