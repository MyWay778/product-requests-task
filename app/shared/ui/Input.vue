<script setup lang="ts">
  import type { StyleValue } from 'vue'
  import type { ClassValue } from '~/shared/types'
  import { IconButton } from '~/shared/ui'

  const model = defineModel<string | number>()

  const attrs = useAttrs()
  const splittedAttrs = computed(() => {
    const { class: c, style, ...rest } = attrs
    return {
      wrapper: { class: c as ClassValue, style: style as StyleValue },
      input: rest
    }
  })
</script>

<template>
  <div
    v-bind="splittedAttrs.wrapper"
    :class="$style.wrapper">
    <input
      v-bind="splittedAttrs.input"
      v-model="model"
      :class="[$style.input, { [$style._error]: false }]" />

    <IconButton
      v-show="model"
      :class="$style.clear"
      tabindex="-1"
      size="s"
      icon="custom:close"
      :icon-size="11"
      hover-variant="color" />
  </div>
</template>

<style lang="scss" module>
  .wrapper {
    position: relative;
  }

  .input {
    width: 100%;
    padding: 7px 26px 7px 12px;
    border: 1px solid var(--input-border-color);
    border-radius: var(--input-radius);
    font-size: 14px;
    line-height: 20px;

    &:focus-visible {
      outline: 1px solid var(--black-2);
    }

    &::placeholder {
      transition: color var(--tr-duration) var(--tr-fn);
      color: var(--input-placeholder-color);
    }

    &:hover::placeholder {
      color: inherit;
    }

    &._error {
      border-color: red;
    }
  }

  .clear {
    position: absolute;
    right: 8px;
    top: 10px;
    z-index: 1;
  }
</style>
