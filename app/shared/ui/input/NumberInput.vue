<script setup lang="ts">
  import InputWrapper from './InputWrapper.vue'
  import { useNumberInput } from './composables/use-number-input'

  const model = defineModel<number | null>()

  const {
    min,
    max,
    clearValue = 'min',
    silent
  } = defineProps<{
    min?: number
    max?: number
    clearValue?: 'min'
    silent?: boolean
  }>()

  const emit = defineEmits<{
    valid: [boolean]
  }>()

  const { model: localModel, focusHandler, blurHandler, clearHandler } = useNumberInput(model, { min, max, clearValue })
  const invalid = computed(
    () => !localModel.value || Number.isNaN(localModel.value) || !/^\d*\.?\d+$/.test(String(localModel.value))
  )

  watchEffect(() => emit('valid', !invalid.value))

  defineExpose({
    valid: computed(() => !invalid.value)
  })
</script>

<template>
  <InputWrapper
    v-slot="slotProps"
    :show-clear="Boolean(localModel)"
    :invalid
    :silent
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
