<template>
  <component
    :is="require(`~/assets/image/icons/${props.name}.svg?inline`)"
    class="icon"
    :class="props.name"
  />
</template>

<script setup>

const props = defineProps({
  name: {
    type: String,
    default: 'logo',
  },
})

</script>
