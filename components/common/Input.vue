<template>
  <div class="input">
    <input
      :id="props.id"
      :name="props.name"
      :type="props.type"
      v-model:="content"
      :autocomplete="props.autocomplete"
      :placeholder="props.placeholder"
      @input="$emit('inputChange', content)"
    >
    <span class="input__valid">{{ valid ? 'yes' : 'no' }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: '', 
  name: '',
  type: '', 
  vModel: '',
  autocomplete: '', 
  placeholder: '',
  valid: Boolean,
})

const content = ref('')

</script>