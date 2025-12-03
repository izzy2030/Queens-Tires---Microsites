/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // blue-500
        "background-light": "#f8fafc", // slate-50
        "background-dark": "#18181b", // zinc-900
        "barrington-primary": "#1e40af",
        "barrington-primary-dark": "#1e3a8a",
        "barrington-accent": "#f97316",
        "barrington-accent-hover": "#ea580c",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem", // 8px
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
