<script setup lang="ts">
  const {
    icon,
    iconSize = 12,
    size = 'm',
    hoverVariant = 'bg-color'
  } = defineProps<{
    icon: string
    iconSize?: number
    size?: 's' | 'm'
    hoverVariant?: 'bg-color' | 'color'
  }>()
</script>

<template>
  <button
    class="button flex-center tr-color-bg"
    :class="[$style.button, $style[`_size-${size}`], $style[`_hover-${hoverVariant}`]]">
    <Icon
      :name="icon"
      :class="[$style.icon]"
      :size="iconSize" />
  </button>
</template>

<style lang="scss" module>
  .button {
    padding: 0;
    border-radius: var(--button-radius);
    color: var(--gray);
    background-color: var(--button-bg-color);
    flex-shrink: 0;
    border: none;

    &._size-s {
      width: 18px;
      height: 18px;
    }

    &._size-m {
      width: 24px;
      height: 24px;
    }

    &._hover-bg-color {
      &:hover {
        background-color: var(--button--hover-bg-color);
      }
    }

    &._hover-color {
      &:hover {
        color: var(--button-hover-color-2);
      }
    }
  }
</style>
