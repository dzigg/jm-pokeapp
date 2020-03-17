/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        'light-gray': '#f9f9f9',
        'light-gray-2': '#f8f8f8',
        'light-gray-3': '#E5E5E5'
      },
      boxShadow: {
        card:
          '7.67606px 7.67606px 15.3521px rgba(0, 0, 0, 0.05), -7.67606px -7.67606px 3.07042px rgba(255, 255, 255, 0.2)'
      }
    },
    container: {
      center: true,
      padding: '1.5rem'
    }
  },
  variants: {},
  plugins: []
}
