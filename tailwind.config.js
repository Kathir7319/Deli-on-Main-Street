/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FFF5F5',
          100: '#FCE8E8',
          200: '#F9C6C6',
          300: '#E88B8B',
          400: '#D44D4D',
          500: '#B81D1D',
          600: '#A31212',
          700: '#8B0000', // Blueprint Primary Color
          800: '#6E0000',
          900: '#4D0000',
          950: '#2F0000',
        },
        charcoal: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#CED4DA',
          400: '#868E96',
          500: '#5C5C5C',
          600: '#464646', // Blueprint Secondary Color
          700: '#343A40',
          800: '#212529',
          900: '#14171A',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FDFDFC',
          200: '#FBFBF9', // Blueprint Background Tint
          300: '#F6F5F0',
          400: '#EFECE2',
          500: '#E5E0D0',
        },
        mustard: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -5px rgba(139, 0, 0, 0.08), 0 4px 12px -2px rgba(70, 70, 70, 0.05)',
        'warm-lg': '0 20px 40px -10px rgba(139, 0, 0, 0.12), 0 8px 20px -4px rgba(70, 70, 70, 0.08)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
