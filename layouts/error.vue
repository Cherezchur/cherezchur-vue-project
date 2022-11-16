<template>
  <div class="error">
    <h1 class="error__title" v-if="error.statusCode === 404">Page not found</h1>
    <h1 class="error__title" v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>

<style lang="scss" scoped>
  .error {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100vh;
    &__title {
      @include title;
    }
  }
</style>