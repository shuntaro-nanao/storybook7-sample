<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  {{ props.label }}
</template>

<style scoped>
</style>