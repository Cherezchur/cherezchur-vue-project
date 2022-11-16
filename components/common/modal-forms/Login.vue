<template>
  <div class="login">
    <form class="login__form" @submit.prevent="submitHandler">
      <div class="login__field">
        <label class="login__label visually-hidden" for="login">Login</label>
        <Input
          :id="'login'" 
          :name="'login'"
          :type="'text'"
          :autocomplete="'current-login'"  
          :placeholder="'Please write login'"
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