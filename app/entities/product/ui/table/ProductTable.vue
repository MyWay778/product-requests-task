<script setup lang="ts">
  import { Table, type Column } from '~/widgets/table'

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
    }
  ]
</script>

<template>
  <Table
    :columns
    :data
    data-id="id">
  </Table>
</template>
