/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     backgroundImage:{
      'parallax':'url("https://cdn.pixabay.com/photo/2020/04/30/20/14/sky-5114499_1280.jpg")',
      'parallay':'url("https://cdn.pixabay.com/photo/2017/09/18/15/38/moon-2762111_1280.jpg")',
      'parallaz' : 'url("https://cdn.pixabay.com/photo/2022/08/06/22/25/saturn-7369468_1280.jpg")',
       }
      
    },
  },
  plugins: [],
};
