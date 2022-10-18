<template>
  <main id="main">
    <Slider />
  </main>
</template>

<script>
import Slider from '../components/index/Slider.vue'

export default {
  components: {
    Slider,
  }
}
</script>

<style lang='scss'>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

</style>
