<template>
  <ValidationProvider rules="required|min:5|max:36|alpha_dash" v-slot="{ errors }">
    <input
      :id="props.id"
      :name="props.name"
      :type="props.type"
      v-model="content"
      :autocomplete="props.autocomplete"
      :placeholder="props.placeholder"
    >
    <span v-if="errors.length > 0" class="input__valid">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script setup>
import { ValidationProvider } from 'vee-validate'
import { ref } from 'vue'
import { extend } from 'vee-validate'
import { required, min, max, alpha_dash } from 'vee-validate/dist/rules';

const content = ref('')

console.log(min)

extend('min', {
  ...min,
  params: ['min'],
  message: 'the {_field_} field has less than {min} letters {_value_}'
})
extend('max', {
  ...max,
  params: ['max'],
  message: 'the {_field_} field has less than {max} letters'
})
extend('alpha_dash', {
  ...alpha_dash,
  message: 'The {_field_} field can contain alphanumeric characters, as well as hyphens and underscores.'
})
extend('required', {
  ...required,
  message: 'the {_field_} field is required'
})

const props = defineProps({
  id: '', 
  name: '',
  type: '', 
  vModel: '',
  autocomplete: '', 
  placeholder: '',
})


</script>