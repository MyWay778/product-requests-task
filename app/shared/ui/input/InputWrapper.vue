<script setup lang="ts">
  import type { StyleValue } from 'vue'
  import type { ClassValue } from '~/shared/types'
  import { IconButton } from '~/shared/ui'

  const { showClear, placeholder = 'Введите значение' } = defineProps<{
    showClear?: boolean
    placeholder?: string
  }>()
  const emit = defineEmits<{
    clear: []
  }>()

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
    <slot
      :attrs="splittedAttrs.input"
      class="focus-outline"
      :class="[$style.input, { [$style._error]: false }]"
      :placeholder="placeholder" />

    <IconButton
      v-show="showClear"
      :class="$style.clear"
      tabindex="-1"
      size="s"
      icon="custom:close"
      :icon-size="11"
      hover-variant="color"
      @click="emit('clear')" />
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
