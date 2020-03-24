<template>
  <div class="container">
    <h3
      class="text-2xl font-bold leading-none lg:text-4xl page-title font-tinos"
    >
      Choose your team

      <div
        class="absolute flex-col items-center justify-center hidden mt-40 lg:flex"
      >
        <span
          class="block w-20 mb-4 text-sm text-center text-gray-600 font-tinos"
          >Scroll for more</span
        >
        <svg
          width="19"
          height="29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity=".6" fill="#333">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.799 0a8.849 8.849 0 00-8.85 8.849V19.59a8.849 8.849 0 0017.699 0V8.85A8.849 8.849 0 009.798 0zm0 1.535a7.212 7.212 0 00-7.213 7.212v10.946a7.212 7.212 0 0014.425 0V8.747a7.212 7.212 0 00-7.212-7.212z"
            />
            <rect x="8.125" y="6.578" width="2.99" height="2.99" rx="1.495" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.919 22l1.284-1.283.422.423-1.794 1.794a.299.299 0 01-.422 0L7.615 21.14l.423-.423 1.283 1.284v-9.444h.598v9.444z"
            />
          </g>
        </svg>
      </div>
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

<style lang="postcss" scoped></style>
