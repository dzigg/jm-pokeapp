<template>
  <section class="pokedex">
    <div class="no-of-pokes">
      {{ $store.state.pokemon.loadedPokemon.length }} / 151
    </div>

    <PokeCard
      v-for="(poke, index) in this.$store.state.pokemon.loadedPokemon"
      :key="`pokemon: #${index}`"
      :poke-data="poke"
    />
  </section>
</template>

<script>
import PokeCard from './PokeCard'

export default {
  components: { PokeCard },
  mounted() {
    this.scroll()
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        const bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight
        if (bottomOfWindow) {
          const self = this
          setTimeout(function() {
            if (
              self.$store.state.pokemon.pokedex.length >
                self.$store.state.pokemon.loadedPokemon.length + 12 ||
              self.$store.state.pokemon.pokedex.length === 151
            ) {
              self.$store.commit('pokemon/loadPokemon')
            }
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
  margin-top: 50px;
  @screen xl {
    margin-top: 100px;
  }
}
</style>
