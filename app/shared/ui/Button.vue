<script setup lang="ts">
  import { Loader } from '~/shared/ui'

  const {
    variant = 'default',
    disabled,
    loading
  } = defineProps<{
    variant?: 'default' | 'active'
    disabled?: boolean
    loading?: boolean
  }>()
</script>

<template>
  <button
    class="button tr-background"
    :class="[
      $style.button,
      variant && $style[`_${variant}`],
      { [$style._disabled]: disabled, [$style._loading]: loading }
    ]">
    <div :class="$style.inner">
      <Loader
        v-show="loading"
        :class="$style.loader"
        size="s"
        :color="variant === 'active' ? 'secondary' : 'primary'" />

      <div :class="$style.slot">
        <slot />
      </div>
    </div>
  </button>
</template>

<style lang="scss" module>
  .button {
    position: relative;
    font-size: 14px;
    line-height: 1.3;
    padding: 8px 12px;
    min-height: 36px;
    border: 1px solid var(--button-border-color);
    border-radius: var(--button-radius);
    background-color: var(--button-bg-color);
    overflow: hidden;

    &:hover:not(._loading) {
      background-color: var(--button-hover-bg-color-2);
    }

    &._active:not(._disabled) {
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

      &:not(._loading):hover:after {
        opacity: 1;
      }
    }

    &._disabled {
      font-weight: 700;
      background-color: var(--button-disabled-bg-color);
      border-color: transparent;
      color: var(--gray-7);
      cursor: default;
    }

    &._loading {
      cursor: default;

      .slot {
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
