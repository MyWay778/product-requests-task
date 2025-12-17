<script setup lang="ts"></script>

<template>
  <div :class="$style.card">
    <slot />
  </div>
</template>

<style lang="css" module>
  .card {
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    background-color: var(--card-bg-color);
  }
</style>
