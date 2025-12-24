<script setup lang="ts">
  import { Card, CardHeader } from '~/shared/ui'
  import { RequestTable } from '~/entities/request/ui'

  useHead({
    title: 'Заявки'
  })
</script>

<template>
  <Card
    tag="main"
    class="grow">
    <CardHeader title="Заявки" />

    <div :class="$style.table">
      <RequestTable />
    </div>
  </Card>
</template>

<style lang="scss" module>
  .table {
    margin-top: 24px;
    padding-inline: var(--padding-inline);
  }
</style>
