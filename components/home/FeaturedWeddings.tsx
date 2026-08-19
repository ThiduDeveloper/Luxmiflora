'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, getPortfolioItems } from '@/data/portfolio';
import { PortfolioItem } from '@/types';
import { Container } from '@/components/ui/Container';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const TABS = [
  { id: 'all', label: 'ALL' },
  { id: 'mandap', label: 'WEDDINGS' },
  { id: 'reception', label: 'RECEPTIONS' },
  { id: 'destination', label: 'ENGAGEMENTS' },
  { id: 'floral', label: 'FLORAL' },
  { id: 'outdoor', label: 'OUTDOOR' },
  { id: 'functions', label: 'FUNCTIONS' },
];

const matchesCategory = (item: PortfolioItem, tabId: string) => {
  if (tabId === 'all') return true;
  
  const searchStr = `${item.category} ${item.categoryLabel} ${item.title} ${item.story} ${item.couple} ${item.location}`.toLowerCase();
  
  switch (tabId) {
    case 'mandap': // WEDDINGS
      return item.category === 'mandap' || searchStr.includes('mandap') || searchStr.includes('wedding');
    case 'reception': // RECEPTIONS
      return item.category === 'reception' || searchStr.includes('reception');
    case 'destination': // ENGAGEMENTS
      return item.category === 'destination' || searchStr.includes('engagement') || searchStr.includes('destination');
    case 'floral': // FLORAL
      return item.category === 'table-centerpiece' || item.category === 'entryway' || searchStr.includes('floral') || searchStr.includes('orchid');
    case 'outdoor': // OUTDOOR
      return searchStr.includes('outdoor') || searchStr.includes('garden') || searchStr.includes('beach');
    case 'functions': // FUNCTIONS
      return searchStr.includes('function') || searchStr.includes('party') || searchStr.includes('gala');
    default:
      return true;
  }
};

interface FeaturedWeddingsProps {
  isHomePage?: boolean;
}

export const FeaturedWeddings: React.FC<FeaturedWeddingsProps> = ({ isHomePage = false }) => {
  const [items, setItems] = React.useState<PortfolioItem[]>(PORTFOLIO_DATA);
  const ITEMS_PER_PAGE = 6;
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  React.useEffect(() => {
    getPortfolioItems().then((fetchedItems) => {
      if (fetchedItems && fetchedItems.length > 0) {
        setItems(fetchedItems);
      }
    });
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  const filteredItems = items.filter((item) => matchesCategory(item, activeTab));
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const displayedItems = (isHomePage || !isExpanded)
    ? filteredItems.slice(0, ITEMS_PER_PAGE)
    : filteredItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById('gallery-section-top');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewAllClick = () => {
    setIsExpanded(true);
    setCurrentPage(1);
  };

  return (
    <section id="gallery-section-top" className="py-24 bg-ivory-100 text-onyx-900 relative scroll-mt-24">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-maroon-900">
            Moments We&apos;ve Transformed
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto my-4" />
          <p className="text-xs sm:text-sm text-onyx-600 font-sans font-light">
            A glimpse into the celebrations we&apos;ve had the privilege of decorating.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-1.5 text-[10px] uppercase font-sans tracking-widest transition-all rounded-sm border cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-maroon-900 text-ivory-100 border-maroon-900 font-semibold shadow-md'
                  : 'bg-white text-onyx-600 border-ivory-300 hover:border-maroon-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Photo Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="relative h-80 rounded-sm overflow-hidden group border border-ivory-300 shadow-md flex flex-col justify-end p-6 block hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-900/90 via-onyx-900/40 to-transparent" />
                  
                  <div className="relative z-10 space-y-1">
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gold-400 block">
                      {item.categoryLabel} · {item.location}
                    </span>
                    <h3 className="font-serif text-xl text-ivory-100 font-normal">
                      {item.couple}
                    </h3>
                    <span className="text-[9px] uppercase tracking-wider text-ivory-300 block font-sans">
                      {item.title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination & View All Controls */}
        <div className="pt-14 flex flex-col items-center gap-6">
          {/* ON HOME PAGE: Link directly to /portfolio */}
          {isHomePage && (
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-bold text-gold-600 hover:text-gold-500 bg-white px-6 py-2.5 rounded-md border-2 border-onyx-900 hover:bg-onyx-900 hover:text-gold-400 transition-all shadow-sm cursor-pointer"
            >
              <span>VIEW ALL WORK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}

          {/* ON GALLERY PAGE: Click button to reveal 1, 2 pages */}
          {!isHomePage && !isExpanded && (
            <button
              onClick={handleViewAllClick}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-bold text-gold-600 hover:text-gold-500 bg-white px-6 py-2.5 rounded-md border-2 border-onyx-900 hover:bg-onyx-900 hover:text-gold-400 transition-all shadow-sm cursor-pointer"
            >
              <span>VIEW ALL WORK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {/* ON GALLERY PAGE: Revealed 1, 2 Pages */}
          {!isHomePage && isExpanded && totalPages > 1 && (
            <div className="flex items-center gap-3">
              {/* Prev Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-9 h-9 rounded-md border border-ivory-300 bg-white flex items-center justify-center text-onyx-700 hover:border-maroon-900 hover:text-maroon-900 disabled:opacity-30 disabled:hover:border-ivory-300 disabled:hover:text-onyx-700 transition-all shadow-sm cursor-pointer"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Number Buttons (1, 2...) */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-md text-xs font-sans font-bold transition-all shadow-sm border cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-maroon-900 text-gold-400 border-maroon-900 shadow-md scale-105'
                        : 'bg-white text-onyx-700 border-ivory-300 hover:border-maroon-900 hover:text-maroon-900'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-9 h-9 rounded-md border border-ivory-300 bg-white flex items-center justify-center text-onyx-700 hover:border-maroon-900 hover:text-maroon-900 disabled:opacity-30 disabled:hover:border-ivory-300 disabled:hover:text-onyx-700 transition-all shadow-sm cursor-pointer"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
