<script setup lang="ts">
  import { Sidebar } from '~/shared/ui'
</script>

<template>
  <div
    class="layout"
    :class="$style.layout">
    <Sidebar />

    <slot />
  </div>
</template>

<style lang="scss" module>
  .layout {
    background-color: var(--bg-color);
    padding: 24px 20px;
    display: flex;
    gap: 12px;
  }
</style>
