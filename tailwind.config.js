/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#34483B',
          50: '#F4F6F4',
          100: '#E6EAE7',
          200: '#CBD4CD',
          300: '#A4B4A8',
          400: '#6E8574',
          500: '#4D6453',
          600: '#34483B', // Brand Primary
          700: '#2A3B30',
          800: '#202E25',
          900: '#17221B',
          950: '#0D1410',
        },
        sage: {
          DEFAULT: '#A8B5A0', // Brand Secondary
          50: '#F6F8F5',
          100: '#EDF1EB',
          200: '#DBE3D7',
          300: '#C2D1BC',
          400: '#A8B5A0',
          500: '#8A9C81',
          600: '#6C7E63',
          700: '#53614C',
          800: '#3C4637',
          900: '#282F25',
        },
        ivory: {
          DEFAULT: '#FAF8F2', // Brand Warm Ivory
          50: '#FFFFFF',
          100: '#FAF8F2',
          200: '#F3EFE4',
          300: '#E9E3D2',
          400: '#DDD4BD',
          500: '#C8BCA1',
        },
        peach: {
          DEFAULT: '#E9B9A5', // Brand Soft Peach
          50: '#FDF7F5',
          100: '#FAEEEA',
          200: '#F5DDD5',
          300: '#EFCABC',
          400: '#E9B9A5',
          500: '#DA967C',
          600: '#C77457',
        },
        gold: {
          DEFAULT: '#C49A3A', // Brand Elegant Gold
          50: '#FAF6ED',
          100: '#F4EBD7',
          200: '#E9D6AF',
          300: '#DCBF82',
          400: '#D1AC5B',
          500: '#C49A3A',
          600: '#A7812E',
          700: '#846424',
          800: '#634A1B',
        },
        charcoal: {
          DEFAULT: '#292929', // Brand Charcoal
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#656565',
          600: '#4B4B4B',
          700: '#383838',
          800: '#292929',
          900: '#1B1B1B',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(52, 72, 59, 0.06), 0 2px 6px -1px rgba(52, 72, 59, 0.04)',
        'premium': '0 12px 36px -4px rgba(52, 72, 59, 0.10), 0 4px 12px -2px rgba(52, 72, 59, 0.05)',
        'gold-glow': '0 0 25px -5px rgba(196, 154, 58, 0.25)',
      },
    },
  },
  plugins: [],
}

