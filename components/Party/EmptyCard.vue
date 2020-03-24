<template>
  <div class="poke-card">
    <img
      class="poke-sprite"
      src="../../assets/img/pokeball.svg"
      :alt="`empty slot`"
    />

    <nuxt-link class="add-btn" to="/">
      <svg
        width="20"
        height="19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.893v15.214M17.607 9.5H2.393"
          stroke="#333"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['empty'],
  methods: {}
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
}

.add-btn {
  @apply block relative;
  margin: 30px auto 20px auto;

  width: 75px;
  height: 75px;
  border-radius: 150px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05),
    -10px -10px 4px rgba(255, 255, 255, 0.2);
  background-color: #f8f8f8;
  border: 1px solid #fff;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgb(101, 196, 255) !important;
  }

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
</style>
