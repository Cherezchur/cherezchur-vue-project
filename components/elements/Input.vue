<template>
  <ValidationProvider :rules="props.rules" v-slot="{ classes, errors }">
    <div class="inputField" :class="classes">
      <input
      :id="props.id"
      :name="props.name"
      :type="props.type"
      v-model="content"
      :autocomplete="props.autocomplete"
      :placeholder="props.placeholder"
    >
    <span v-if="errors.length > 0" class="input__valid">{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script setup>
import { ValidationProvider } from 'vee-validate'
import { ref } from 'vue'
import { extend, configure } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules';

const props = defineProps({
  id: '', 
  name: '',
  type: '', 
  vModel: '',
  autocomplete: '', 
  placeholder: '',
  rules: '',
})

const content = ref('')

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'],
  }
})

extend('required', {
  ...required,
  message: 'the {_field_} field is required'
})

extend('min', {
  validate(content, params) {
    console.log(params.min);
    return content.length >= params.min
  },
  params: ['min'],
  message: 'the minimum number of characters is {min}'
})

extend('minmax', {
  validate(content, {min, max}) {
    return content.length >= min && content.length <= max
  },
  params: ['min', 'max'],
  message: 'the minimum number of characters is {min}, the maximum is {max}'
})

extend('email', { 
  ...email, 
  message: 'the {_field_} is not email adress'
})

</script>

<style lang="scss" scoped>
.inputField {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  input {
    border-radius: 5px;
    border: none;
    background-color: $pa-gr_light-pink;
    padding: 10px;
    width: 75%;
  }
  span { 

  }
}
</style>>