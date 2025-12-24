<script setup lang="ts">
  const { title } = defineProps<{
    title: string
  }>()
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.inner">
      <slot name="prepend" />
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<style lang="scss" module>
  .header {
    padding-block: 16px;
    padding-inline: var(--padding-inline);
    border-bottom: 1px solid var(--gray-3);
  }

  .inner {
    display: flex;
    align-items: center;
    gap: 12px;
  }
</style>
