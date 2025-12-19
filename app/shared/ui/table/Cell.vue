<script setup lang="ts"></script>

<template>
  <td :class="$style.cell">
    <slot />
  </td>
</template>

<style lang="scss" module>
  .cell {
    color: var(--cell-color);
    padding: 20px;
  }
</style>
