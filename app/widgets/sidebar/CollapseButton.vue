<script setup lang="ts">
  const { collapsed } = defineProps<{
    collapsed?: boolean
  }>()
</script>

<template>
  <button
    class="button flex-center tr-color-bg"
    :class="$style.button">
    <Icon
      name="custom:chevron-left"
      :class="[$style.icon, { [$style._rotate]: collapsed }]"
      size="12" />
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
    flex-shrink: 0;
    border: none;

    &:hover {
      background-color: var(--button--hover-bg-color);
    }
  }

  .icon {
    transition: rotate var(--tr-duration) var(--tr-fn);
    &._rotate {
      rotate: 180deg;
    }
  }
</style>
