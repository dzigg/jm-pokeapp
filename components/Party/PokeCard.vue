<template>
  <div class="poke-card">
    <img
      v-if="empty"
      class="mx-auto transform -translate-y-1/2"
      src="../../assets/img/pokeball.svg"
    />

    <img
      v-else
      class="mx-auto transform -translate-y-1/2"
      :src="poke.sprites.front_default"
    />

    <div v-if="!empty" class="capitalize">
      {{ poke.name }}
    </div>

    <div v-if="empty" class="add-btn">
      <svg
        width="14"
        height="14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.993 1.34V13.02m5.84-5.84H1.152"
          stroke="#333"
          stroke-width="1.535"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
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
  mounted() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.pokedexNo}/`)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data)
        this.poke = response.data
      })
  }
}
</script>

<style lang="postcss" scoped>
.poke-card {
  background-image: url('../../assets/img/intersect.svg');
  background-position: top center;
  background-repeat: no-repeat;
  @apply mt-12 border-2 border-white border-solid rounded-lg bg-light-gray shadow-card;
}

.add-btn {
  width: 56px;
  height: 56px;
  @apply relative mx-auto bg-white border border-white border-solid rounded-full shadow-card bg-light-gray-2;
}
.add-btn svg {
  @apply absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
