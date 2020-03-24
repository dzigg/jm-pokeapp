<template>
  <div class="container">
    <h1
      v-if="error.statusCode === 404"
      class="mt-8 text-4xl text-center font-work-sans"
    >
      Page not found
    </h1>
    <h1 v-else class="text-4xl text-center font-work-sans">
      An error occurred
    </h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>
