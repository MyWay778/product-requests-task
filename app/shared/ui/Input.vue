<script setup lang="ts">
  import type { StyleValue } from 'vue'
  import type { ClassValue } from '~/shared/types'
  import { IconButton } from '~/shared/ui'

  const model = defineModel<string | number | null>()

  const {
    placeholder = 'Введите значение',
    min,
    max,
    clearValue = 'min'
  } = defineProps<{
    placeholder?: string
    min?: number
    max?: number
    clearValue?: 'min'
  }>()

  const localModel = ref(model.value)
  const isFocused = ref(false)

  watch(model, v => {
    if (isFocused.value) return
    localModel.value = v
  })

  const modelProxy = computed({
    get() {
      return localModel.value
    },
    set(value) {
      localModel.value = value

      if (value === '' || value == null) {
        model.value = value
        return
      }

      let num = Number(value)
      if (Number.isNaN(num)) return

      if (min != null) {
        num = Math.max(num, min)
      }

      if (max != null) {
        num = Math.min(num, max)
      }

      model.value = num
    }
  })

  const attrs = useAttrs()
  const splittedAttrs = computed(() => {
    const { class: c, style, ...rest } = attrs
    return {
      wrapper: { class: c as ClassValue, style: style as StyleValue },
      input: rest
    }
  })

  function blurHandler() {
    localModel.value = model.value
    isFocused.value = false
  }

  function clear() {
    model.value = clearValue === 'min' && min != null ? min : null
  }
</script>

<template>
  <div
    v-bind="splittedAttrs.wrapper"
    :class="$style.wrapper">
    <input
      v-bind="splittedAttrs.input"
      v-model="modelProxy"
      class="focus-outline"
      :placeholder="placeholder"
      :class="[$style.input, { [$style._error]: false }]"
      @focus="isFocused = true"
      @blur="blurHandler" />

    <IconButton
      v-show="localModel"
      :class="$style.clear"
      tabindex="-1"
      size="s"
      icon="custom:close"
      :icon-size="11"
      hover-variant="color"
      @click="clear" />
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
