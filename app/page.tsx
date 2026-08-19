import React from 'react';
import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { WeddingStyleFinder } from '@/components/home/WeddingStyleFinder';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { FloralCollection } from '@/components/home/FloralCollection';
import { FeaturedWeddings } from '@/components/home/FeaturedWeddings';
import { BeforeAfterSlider } from '@/components/home/BeforeAfterSlider';
import { OurPromise } from '@/components/home/OurPromise';
import { WeddingJourney } from '@/components/home/WeddingJourney';
import { InvestmentPackages } from '@/components/home/InvestmentPackages';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';
import { InquiryForm } from '@/components/inquiry/InquiryForm';
import { Container } from '@/components/ui/Container';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WeddingStyleFinder />
      <ServicesPreview />
      <FloralCollection />
      <FeaturedWeddings isHomePage={true} />
      <BeforeAfterSlider />
      <OurPromise />
      <WeddingJourney />
      <InvestmentPackages />
      <Testimonials />
      <CTASection />
      <section className="py-24 bg-ivory-100">
        <Container>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}
