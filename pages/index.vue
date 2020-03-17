<template>
  <div class="container">
    <CurrentTeam />
    <Pokedex />
  </div>
</template>

<script>
import CurrentTeam from '../components/Pokedex/CurrentTeam'
import Pokedex from '../components/Pokedex/Pokedex'
export default {
  components: { CurrentTeam, Pokedex }
}
</script>
