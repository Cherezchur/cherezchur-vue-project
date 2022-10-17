<template>
  <div class='menu'>
    <button class='menu__control' :class='{ menu__control_active: isActive }' @click='burgerButtonHandler()'>
      <span></span>
    </button>
    <nav class='menu__list'>
      <a href='#' id='login' class='menu__item' :class='{ menu__item_active: isActive }'>
        <span>Login</span>
        <img src='@/assets/image/icons/heart-disabled--dark.svg'>
      </a>
      <a href='#' id='message' class='menu__item' :class='{ menu__item_active: isActive }'>
        <span>Message</span>
        <img src='@/assets/image/icons/heart-disabled--dark.svg'>
      </a>
      <nuxt-link no-prefetch id='likes' class='menu__item like' :class='{ menu__item_active: isActive }' to='/gallery/likes' title='like pins'>
        <span>
          Likes galery
        </span>
        <img src='@/assets/image/icons/heart-disabled--dark.svg'>
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const isActive = ref(false);
      const burgerButtonHandler = () => isActive.value = !isActive.value

      return {
        burgerButtonHandler,
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
  position: relative;
  &__control {
    position: relative;
    padding: 0;
    height: 40px;
    width: 40px;
    background-color: $menu-bg;
    border-radius: 50%;
    border: none;
    z-index: 1;
    span,
    span::before,
    span::after {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 20px;
      background-color: $menu-icon;
      top: calc(50% - 3px);
      left: calc(50% - 3px);
      transition: 0.3s;
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
    &_active {
      span::before,
      span::after {
        border-radius: 3px;
        width: 23px;
      }
      span::before {
        transform: rotate(45deg) translate(-6px, 6px);
      }
      span::after {
        transform: rotate(-45deg) translate(-6px, -6px);
      }
    }
  }
  &__item {
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(50% - 20px);
    left: 0;
    height: 40px;
    width: 40px;
    background-color: $menu-icon;
    border-radius: 20px;
    span { 
      position: absolute;
      opacity: 0;
      z-index: 1;
      width: 100px;
      height: 40px;
      background-color: $menu-icon;
      border-radius: 20px;
      transition: 0.3s;
      display: flex;
      align-items: center;
      text-align: start;
      padding-left: 10px;
    }
    &:nth-child(1) {
        transition: 0.2s;
      }
      &:nth-child(2) {
        transition: 0.35s;
      }
      &:nth-child(3) {
        transition: 0.5s;
      }
    &_active {
      opacity: 1;
      &:nth-child(1) {
        transform: translate(-60px, -10px);
      }
      &:nth-child(2) {
        transform: translate(-40px, 40px);
      }
      &:nth-child(3) {
        transform: translate(10px, 60px);
      }
      &:hover {
        &:nth-child(1) {
          span { 
            opacity: 1;
            width: 100px;
            transform: translate(-40px, 0);
          }
        }
        &:nth-child(2) {
          span { 
            opacity: 1;
            width: 120px;
            transform: translate(-50px, 0);
          }
        }
        &:nth-child(3) {
          span { 
            opacity: 1;
            width: 140px;
            transform: translate(-60px, 0);
          }
        }
      }
    }

    img {
      width: 25px;
      height: 25px;
      z-index: 2;
    }
  }
}
</style>