'use client';

import React, { createContext, useContext } from 'react';
import { SiteConfigType, DEFAULT_SITE_CONFIG } from '@/lib/constants';

const SiteConfigContext = createContext<SiteConfigType>(DEFAULT_SITE_CONFIG);

export interface SiteConfigProviderProps {
  children: React.ReactNode;
  initialConfig?: SiteConfigType;
}

export const SiteConfigProvider: React.FC<SiteConfigProviderProps> = ({
  children,
  initialConfig = DEFAULT_SITE_CONFIG,
}) => {
  return (
    <SiteConfigContext.Provider value={initialConfig}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = (): SiteConfigType => {
  const context = useContext(SiteConfigContext);
  return context || DEFAULT_SITE_CONFIG;
};
