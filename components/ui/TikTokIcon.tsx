import React from 'react';

interface TikTokIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const TikTokIcon: React.FC<TikTokIconProps> = ({ size = 24, className, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.34 6.34 0 0 0 6.34-6.34V9.05a8.22 8.22 0 0 0 4.67 1.45V7.05a4.77 4.77 0 0 1-.75-.36z" />
    </svg>
  );
};
