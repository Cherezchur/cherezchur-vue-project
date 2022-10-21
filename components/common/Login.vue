<template>
  <div>
    <form>
      <input type="text" value="plese write login" />
    </form>
    <div v-for="user in users" :key="user.id">
      {{user.name}}
    </div>
  </div>
</template>

<script setup>
</script>