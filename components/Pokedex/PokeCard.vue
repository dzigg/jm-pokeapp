<template>
  <button
    class="poke-card"
    :class="{ selected: selected }"
    @click="selectPoke(pokeData, $event)"
  >
    <img
      class="poke-sprite"
      :src="pokeData.sprite ? pokeData.sprite : `../../assets/img/pokeball.svg`"
    />

    <div class="poke-no">#{{ pokeData.id }}</div>

    <div class="mt-3 text-xl capitalize md:text-2xl text-dark-gray font-tinos">
      {{ pokeData.name }}
    </div>

    <div class="flex flex-col justify-center mt-2 md:flex-row">
      <span
        v-for="(type, index) in pokeData.types"
        :key="index"
        class="px-2 py-1 mx-2 my-1 text-sm text-white capitalize rounded-md md:mx-1 mdmy-0 "
        :class="`bg-${type.type.name}`"
      >
        {{ type.type.name }}
      </span>
    </div>
  </button>
</template>

<script>
export default {
  props: ['pokeData'],

  computed: {
    selected() {
      return this.$store.state.pokemon.party.some(
        (e) => e.id === this.pokeData.id
      )
    }
  },
  methods: {
    selectPoke(poke, event) {
      event.preventDefault()
      if (this.$store.state.pokemon.party.some((e) => e.id === poke.id)) {
        this.$store.commit('pokemon/remove', poke)
      } else if (this.$store.state.pokemon.party.length !== 6) {
        this.$store.commit('pokemon/add', poke)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.poke-card {
  @apply relative mt-12 border-2 pt-12 pb-4 border-white border-solid rounded-lg bg-light-gray shadow-card text-center;
  background-image: url('../../assets/img/intersect.svg');
  background-position: top center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: calc(50% - 20px);
  margin: 30px 10px;
  transition: transform 100ms ease-in-out, box-shadow 120ms ease-in,
    border 100ms ease-out;
  @screen lg {
    max-width: calc(33.33333% - 20px);
  }
  &:hover {
    transform: translateY(-2px);
    @apply shadow-lg;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgb(101, 196, 255) !important;
  }

  &.selected {
    @apply shadow-lg;
    transform: translateY(-2px);
    background-color: #f3fff4;
    border: 4px solid rgba(16, 123, 106, 0.4);
  }
}
.poke-sprite {
  @apply absolute;
  transform: translate(-50%, -50%);
  top: 0;
  left: 50%;
}

.poke-no {
  @apply inline-block text-center rounded-full font-bold;
  background-color: rgba(20, 20, 20, 0.1);
  font-size: 9px;
  padding: 4px 10px;
  color: #5c5c5c;
}
</style>
