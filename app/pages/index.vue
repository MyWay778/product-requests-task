<script setup lang="ts">
  import { Card, CardHeader } from '~/shared/ui'
  import { Table, type Column } from '~/widgets'
  import { StatusCell, ResultCell } from '~/entities/request/ui'
  import { formatDate } from '~/shared/utils'

  const columns: Column[] = [
    { title: 'Номер', field: 'number' },
    { title: 'Статус', field: 'status' },
    { title: 'Результат', field: 'result' },
    { title: 'Дата', field: 'date' },
    { title: 'Действие', field: 'actions' }
  ]

  const data = [
    {
      id: 1,
      number: '25-135443',
      status: 'active',
      result: 'processing',
      date: 'dsa'
    },
    {
      id: 2,
      number: '25-135444',
      status: 'active',
      result: 'processing',
      date: '2025-08-13'
    },
    {
      id: 3,
      number: '25-135445',
      status: 'active',
      result: 'processing',
      date: '2025-08-12'
    },
    {
      id: 4,
      number: '25-135446',
      status: 'active',
      result: 'processing',
      date: '2025-08-11',
      activeRow: true
    }
  ]
</script>

<template>
  <Card
    tag="main"
    class="grow">
    <CardHeader title="Заявки" />

    <div :class="$style.table">
      <Table
        :columns="columns"
        :data="data"
        data-id="id">
        <!-- Status -->
        <template #cell-status="{ value }">
          <StatusCell :value="value as string" />
        </template>

        <!-- Result -->
        <template #cell-result="{ value }">
          <ResultCell :value=" value as string" />
        </template>

        <!-- Date -->
        <template #cell-date="{ value }">
          {{ formatDate(value as string) }}
        </template>
      </Table>
    </div>
  </Card>
</template>

<style lang="scss" module>
  .table {
    margin-top: 24px;
    padding-inline: var(--padding-inline);
  }
</style>
