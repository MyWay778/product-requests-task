<script setup lang="ts">
  const { active } = defineProps<{
    active?: boolean
  }>()
</script>

<template>
  <tr :class="[$style.row, { [$style._active]: active }]">
    <slot />
  </tr>
</template>

<style lang="scss" module>
  .row {
    &._active {
      background-color: var(--active-bg-2);
    }
  }
</style>
