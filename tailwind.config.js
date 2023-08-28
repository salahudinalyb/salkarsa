/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'button-radial': '(43.23% 126.97% at 50.00% 144.74%, #F35BBF 0%, #3E45F1 100%)'
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },  
  plugins: [],
}