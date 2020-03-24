<template>
  <nav>
    <div class="nav-inner">
      <img src="../assets/img/joesphmark-logo.png" alt="Josephmark logo" />
      <div class="nav-mobile">
        <button
          class="flex items-center justify-center"
          @click="showNav = !showNav"
        >
          <svg
            :class="{ hidden: showNav }"
            width="31"
            height="11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="31" height="3" rx="1.5" fill="#F4F4F4" />
            <rect y="8" width="31" height="3" rx="1.5" fill="#F4F4F4" />
          </svg>

          <svg
            :class="{ hidden: !showNav }"
            width="22"
            height="22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.597 2.224L2 20m17.597 0L2 2.224"
              stroke="#F8F8F8"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div class="nav-mobile-links" :class="{ hidden: !showNav }">
          <img
            class="nav-mobile-img"
            src="../assets/img/ash.png"
            alt="User profile"
          />
          <ul>
            <li @click="showNav = !showNav">
              <nuxt-link to="/">
                Pokedex
              </nuxt-link>
            </li>
            <li @click="showNav = !showNav">
              <nuxt-link to="/party">
                Party
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <ul class="nav-links">
        <li>
          <nuxt-link to="/">
            Pokedex
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/party">
            Party
          </nuxt-link>
        </li>
        <img class="nav-img" src="../assets/img/ash.png" alt="User profile" />
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style lang="postcss" scoped>
nav {
  @apply fixed flex items-center;
  z-index: 1;

  background-color: #333;
  width: 100%;
  height: 63px;
  padding: 0 30px;
  margin: 0 auto;
  @screen lg {
    height: 80px;
  }
  & .nav-inner {
    @apply flex justify-between items-center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  & .nav-links {
    @apply hidden justify-end items-center text-center text-xs font-work-sans uppercase font-bold;
    color: #adadad;
    & .nuxt-link-exact-active {
      color: #fff;
    }
    & li {
      margin: 0 30px;
    }
    @screen lg {
      @apply flex;
    }
    & .nav-img {
      @apply block;
      margin-left: 30px;
      width: 56px;
      background-color: #f4f4f4;
      border-radius: 100px;
    }
  }

  & .nav-mobile {
    @screen lg {
      @apply hidden;
    }
  }

  & .nav-mobile-links {
    position: fixed;
    width: 100%;
    height: calc(100vh - 63px);
    top: 63px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);

    & ul {
      @apply text-center absolute text-white font-work-sans uppercase font-bold;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      & li {
        @apply my-2;
      }
    }
  }

  & .nav-mobile-img {
    @apply block mx-auto mt-4;
    background-color: #f4f4f4;
    border-radius: 100px;
  }
}
</style>
