<script setup lang="ts">
  const { title } = defineProps<{
    title: string
  }>()
</script>

<template>
  <div :class="$style.header">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss" module>
  .header {
    padding: 16px 24px;
    border-bottom: 1px solid var(--gray-3);
  }
</style>
