<template>
  <div class="container">
    <section class="layout">
      <PokeCard
        v-for="(poke, index) in this.$store.state.pokemon.party"
        :key="`pokemon: #${index}`"
        :poke-data="poke"
      />
      <EmptyCard
        v-for="(poke, index) in slotsLeft"
        :key="`slot index: ${index}`"
      />
    </section>
  </div>
</template>

<script>
import PokeCard from '../components/Party/PokeCard'
import EmptyCard from '../components/Party/EmptyCard'

export default {
  components: { EmptyCard, PokeCard },
  computed: {
    pokemon() {
      return this.$store.state.pokemon.party
    },
    slotsLeft() {
      return 6 - this.$store.state.pokemon.party.length
    }
  }
}
</script>

<style lang="postcss" scoped>
.layout {
  @apply flex flex-wrap justify-start items-stretch content-start;
  min-height: 110vh;
  margin: 0 -10px;
  padding-top: 200px;
}
</style>
