export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0F1A',
        surface: '#1E1E32',
        surfaceAlt: '#171728',
        primary: '#FDFBF7',
        accent: '#FF6B4A',
        accentAlt: '#4A6CF7',
        textPrimary: '#FDFBF7',
        textSecondary: '#A0A0B8',
        border: '#2E2E48'
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        'card': '6px 6px 0px 0px #FDFBF7',
        'card-hover': '10px 10px 0px 0px #FF6B4A',
        'pill': '3px 3px 0px 0px #FDFBF7'
      }
    }
  },
  plugins: []
}