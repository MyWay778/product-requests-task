<script setup lang="ts"></script>

<template>
  <div
    class="layout"
    :class="$style.layout">
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
