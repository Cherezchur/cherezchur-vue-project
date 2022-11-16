<template>
  <div class="login">
    <h2 class="login__title">
      Please log in
    </h2>
    <form class="login__form" @submit.prevent="submitHandler">
      <div class="login__field">
        <label class="login__label visually-hidden" for="login">Login</label>
        <Input
          :id="'email'" 
          :name="'email'"
          :type="'email'"
          :autocomplete="'current-login'"  
          :placeholder="'Please write email'"
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
          :placeholder="'Please write password'"
          :rules="'required|minmax:5,36'"
        />
      </div>
      <button
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
      <button
        type="button"
        @click="$emit('modal-update', 'registration')"
      >registration
      </button>
    </div>
    
  </div>
</template>

<script setup>
import Input from '../../elements/Input.vue'

import { ref, reactive, computed } from 'vue'

const props = defineProps({
  modalUpdateHandler: {
    type: Function,
    default: () => ''
  },
})

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

  &__validation {
    font-size:10px;
    color: red;
  }
}
</style>