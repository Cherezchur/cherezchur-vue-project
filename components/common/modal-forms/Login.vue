<template>
  <transition name="login">
    <div class="login">
      <h2 class="login__title">
        Login
      </h2>

      <!-- form -->

      <ValidationObserver v-slot="{ invalid }">
        <form class="login__form" @submit.prevent="submitHandler">
          <div class="login__field">
            <label class="visually-hidden" for="login">Login</label>
            <Input
              :id="'email'" 
              :name="'email'"
              :type="'email'"
              :autocomplete="'current-login'"  
              :placeholder="'Email'"
              :rules="'required|min:5|email'"
              :fieldStyle="'pink'"
            />
          </div>
          <div class="login__field">
            <label class="visually-hidden" for="password">Password</label>
            <Input
              :id="'password1'" 
              :name="'password'"
              :type="'password'"
              :autocomplete="'current-password'"  
              :placeholder="'Password'"
              :rules="'required|minmax:5,36'"
              :fieldStyle="'pink'"
            />
            <a class="login__password-recovery" href="#">
              Forgot password?
            </a>
          </div>
          <button
            class="login__submit"
            type="submit"
            :disabled="invalid"
            @click.prevent="submitForm"
          >Login
          </button>
        </form>
      </ValidationObserver>

    </div>
  </transition>
</template>

<script setup>
import { ValidationObserver } from 'vee-validate'
import Input from '../../elements/Input.vue'

import { ref, reactive, computed } from 'vue'

const formData = reactive({
  login: '',
  password: ''
})

</script>

<style lang="scss" scoped>
.login {
  @include form-container;

  position: absolute;
  left: 0;
  top: 15%;

  /* animation */

  &-enter,
  &-leave-to {
    left: -100%;
  }

  &-enter-active,
  &-leave-active {
    transition: left 0.3s ease-in-out;
  }

  &-enter-active {
    transition-delay: 0.2s;
  }

  // forms

  &__title {
    @include modal-title;
  }
  &__form {
    margin-bottom: 25px;
  }
  &__field {
    input { 
      width: 100%;
    }
  }
  &__password-recovery {
    display: block;

    margin-top: -5px;
    margin-bottom: 20px;

    text-decoration: underline;
    color: $contur-dark-purple;
    font-size:10px;
  }
  &__submit {
    width: 100%;
    padding: 10px;

    color: $white;
    
    border: none;
    border-radius:5px;
    background-color: $pa-gr_dark-pink;

    &:disabled {
      opacity: 0.7;
    }
  }
}
</style>