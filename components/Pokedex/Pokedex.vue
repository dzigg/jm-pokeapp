<template>
  <section class="pokedex">
    <div class="no-of-pokes">{{ pokes.length }}</div>
    <PokeCard
      v-for="(poke, index) in loadedPokemon"
      :key="`pokemon: #${index}`"
      :empty="false"
      :pokedex-no="poke.id"
    />
  </section>
</template>

<script>
import axios from 'axios'
import PokeCard from './PokeCard'

export default {
  components: { PokeCard },
  data() {
    return {
      pokes: [],
      loadedPokemon: []
    }
  },

  mounted() {
    this.getInitialPokemon()
    this.scroll()
  },
  methods: {
    async getInitialPokemon() {
      for (let i = 1; i <= 151; i++) {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
          .then((response) => {
            this.pokes.push(response.data)
          })
        if (i === 12) {
          this.loadPokemon()
        }
      }
    },
    loadPokemon() {
      // if (this.loadedPokemon.length !== 151 && this.loadedPokemon.length > 0) {
      //   for (
      //     let i = this.loadedPokemon.length + 1;
      //     i < this.loadedPokemon.length + 13;
      //     i++
      //   ) {
      //     this.loadedPokemon.push(this.pokes[13])
      //     if (i === this.loadedPokemon.length + 1) {
      // this.loadedPokemon.push(this.pokes[i])
      //     console.log(i)
      //   }
      // }
      // } else if (this.loadedPokemon.length === 0) {
      const currentLength = this.loadedPokemon.length
      // if (currentLength <= 150) {

      for (let i = currentLength; i < currentLength + 12; i++) {
        if (i <= 150) {
          this.loadedPokemon.push(this.pokes[i])
          console.log(i)
        } else {
          break
        }
        // }
      }
      // }
    },
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight
        if (bottomOfWindow) {
          const self = this
          setTimeout(function() {
            self.loadPokemon()
          }, 500)
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.no-of-pokes {
  @apply fixed text-5xl font-bold;
  top: 0;
  left: 0;
}
.pokedex {
  @apply flex flex-wrap justify-start items-start content-start;
  min-height: 110vh;
  margin: 0 -10px;
  padding-top: 200px;
}
</style>
