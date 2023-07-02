<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <input
    data-testid="email"
    aria-required="true"
    type="email"
  />
  <input
    data-testid="password"
    aria-required="true"
    type="password"
  />
  <button
    data-testid="submit"
    type="submit"
  >{{ props.label }}</button>
</template>

<style scoped>
</style>