<script setup lang="ts"></script>

<template>
  <button :class="$style.button">
    <Icon
      name="custom:chevron-left"
      size="20" />
  </button>
</template>

<style lang="scss" module>
  .button {
    width: 36px;
    height: 36px;
    padding: 8px;
    border-radius: var(--button-radius);
    color: var(--gray);
    background-color: var(--bg-color);
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: var(--button--hover-bg-color);
    }
  }
</style>
