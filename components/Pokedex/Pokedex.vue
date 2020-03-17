<template>
  <section>
    <PokeCard :empty="false" pokedex-no="1" />
    <!-- <div v-for="(poke, index) in pokes" :key="index">{{ poke.name }}</div> -->
  </section>
</template>

<script>
// import axios from 'axios'
import PokeCard from './PokeCard'
export default {
  components: { PokeCard },
  data() {
    return {
      pokes: []
    }
  }
  // mounted() {
  //   axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
  //     this.pokes = response.data
  //   })
  // }
}
</script>
