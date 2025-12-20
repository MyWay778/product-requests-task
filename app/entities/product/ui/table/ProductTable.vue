<script setup lang="ts">
  import { Table, type Column } from '~/widgets/table'
  import { Cell, Input } from '~/shared/ui'

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

  const data = [
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
  ]
</script>

<template>
  <Table
    :columns
    :data
    data-id="id">
    <template #cell-quantity>
      <Cell>
        <Input
          placeholder="от 500"
          type="number" />
      </Cell>
    </template>
  </Table>
</template>
