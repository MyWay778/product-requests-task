<script setup lang="ts">
  import { Card, CardHeader, Button, Cell } from '~/shared/ui'
  import { Table, type Column } from '~/widgets'
  import { StatusCell, ResultCell } from './index'
  import { formatDate } from '~/shared/utils'
  import { useRequests } from '~/entities/request/api'

  const columns: Column[] = [
    { title: 'Номер', field: 'number' },
    { title: 'Статус', field: 'status' },
    { title: 'Результат', field: 'result' },
    { title: 'Дата', field: 'date' },
    { title: 'Действие', field: 'actions' }
  ]

  const { data, pending } = useRequests()
  const router = useRouter()

  function editHandler(id: number) {
    router.push(`/edit?id=${id}`)
  }
</script>

<template>
  <Table
    :columns="columns"
    :data="data"
    data-id="id"
    :loading="pending">
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
      <Cell>
        {{ formatDate(value as string) }}
      </Cell>
    </template>

    <!-- Actions -->
    <template #cell-actions="{ row }">
      <Cell>
        <Button
          :variant="row.activeRow ? 'active' : 'default'"
          :loading="false"
          @click="editHandler(row.id)"
          >Редактировать</Button
        >
      </Cell>
    </template>
  </Table>
</template>
