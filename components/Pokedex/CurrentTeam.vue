<template>
  <section class="current-team">
    <h3 class="text-5xl font-bold leading-none">
      Choose your team
    </h3>

    <button class="randomize-party" @click="random">Random</button>
    <button class="randomize-party" @click="removeAll">Random</button>

    <ul class="flex items-center justify-between lg:flex-col lg:justify-start">
      <li v-for="(poke, index) in pokemon" :key="index">
        <button class="p-0 m-0" @click="removePoke(poke)">
          <img
            class="taken-slot"
            :src="
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.pokeNo}.png`
            "
            alt=""
          />
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
    </ul>
  </section>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CurrentTeam',
  computed: {
    pokemon() {
      return this.$store.state.party.list
    },
    slotsLeft() {
      return 6 - this.$store.state.party.list.length
    }
  },
  methods: {
    removePoke(poke) {
      this.$store.commit('party/remove', poke.pokeNo)
    },
    ...mapMutations({
      random: 'party/random',
      removeAll: 'party/removeAll'
    })
  }
}
</script>
<style lang="postcss" scoped>
.current-team {
  @screen lg {
    position: fixed;
    top: 50%;
    left: calc(50% + 400px);
    transform: translateY(-50%);
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
