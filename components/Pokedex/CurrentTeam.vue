<template>
  <section>
    <h3 class="text-5xl font-bold leading-none">
      Choose your team
    </h3>

    <ul>
      <li v-for="(poke, index) in selection" :key="index"></li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'CurrentTeam',
  data() {
    return {
      selection: [
        {
          poke: 'yeah',
          url: 'nah'
        },
        {
          poke: 'yeah',
          url: 'nah'
        },
        {
          poke: 'yeah',
          url: 'nah'
        },
        {
          poke: 'yeah',
          url: 'nah'
        }
      ]
    }
  }
}
</script>
<style lang="postcss" scoped></style>
