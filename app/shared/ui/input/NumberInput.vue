<script setup lang="ts">
  import InputWrapper from './InputWrapper.vue'

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

      if (value == null) {
        model.value = null
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

  function blurHandler() {
    localModel.value = model.value
    isFocused.value = false
  }

  function clearHandler() {
    model.value = clearValue === 'min' && min != null ? min : null
  }
</script>

<template>
  <InputWrapper
    v-slot="slotProps"
    :show-clear="Boolean(localModel)"
    @clear="clearHandler">
    <input
      v-bind="slotProps"
      v-model.number="modelProxy"
      :min="min"
      :max="max"
      type="number"
      @focus="isFocused = true"
      @blur="blurHandler" />
  </InputWrapper>
</template>
