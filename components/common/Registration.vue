<template>
  <div class="registration">
    <form v-on:submit.prevent action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="registration_fields">
        <div>
          <label for="login">Login</label>
          <input
            type="text"
            id="login" 
            name="login" 
            required
            v-model="login" 
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input 
            v-model="password" 
            id="password" 
            name="password" 
            type="password"  
            required              
          />
        </div>
        <div>
          <label for="confirmPassword">Confirm password</label>
          <input 
            v-model="confirmPassword" 
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

  const formData = reactive({
    login: '',
    password: '',
    confirmPassword: ''
  })

</script>