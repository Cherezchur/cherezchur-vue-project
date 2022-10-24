<template>
  <div class="registration">
    <form v-on:submit.prevent action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="registration_fields">
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name" 
            name="name" 
            required
            v-model="name" 
            :class="errors.has('name') ? 'warning' : 'success'" 
            placeholder="Name"
          />
        </div>
        <div>
          <label for="username">Name</label>
          <input 
            type="email" 
            id="username" 
            name="username" 
            required
            v-model="username" 
            :class="errors.has('username') ? 'warning' : 'success'" 
            placeholder="username" 
          />
        </div>
        <div>
          <label for="email-address">Email address</label>
          <input 
            id="email-address" 
            name="email" 
            type="email" 
            autocomplete="email" 
            required
            v-model="email"
            :class="errors.has('email') ? 'warning' : 'success'" 
            placeholder="Email address" 
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input 
            v-model="password" 
            id="password" 
            name="password" 
            type="password" 
            autocomplete="current-password" 
            required              
            :class="errors.has('password') ? ' border-red-500' : ''" 
            placeholder="Password" 
          />
        </div>
        <div>
            <div>
              <a href="#">
                Forgot your password?
              </a>
            </div>
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
  import { registerWithEmail } from '~/composables/useAuth'

  const email = ref(null);
  const password = ref(null);
  const username = ref(null);
  const name = ref(null);
  const errors = ref(null);
  let response = ref<FormValidation>({hasErrors: false})

  async function postRegisterForm() {
    response.value = await registrerWithEmail(username.value, name.value, email.value, password.value);
    errors.value = response.value.errors
  }
</script>