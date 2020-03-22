<template>
  <button
    class="poke-card"
    :class="{ selected: selected }"
    @click="selectPoke(pokedexNo, $event)"
  >
    <img
      v-if="poke.sprites.front_default"
      class="poke-sprite"
      :src="poke.sprites.front_default"
    />
    <img v-else class="poke-sprite" src="../../assets/img/pokeball.svg" />
    <div class="poke-no">#{{ pokedexNo }}</div>

    <div class="mt-3 text-2xl capitalize text-dark-gray">
      {{ poke.name }}
    </div>

    <div class="flex justify-center mt-2">
      <span
        v-for="(type, index) in poke.types"
        :key="index"
        class="px-2 py-1 mx-1 text-sm text-white capitalize rounded-md "
        :class="`bg-${type.type.name}`"
      >
        {{ type.type.name }}
      </span>
    </div>
  </button>
</template>

<script>
import axios from 'axios'
export default {
  props: ['empty', 'pokedexNo'],
  data() {
    return {
      poke: {
        sprites: { front_default: '' }
      }
    }
  },
  computed: {
    selected() {
      return this.$store.state.party.list.some(
        (e) => e.pokeNo === this.pokedexNo
      )
    }
  },
  mounted() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.pokedexNo}/`)
      .then((response) => {
        this.poke = response.data
      })
  },
  methods: {
    selectPoke(poke, event) {
      event.preventDefault()
      if (this.$store.state.party.list.some((e) => e.pokeNo === poke)) {
        this.$store.commit('party/remove', poke)
      } else if (this.$store.state.party.list.length !== 6) {
        this.$store.commit('party/add', poke)
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
    /* border-color: rgb(45, 145, 208) !important; */
  }

  &.selected {
    @apply shadow-lg;
    transform: translateY(-2px);
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
  @apply bg-light-gray-3 inline-block text-center rounded-full font-bold;
  font-size: 9px;
  padding: 4px 10px;
  color: #5c5c5c;
}
</style>
