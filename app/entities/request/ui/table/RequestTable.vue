<script setup lang="ts">
  import { Button, Cell } from '~/shared/ui'
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

  const { data, status, execute, refresh } = useRequests()
  execute()

  const loading = computed(() => status.value === 'pending')

  const router = useRouter()

  function editHandler(id: number) {
    router.push(`/edit?id=${id}`)
  }

  const saveLoading = ref(false)

  const savedStorageKey = `products-saved-`

  function checkSaved(id: number) {
    const changedProducts = localStorage.getItem(savedStorageKey + id)
    return Boolean(changedProducts)
  }

  function saveRequest(id: number) {
    const changedProducts = localStorage.getItem(savedStorageKey + id)
    if (!changedProducts) return
    saveLoading.value = true

    $fetch('/api/send', {
      method: 'POST',
      body: {
        id,
        products: JSON.parse(changedProducts)
      }
    })
      .then(() => {
        localStorage.removeItem(savedStorageKey + id)
        refresh()
      })
      .finally(() => {
        saveLoading.value = false
      })
  }
</script>

<template>
  <Table
    :columns="columns"
    :data="data"
    data-id="id"
    :loading="loading">
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
          v-if="checkSaved(row.id)"
          variant="active"
          :class="$style.button"
          :loading="saveLoading"
          @click="saveRequest(row.id)"
          >Отправить</Button
        >

        <Button
          v-else
          :class="$style.button"
          @click="editHandler(row.id)"
          >Редактировать</Button
        >
      </Cell>
    </template>
  </Table>
</template>

<style lang="scss" module>
  .button {
    width: 115px;
  }
</style>
