<template>
  <ValidationProvider :rules="props.rules" v-slot="{ classes, errors }">
    <div class="input-field" :class="classes">
      <input
        v-model="content"
        class="input-field__input"
        :id="props.id"
        :name="props.name"
        :type="props.type"
        :autocomplete="props.autocomplete"
        :placeholder="props.placeholder"
        :class="`input-field__input_${props.fieldStyle}`"
    >
    <div 
      v-if="errors.length > 0" 
      class="input-field__valid"
      :class="`input-field__valid_${props.fieldStyle}`"
    >{{ errors[0] }}</div>
    </div>
  </ValidationProvider>
</template>

<script setup>
import { ValidationProvider } from 'vee-validate'
import { ref } from 'vue'
import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules';

const props = defineProps({
  id: '', 
  name: '',
  type: '', 
  vModel: '',
  autocomplete: '', 
  placeholder: '',
  rules: '',
  fieldStyle: '',
})

const content = ref('')

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
  message: 'the minimum is {min}, the maximum is {max}'
})

extend('email', { 
  ...email, 
  message: 'is not email adress'
})

</script>

<style lang="scss" scoped>
.input-field {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  &__input {
    font-weight: 700;
    font-size:14px;
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 10px;

    &_pink {
      background-color: $accent-pink;
      color: $contur-dark-purple;
    }
    &_blue {
      background-color: $il-des_light-blue;
      color: $contur-dark-purple;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
  }
  &__valid {
    color: $accent-pink;
    position: absolute;
    bottom: 5px;
    width: 100%;
    text-align: right;
    font-size: 8px;
    line-height: 14px;

    &_pink {
      color: $pa-gr_dark-pink;
    }
    &_blue {
      color: $il-des_dark-blue;
    }
  }
}
</style>>