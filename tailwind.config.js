/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#ebfeff',
            100: '#cdfaff',
            200: '#a3f5ff',
            300: '#67efff',
            400: '#22e1ff',
            500: '#00c4ff', // Main brand color
            600: '#00a6d9',
            700: '#0083ae',
            800: '#006990',
            900: '#065977',
          },
          gray: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          }
        },
        keyframes: {
          shimmer: {
            '100%': { transform: 'translateX(100%)' }
          }
        },
        animation: {
          shimmer: 'shimmer 2s infinite'
        },
        fontFamily: {
          display: ['Montserrat', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
          accent: ['DM Sans', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }