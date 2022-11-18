<template>
  <section class="enter-forms">

    <!-- form-controls -->

    <div class="enter-forms__item">
      <h2 class="enter-forms__title">
        Login
      </h2>
      <button 
        class="enter-forms__button enter-forms__button_blue" 
        type="button"
        @click="changeActiveForm"
      >Login
      </button>
    </div>

    <div class="enter-forms__item">
      <h2 class="enter-forms__title">Not registered yet?</h2>
      <button 
        class="enter-forms__button enter-forms__button_pink"
        type="button" 
        @click="changeActiveForm"
      >Registration
    </button>
    </div>

    <!-- Блок формы -->

    <div 
      class="enter-forms__forms"
      :class="{'active' : isChange}"
    >
      <Login v-show="isChange === false"/>
      <Registration v-show="isChange === true"/>
    </div>
  </section>
</template>

<script setup>
import Login from './modal-forms/Login.vue'
import Registration from './modal-forms/Registration.vue'; 

import { ref } from 'vue'

const props = defineProps({
  changeForm: {
    type: Function,
    default: () => []
  }
})

let isChange = ref(false)

const changeActiveForm = () => {
  props.changeForm();
  isChange.value = !isChange.value
}

</script>

<style lang="scss" scoped>
.enter-forms {
  display: flex;
  justify-content: space-between;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content:space-between;

    width: 50%;

    &:nth-child(1) {
      padding-right: 80px;
    }
    &:nth-child(2) {
      padding-left: 80px;
    }
  }

  &__title {
    margin: 0;
    padding-bottom: 20px;

    font-size:14px;
    line-height: 20px;
    color: $contur-dark-purple;
  }

  &__forms {
    position: absolute;
    top: -10%;
    left: 0;

    width: 60%;
    height: 120%;
    overflow: hidden;

    border-radius:5px;
    background-color: $menu-icon;
    box-shadow: 0 5px 45px rgba(0,0,0,0.2);
    transition: 0.3s ease-in-out;
  }

  &__button {
    padding: 10px;
    color: white;
    border: none;
    border-radius:5px;
    background-color: $menu-icon;
    color: $contur-dark-purple;
  }

  .active {
    left: 40%;
  }
}
</style>