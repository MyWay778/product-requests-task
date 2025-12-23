<script setup lang="ts">
  import { Table, type Column } from '~/widgets/table'
  import { Cell, NumberInput, Select, type Option } from '~/shared/ui'
  import type { Product } from '~/entities/product/types'

  const { data, loading, fieldsSilent } = defineProps<{
    data: Product[]
    loading?: boolean
    fieldsSilent?: boolean
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

  const inputsRefs = ref<InstanceType<typeof NumberInput>[]>([])
  const tableIsValid = computed(() => inputsRefs.value.every(input => input.valid))

  defineExpose({
    valid: tableIsValid
  })
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
          :ref="ref => inputsRefs.push(ref as InstanceType<typeof NumberInput>)"
          v-model="row.quantity"
          :min="0"
          :max="1_000_000"
          type="number"
          :silent="fieldsSilent" />
      </Cell>
    </template>

    <!-- Price -->
    <template #cell-price="{ row }">
      <Cell>
        <NumberInput
          :ref="ref => inputsRefs.push(ref as InstanceType<typeof NumberInput>)"
          v-model="row.price"
          :min="0"
          :max="1_000_000"
          type="number"
          :silent="fieldsSilent" />
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
