/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      clipPath: {
        "card-shape": "polygon(0 0, 100% 0, 100% 80%, 0 60%)",
      },
      colors: {
        "custom-gold": "#f6c300",
      },
      boxShadow: {
        custom: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
      transitionProperty: {
        transform: "transform",
      },
      screens: {
        "980px": "980px",
      },
     backgroundImage:{
      'parallax':'url("https://cdn.pixabay.com/photo/2020/04/30/20/14/sky-5114499_1280.jpg")',
      'parallay':'url("https://cdn.pixabay.com/photo/2017/09/18/15/38/moon-2762111_1280.jpg")',
      'parallaz' : 'url("https://cdn.pixabay.com/photo/2022/08/06/22/25/saturn-7369468_1280.jpg")',
      'parallaw' : 'url("https://cdn.pixabay.com/photo/2021/04/29/06/23/planet-6215636_1280.jpg")',
      
       }
      
    },
  },
  plugins: [],
};
