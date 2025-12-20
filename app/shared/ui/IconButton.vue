<script setup lang="ts">
  const { icon, iconSize = 12 } = defineProps<{
    icon: string
    iconSize?: number
  }>()
</script>

<template>
  <button
    class="button flex-center tr-color-bg"
    :class="$style.button">
    <Icon
      :name="icon"
      :class="[$style.icon]"
      :size="iconSize" />
  </button>
</template>

<style lang="scss" module>
  .button {
    width: 24px;
    height: 24px;
    padding: 0;
    border-radius: var(--button-radius);
    color: var(--gray);
    background-color: var(--button-bg-color);
    flex-shrink: 0;
    border: none;

    &:hover {
      background-color: var(--button--hover-bg-color);
    }
  }
</style>
