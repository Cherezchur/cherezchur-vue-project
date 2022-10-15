<template>
  <div class='layout-container'>
    <Logo />
    <Menu />
    <slot />
  </div>
</template>

<script>
import Logo from '../components/common/Logo.vue';
import Menu from '../components/common/Menu.vue';

export default {
    comments: {
        Logo,
        Menu
    },
    components: { Menu }
}
</script>

<style lang='scss' scoped>
.layout-container {
  background-color: rgba($color: black, $alpha: 0.4);
  display: flex;
  justify-content: space-between;
}
</style>