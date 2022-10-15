<template>
  <div class='menu'>
    <button class='menu__control' :class='{ active: isActive }' @click='clickHandler()'>
      <span></span>
    </button>
    <nav>
      <!-- <ul class='menu__list--hidden'>
        <nuxt-link no-prefetch class='like' to='/gallery/likes' title='like pins'>
          <img src='@/assets/image/icons/heart-disabled--dark.svg'>
        </nuxt-link>
      </ul> -->
    </nav>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const isActive = ref(false);
      const clickHandler = () => isActive.value = !isActive.value

      return {
        clickHandler,
        isActive
      }
    }
}
  
</script>

<style lang='scss' scoped>
.menu {
	margin-left: auto;
	padding-right: 20px;
  display: flex;
  align-items: center;
  &__control {
    position: relative;
    padding: 0;
    height: 40px;
    width: 40px;
    background-color: $menu-bg;
    border-radius: 50%;
    border: none;
    span,
    span::before,
    span::after {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: $menu-icon;
      top: calc(50% - 3px);
      left: calc(50% - 3px);
    }
    span::before,
    span::after {
      content: '';
    }
    span::before {
      transform: translateX(-10px);
    }
    span::after {
      transform: translateX(10px);
    }
    &--active {
      span::before {
        animation: 3s linear rotate;
        transform-origin: 10px 0;
      }
      span::after {
        transform: translateX(10px);
      }
    }
  }
}
</style>