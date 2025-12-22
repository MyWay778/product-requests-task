<script setup lang="ts">
  import InputWrapper from './InputWrapper.vue'
  import { useNumberInput } from './composables/use-number-input'

  const model = defineModel<number | null>()

  const {
    min,
    max,
    clearValue = 'min'
  } = defineProps<{
    min?: number
    max?: number
    clearValue?: 'min'
  }>()

  const { model: localModel, focusHandler, blurHandler, clearHandler } = useNumberInput(model, { min, max, clearValue })
</script>

<template>
  <InputWrapper
    v-slot="slotProps"
    :show-clear="Boolean(localModel)"
    @clear="clearHandler">
    <input
      v-bind="slotProps"
      v-model.number="localModel"
      :min="min"
      :max="max"
      type="number"
      @focus="focusHandler"
      @blur="blurHandler" />
  </InputWrapper>
</template>
