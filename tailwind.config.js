/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}', // adjust based on your project
  ],
  theme: {
    extend: {
      boxShadow: {
        'mega': '0 0 30px 15px rgba(255, 0, 0, 0.9)',
        'white-glow': "-5px 5px 20px -14px rgba(255,_255,_255,_0.05)",
      },
    },
  },
}
