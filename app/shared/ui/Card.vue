<script setup lang="ts">
  const { tag = 'div' } = defineProps<{
    tag?: keyof HTMLElementTagNameMap
  }>()
</script>

<template>
  <component
    :is="tag"
    :class="$style.card">
    <slot />
  </component>
</template>

<style lang="css" module>
  .card {
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    background-color: var(--card-bg-color);
  }
</style>
