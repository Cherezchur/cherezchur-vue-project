<template>
  <main id="main" class="container">
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
      const windowWidth = window.innerWidth - 100;
      const windowHeight = windowHeight;

      return windowWidth > windowHeight ? true : false; 
    }

    return {
      isGorizontal
    }
  }

  // setup() {
  //   const matchHeight = () =>  {
  //     const height = this.$refs.main;
  //     console.log(height);
  //   }
  //   return matchHeight;
  // },
}
</script>

<style lang='scss'>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

</style>
