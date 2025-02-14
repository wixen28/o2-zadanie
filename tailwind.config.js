
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'on-air': ['"On Air"', 'sans-serif'],
      },
      colors: {
        o2: {
          surface: {
            xHigh: "#8C8C9A",    
            xLow: "#FFFFFF",     
            brand: "#0050FF",    
            danger: "#DC2828",  
            dangerVariant: "#FFDCDC",
            warning: "#A56315",  
            warningVariant: "#FAF1B6" 
          },
          content: {
            onNeutral: {
              xxHigh: "#2C2C31", 
              medium: "#8C8C9A", 
              low: "#C9C9CE",    
              danger: "#DC2828", 
              warning: "#A56315" 
            }
          },
          state: {
            defaultHover: "rgba(26, 26, 26, 0.06)", 
            defaultFocus: "rgba(26, 26, 26, 0.8)" 
          }
        }
      }
    },
  },
  plugins: [],
}
