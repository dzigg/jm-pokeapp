<template>
  <div class="container">
    <div class="party-count">
      <h3 class="text-4xl font-bold leading-none page-title font-tinos">
        Ash's party
      </h3>
      <span class="party-no"
        >{{ this.$store.state.pokemon.party.length }}/6</span
      >
      <nuxt-link class="custom-link" to="/">
        <span>Dex</span>
        <svg
          width="27"
          height="10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.11 4.2l-3.156-3.157 1.04-1.04 4.412 4.413a.735.735 0 010 1.04l-4.412 4.412-1.04-1.04 3.157-3.157H.883v-1.47h23.228z"
            fill="#fff"
          />
        </svg>
      </nuxt-link>
    </div>
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

  margin: 0 -10px;
  margin-top: 30px;
  @screen lg {
    margin-top: 50px;
  }
  @screen xl {
    margin-top: 100px;
  }
}

.party-count {
  @apply mt-12 flex justify-between;
  & .party-no {
    @apply text-4xl font-bold leading-none font-work-sans;
  }
  & .page-title {
    @apply block;
  }
  @screen lg {
    @apply fixed flex-col items-center justify-center;
    top: 140px;
    left: calc(50% + 400px);

    & .custom-link {
      margin-top: 200px;
    }
    @screen xl {
      top: 200px;
    }
    /* transform: translateY(-50%); */
  }
}
</style>
