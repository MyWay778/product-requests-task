<script setup lang="ts">
  import { Table, type Column } from '~/widgets/table'
  import { Cell, NumberInput, Select, type Option } from '~/shared/ui'
  import type { Product } from '~/entities/product/types'

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

  const options: Option[] = [
    {
      label: 'Белый',
      value: 'white'
    },
    {
      label: 'Черный',
      value: 'black'
    },
    {
      label: 'Синий',
      value: 'blue'
    },
    {
      label: 'Красный',
      value: 'red'
    },
    {
      label: 'Зеленый',
      value: 'green'
    },
    {
      label: 'Желтый',
      value: 'yellow'
    }
  ]
</script>

<template>
  <Table
    :columns
    :data="data"
    data-id="id"
    :loading="loading">
    <!-- Quantity -->
    <template #cell-quantity="{ row }">
      <Cell>
        <NumberInput
          v-model="row.quantity"
          :min="0"
          :max="1_000_000"
          type="number" />
      </Cell>
    </template>

    <!-- Price -->
    <template #cell-price="{ row }">
      <Cell>
        <NumberInput
          v-model="row.price"
          :min="0"
          :max="1_000_000"
          type="number" />
      </Cell>
    </template>

    <!-- Color -->
    <template #cell-color="{ row }">
      <Cell>
        <Select
          v-model="row.color"
          :options="options" />
      </Cell>
    </template>
  </Table>
</template>
