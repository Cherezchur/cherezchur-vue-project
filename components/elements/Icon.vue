<template>
  <component
    :is="require(`~/assets/image/icons/${props.name}.svg?inline`)"
    class="icon"
    :class="props.name"
    :width="props.width"
    :height="props.height"
    :fill="props.fill"
  />
</template>

<script setup>

const props = defineProps({
  name: {
    type: String,
    default: 'logo',
  },
  width: {
    type: String,
    default: '30px'
  },
  fill: {
    type: String,
    default: ''
  }
})

</script>
