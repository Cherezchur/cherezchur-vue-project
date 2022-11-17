<template>
  <div class="login">
    <h2 class="login__title">
      Please log in
    </h2>
    <button type="button">Login</button>
    <form class="login__form" @submit.prevent="submitHandler">
      <div class="login__field">
        <label class="login__label visually-hidden" for="login">Login</label>
        <Input
          :id="'email'" 
          :name="'email'"
          :type="'email'"
          :autocomplete="'current-login'"  
          :placeholder="'Email'"
          :rules="'required|min:5|email'"
        />
      </div>
      <div class="login__field">
        <label class="login__label visually-hidden" for="password">Password</label>
        <Input
          :id="'password'" 
          :name="'password'"
          :type="'password'"
          :autocomplete="'current-password'"  
          :placeholder="'Password'"
          :rules="'required|minmax:5,36'"
        />
      </div>
      <button
        class="login__submit"
        type="submit"
        @click.prevent="submitForm"
      >Login
      </button>
    </form>
    <div class="login__other-form">
      <div>
        <a href="#">
          Forgot your password?
        </a>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import Input from '../../elements/Input.vue'

import { ref, reactive, computed } from 'vue'

const formData = reactive({
  login: '',
  password: ''
})

const modalUpdate = () => {
  console.log('update from login');
}

// const change = (content) => {
//   console.log('login: ', content);
// }

</script>

<style lang="scss" scoped>
.login {
  @include login-container;

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
  &__submit {
    width: 50%;
    padding: 10px;
    color: $menu-icon;
    border: none;
    border-radius:5px;
    background-color: $pa-gr_light-pink;
  }
}
</style>