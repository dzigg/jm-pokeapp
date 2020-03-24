<template>
  <div class="poke-card">
    <button class="delete-btn" @click="removePoke(pokeData)">
      <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l6 6m0-6L1 7"
          stroke="#333"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <img
      class="poke-sprite"
      :src="pokeData.sprite ? pokeData.sprite : `../../assets/img/pokeball.svg`"
    />

    <div class="poke-no">#{{ pokeData.id }}</div>

    <div class="mt-3 text-xl capitalize md:text-2xl text-dark-gray font-tinos">
      {{ pokeData.name }}
    </div>

    <div class="flex justify-center mt-2">
      <span
        v-for="(type, index) in pokeData.types"
        :key="index"
        class="px-2 py-1 mx-1 text-sm text-white capitalize rounded-md "
        :class="`bg-${type.type.name}`"
      >
        {{ type.type.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['empty', 'pokeData'],
  data() {
    return {
      poke: {
        sprites: { front_default: '' }
      }
    }
  },
  computed: {},
  methods: {
    removePoke(poke) {
      this.$store.commit('pokemon/remove', poke)
    }
  }
}
</script>

<style lang="postcss" scoped>
.poke-card {
  @apply relative mt-12 pt-12 pb-6 rounded-lg bg-light-gray shadow-card text-center;
  background-image: url('../../assets/img/intersect.svg');
  background-position: top center;
  background-repeat: no-repeat;
  border: 4px solid rgba(16, 123, 106, 0.4);
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
}

.delete-btn {
  @apply absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 100px;
  background-color: #f8f8f8;
  border: 1px solid #fff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05),
    -10px -10px 4px rgba(255, 255, 255, 0.2);
  & svg {
    @apply absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
