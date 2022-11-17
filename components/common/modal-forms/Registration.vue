<template>
  <div class="registration">
    <h2 class="registration__title">Not registered yet?</h2>
    <button type="button">registration</button>
    <form v-on:submit.prevent action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="registration_fields">
        <div>
          <label for="login">Login</label>
          <input
            v-model="formData.login"
            type="text"
            id="login" 
            name="login" 
            required 
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input 
            v-model="formData.password" 
            id="password" 
            name="password" 
            type="password"  
            required              
          />
        </div>
        <div>
          <label for="confirmPassword">Confirm password</label>
          <input 
            v-model="formData.confirmPassword" 
            id="confirmPassword" 
            name="confirmPassword" 
            type="password" 
            required              
          />
        </div>
      </div>
    </form>
    <button @click.prevent="postRegisterForm">
      register
    </button>
  </div>
</template>

<script setup>
  import {ref} from 'vue'

  const formData = ref({
    login: '',
    password: '',
    confirmPassword: ''
  })

</script>

<style lang="scss"scoped>
.registration {
  &__title {
    @include modal-title
  }
}
</style>