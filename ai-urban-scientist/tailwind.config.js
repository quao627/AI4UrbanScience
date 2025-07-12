/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Simple dark theme colors
        'bg-primary': '#000000',
        'bg-secondary': '#111111',
        'bg-tertiary': '#1a1a1a',
        'bg-card': '#222222',
        
        // Simple accent color
        'accent-blue': '#3b82f6',
        
        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': '#d1d5db',
        'text-tertiary': '#9ca3af',
        'text-muted': '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.2)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} 