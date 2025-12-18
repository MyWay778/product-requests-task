<script setup lang="ts">
  import { Card, CardHeader } from '~/shared/ui'
  import { Table, type Column } from '~/widgets'

  const columns: Column[] = [
    { title: 'Номер' },
    { title: 'Статус' },
    { title: 'Результат' },
    { title: 'Дата' },
    { title: 'Действие' }
  ]
</script>

<template>
  <Card
    tag="main"
    class="grow">
    <CardHeader title="Заявки" />

    <div :class="$style.table">
      <Table :columns="columns" />
    </div>
  </Card>
</template>

<style lang="scss" module>
  .table {
    margin-top: 24px;
    padding-inline: var(--padding-inline);
  }
</style>
