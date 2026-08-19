import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          800: '#5C121E',
          900: '#4A0E17', // Primary Dark Maroon from Figma
          950: '#2A060C',
        },
        gold: {
          400: '#E5B800', // Figma Golden Accent
          500: '#FFBF00', // Figma Bright Yellow Button
          600: '#C79A00',
        },
        ivory: {
          100: '#FAF8F5', // Core Warm Cream Background from Figma
          200: '#F5F0EB',
          300: '#EBE2D7',
        },
        onyx: {
          900: '#141212', // Figma Top Bar & Dark Cards
          800: '#1F1D1D',
          700: '#2D2929',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
