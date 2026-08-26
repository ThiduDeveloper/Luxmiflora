import React from 'react';
import { notFound } from 'next/navigation';
import { getPortfolioItemBySlug, PORTFOLIO_DATA } from '@/data/portfolio';
import { PortfolioDetailClient } from '@/components/portfolio/PortfolioDetailClient';
import { constructMetadata } from '@/lib/metadata';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const item = await getPortfolioItemBySlug(params.slug);
  if (!item) return constructMetadata();

  return constructMetadata({
    title: `${item.title} | ${item.couple} Wedding | Luxmi Flora Sri Lanka`,
    description: item.story,
    image: item.coverImage,
    path: `/portfolio/${params.slug}`,
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const item = await getPortfolioItemBySlug(params.slug);

  if (!item) {
    notFound();
  }

  return <PortfolioDetailClient item={item} />;
}
