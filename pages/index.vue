<template>
  <div class="container">
    <h3 class="text-4xl font-bold leading-none page-title">
      Choose your team
    </h3>
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

<style lang="postcss" scoped>
.container {
  @screen lg {
    max-width: 650px;
  }
}

.page-title {
  @apply hidden;
  @screen lg {
    @apply block;
    width: 140px;
    position: fixed;
    top: 50%;
    left: calc(50% - 500px);
    transform: translateY(-50%);
  }
}
</style>
