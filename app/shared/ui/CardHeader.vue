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
    padding-block: 16px;
    padding-inline: var(--padding-inline);
    border-bottom: 1px solid var(--gray-3);
  }
</style>
