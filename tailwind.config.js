 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontSize :{
      'course-details-heading-small': ['26px', '36px'],
     
      'course-details-heading-large' : ['36px', '44px'],
      'home-heading-small':['28px', '36px'],
      'home-heading-large':['40px', '56px'],
      'default' : ['16px', '21px'],
    }


    },
  },
  plugins: [],
}
