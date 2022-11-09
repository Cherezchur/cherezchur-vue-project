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
          :valid="false"
          @input-change="inputChange"
        />
        <!-- <span
          class="login__validation"
          v-for="error in v$.login.$errors"
          :key="error.$uid"
        >
        {{ error.$message }}
        </span> -->
      </div>
      <div class="login__field">
        <label class="login__label visually-hidden" for="password">Password</label>
        <input
          id="password" 
          name="password" 
          type="password"
          v-model="formData.password"
          autocomplete="current-password"             
          placeholder="Please write password" 
        />
        <!-- <span
          class="login__validation"
          v-for="error in v$.password.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </span> -->
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
        type="submit"
        @click.prevent="$emit('modalUpdate', 'registration')"
      >registration
      </button>
    </div>
    
  </div>
</template>

<script setup>
import Input from './Input'

import { ref, reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

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

const rules = computed(() => {
  return { 
    login: { minLength: minLength(5) },
    password: { required }
  }
})

const inputChange = (content) => {
  console.log('login: ', content);
}

const v$ = useVuelidate( rules, formData)

const toRegistrationHandler = (option) => props.modalUpdateHandler(option)

const submitForm = async () => {
  const result = await v$.value.$validate()

  if(result) {
    // Запрос к бд
    alert('success');
  } else {
    alert('error');
  }
  
}

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