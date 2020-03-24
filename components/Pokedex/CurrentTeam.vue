<template>
  <section class="current-team">
    <h3 class="mt-12 text-3xl font-bold leading-none font-tinos">
      Choose your team
    </h3>

    <ul
      class="flex items-center justify-between mt-8 lg:flex-col lg:justify-start lg:mt-0"
    >
      <li v-for="(poke, index) in pokemon" :key="`pokemon number: ${index}`">
        <button class="p-0 m-0" @click="removePoke(poke)">
          <img class="taken-slot" :src="poke.sprite" :alt="poke.name" />
        </button>
      </li>

      <li v-for="(poke, index) in slotsLeft" :key="`slot index: ${index}`">
        <button class="p-0 m-0">
          <img
            class="empty-slot"
            src="../../assets/img/pokeball.svg"
            :alt="`slot index: ${index}`"
          />
        </button>
      </li>

      <nuxt-link class="custom-link" to="/party">
        <span>Party</span>
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
    </ul>
  </section>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CurrentTeam',
  computed: {
    pokemon() {
      return this.$store.state.pokemon.party
    },
    slotsLeft() {
      return 6 - this.$store.state.pokemon.party.length
    }
  },
  methods: {
    removePoke(poke) {
      this.$store.commit('pokemon/remove', poke)
    },
    ...mapMutations({
      random: 'pokemon/random',
      removeAll: 'pokemon/removeAll'
    })
  }
}
</script>
<style lang="postcss" scoped>
.current-team {
  @screen lg {
    position: fixed;
    top: 140px;
    left: calc(50% + 400px);
    @screen xl {
      top: 200px;
    }
    /* transform: translateY(-50%); */
  }

  & h3 {
    @screen lg {
      @apply hidden;
    }
  }
}

.randomize-party {
  @apply bg-dark-gray rounded-lg py-2 px-4 text-white;
  @screen lg {
    /* @apply hidden; */
  }
}

.taken-slot {
  width: 40px;
  margin: 0 10px;
  @screen md {
    width: 60px;
    margin: 10px;
  }
}

.empty-slot {
  width: 24px;

  margin: 0 13px;

  @screen md {
    width: 36px;

    margin: 17px;
  }
}
</style>
