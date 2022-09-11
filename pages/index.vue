<template>
  <main class="container" :style="styles">
    <Header />
    <Slider />
    <Menu />
  </main>
</template>

<script>
import Header from '../components/index/Header.vue';
import Slider from '../components/index/Slider.vue';
import Menu from '../components/common/Menu.vue';

export default {
  components: { Header, Slider, Menu },

  setup() {
    const isGorizontal = () => {

    }
  },
}
</script>

<style lang='scss'>
.container {
  display: flex;
}

</style>
