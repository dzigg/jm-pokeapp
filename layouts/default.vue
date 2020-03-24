<template>
  <div class="pika-bg">
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
  components: { Navigation },
  created() {
    this.$store.dispatch('pokemon/getInitialPokemon')
  }
}
</script>

<style lang="postcss" scoped>
.pika-bg {
  @apply min-h-screen;
  background: url(../assets/img/bg.svg) #f4f4f4;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
