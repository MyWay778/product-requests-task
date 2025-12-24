<script setup lang="ts">
  import { Select } from '~/shared/ui'
  import { useFieldOptions } from '~/entities/product/api'

  const model = defineModel<string | null>()

  const { productCode, field, error } = defineProps<{
    productCode: number
    field: string
    error?: string
  }>()

  const { data: options } = useFieldOptions(productCode, field)
</script>

<template>
  <Select
    v-model="model"
    :options="options ?? []"
    :error="error" />
</template>
