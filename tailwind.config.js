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
        'light-gray-3': '#E5E5E5',
        'dark-gray': '#333333',
        bug: '#A8B820',
        dark: '#705848',
        dragon: '#7038F8',
        electric: '#F8D030',
        fairy: '#EE99AC',
        fighting: '#C03028',
        fire: '#F08030',
        flying: '#A890F0',
        ghost: '#705898',
        grass: '#78C850',
        ground: '#E0C068',
        ice: '#98D8D8',
        normal: '#A8A878',
        poison: '#A040A0',
        psychic: '#F85888',
        rock: '#B8A038',
        steel: '#B8B8D0',
        water: '#6890F0'
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
