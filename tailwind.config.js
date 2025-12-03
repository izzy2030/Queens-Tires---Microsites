/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Premium Dark Theme Palette
        brand: {
          dark: "#0B1120", // Deep Navy/Black background
          DEFAULT: "#0F172A", // Slate 900
          light: "#334155", // Slate 700
        },
        accent: {
          DEFAULT: "#FCD34D", // Amber 300 (Gold)
          hover: "#F59E0B", // Amber 500
          light: "#FEF3C7", // Amber 100
        },
        surface: {
          light: "#F8FAFC", // Slate 50
          white: "#FFFFFF",
          dark: "#1E293B", // Slate 800
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "Inter", "sans-serif"], // More modern display font
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #1e40af 0deg, #0f172a 180deg, #1e40af 360deg)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
