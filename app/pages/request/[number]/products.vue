<script setup lang="ts">
  import { Card, CardHeader, IconButton, Button } from '~/shared/ui'
  import { ProductTable } from '~/entities/product/ui'

  definePageMeta({
    title: 'Products Page',
    layout: 'without-sidebar'
  })
</script>

<template>
  <Card
    tag="main"
    class="grow">
    <CardHeader title="Товары">
      <template #prepend>
        <IconButton
          icon="custom:left-arrow"
          :icon-size="14" />
      </template>
    </CardHeader>

    <div
      class="container"
      :class="$style.panel">
      <Button
        :class="$style.saveButton"
        variant="active"
        disabled
        >Сохранить</Button
      >
    </div>

    <div
      class="container"
      :class="$style.table">
      <ProductTable />
    </div>
  </Card>
</template>

<style lang="scss" module>
  .panel {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
  }

  .saveButton {
    min-width: 140px;
  }

  .table {
    margin-top: 20px;
  }
</style>
