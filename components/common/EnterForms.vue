<template>
  <section class="enter-forms">

    <!-- form-controls -->

    <div class="enter-forms__item">
      <h2 class="enter-forms__title">
        Please<br> log in
      </h2>
      <button 
        class="enter-forms__button" 
        type="button" 
        @click="isActive = !isActive"
      >Login
      </button>
    </div>
    <div class="enter-forms__item">
      <h2 class="enter-forms__title">Not registered yet?</h2>
      <button 
        class="enter-forms__button"
        type="button" 
        @click="isActive = !isActive" 
      >Registration
    </button>
    </div>

    <!-- Блок формы -->

    <div 
      class="enter-forms__forms"
      :class="{'enter-forms__forms_active' : isActive}"
    >
    </div>

    <!-- <Login />
    <Registration /> -->
  </section>
</template>

<script setup>
import Login from './modal-forms/Login.vue'
import Registration from './modal-forms/Registration.vue'; 

import { ref } from 'vue'

const isActive = ref('false')

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
    left: 40%;

    width: 60%;
    height: 120%;

    border-radius:5px;
    background-color:white;
    box-shadow: 0 5px 45px rgba(0,0,0,0.2);
    transition: 0.3s ease-in-out;

    &_active {
      left: 0;
    }
  }

  &__button {
    padding: 10px;
    color: white;
    border: none;
    border-radius:5px;
    background-color: $pa-gr_dark-pink;
  }
}
</style>