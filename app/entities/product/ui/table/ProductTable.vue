<script setup lang="ts">
  import { Table, type Column } from '~/widgets/table'
  import { Cell, NumberInput } from '~/shared/ui'
  import type { Product } from '~/entities/product/types'
  import { required, isNumber, inRange } from '~/shared/utils/validations'
  import { ProductFieldSelect } from '~/entities/product/ui'
  import { useValidate } from '~/shared/composables'

  const { data, loading } = defineProps<{
    data: Product[]
    loading?: boolean
  }>()

  const columns: Column[] = [
    {
      title: 'Название',
      field: 'name'
    },
    {
      title: 'Количество',
      field: 'quantity'
    },
    {
      title: 'Цена',
      field: 'price'
    },
    {
      title: 'Цвет',
      field: 'color'
    }
  ]

  const { errors, validate, clearFieldError } = useValidate(() => data, {
    quantity: [required, isNumber, inRange(1, 1_000_000)],
    price: [required, isNumber, inRange(1, 1_000_000)],
    color: [required]
  })

  defineExpose({
    validate
  })
</script>

<template>
  <Table
    :columns
    :data="data"
    data-id="id"
    :loading="loading">
    <!-- Quantity -->
    <template #cell-quantity="{ row, rowIndex }">
      <Cell>
        <NumberInput
          v-model="row.quantity"
          :min="0"
          :max="1_000_000"
          type="number"
          :error="errors.get(rowIndex)?.quantity"
          @update:model-value="clearFieldError(rowIndex, 'quantity')" />
      </Cell>
    </template>

    <!-- Price -->
    <template #cell-price="{ row, rowIndex }">
      <Cell>
        <NumberInput
          v-model="row.price"
          :min="0"
          :max="1_000_000"
          type="number"
          :error="errors.get(rowIndex)?.price"
          @update:model-value="clearFieldError(rowIndex, 'price')" />
      </Cell>
    </template>

    <!-- Color -->
    <template #cell-color="{ row, rowIndex }">
      <Cell>
        <ProductFieldSelect
          v-model="row.color"
          :product-code="row.productCode"
          field="color"
          :error="errors.get(rowIndex)?.color"
          @update:model-value="clearFieldError(rowIndex, 'color')" />
      </Cell>
    </template>
  </Table>
</template>
