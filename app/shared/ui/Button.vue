<script setup lang="ts">
  const { variant = 'default' } = defineProps<{
    variant?: 'default' | 'active'
  }>()
</script>

<template>
  <button
    class="button tr-background"
    :class="[$style.button, variant && $style[`_${variant}`]]">
    <div :class="$style.inner">
      <slot />
    </div>
  </button>
</template>

<style lang="scss" module>
  .button {
    font-size: 14px;
    line-height: 1.3;
    padding: 8px 12px;
    min-height: 36px;
    border: 1px solid var(--button-border-color);
    border-radius: var(--button-radius);
    background-color: var(--button-bg-color);
    overflow: hidden;

    &:hover {
      background-color: var(--button-hover-bg-color-2);
    }

    &._active {
      position: relative;
      color: var(--button-active-color);
      background: var(--button-active-bg-color);
      border: none;
      font-weight: 700;

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--button-active-bg-hover-color);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 0;
      }

      .inner {
        position: relative;
        z-index: 1;
      }

      &:hover:after {
        opacity: 1;
      }
    }
  }
</style>
