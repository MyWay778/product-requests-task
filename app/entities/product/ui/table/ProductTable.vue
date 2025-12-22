<script setup lang="ts">
  import { Table, type Column } from '~/widgets/table'
  import { Cell, Input, Select, type Option } from '~/shared/ui'

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

  const data = ref([
    {
      id: 1,
      name: 'iPhone 16 Pro Max 256',
      quantity: 1,
      price: 100000,
      color: 'black'
    },
    {
      id: 2,
      name: 'iPhone 16 Pro Max 256',
      quantity: 3,
      price: 100000,
      color: 'red'
    },
    {
      id: 3,
      name: 'iPhone 16 Pro Max 256',
      quantity: 5,
      price: 100000,
      color: 'white'
    }
  ])

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
    :data
    data-id="id">
    <!-- Quantity -->
    <template #cell-quantity="{ row }">
      <Cell>
        <Input
          v-model="row.quantity"
          :min="0"
          :max="1_000_000"
          type="number" />
      </Cell>
    </template>

    <!-- Price -->
    <template #cell-price="{ row }">
      <Cell>
        <Input
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
