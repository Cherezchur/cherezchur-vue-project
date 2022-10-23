<template>
  <div>
    <form>
      <input type="text" value="plese write login" />
    </form>
    <button @click="registrationHandler('registration')">register</button>
  </div>
</template>

<script setup>
const props = defineProps({
  modalUpdateHandler: {
    type: Function,
    default: () => ''
  },
})
const registrationHandler = (option) => props.modalUpdateHandler(option)
</script>