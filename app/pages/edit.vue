<script setup lang="ts">
  import { Card, CardHeader, IconButton, Button } from '~/shared/ui'
  import { ProductTable } from '~/entities/product/ui'
  import { useEditData } from '~/entities/product/model'

  definePageMeta({
    layout: 'without-sidebar'
  })

  useHead({
    title: 'Редактирование заявки'
  })

  const router = useRouter()
  const { query } = useRoute()
  const requestId = validateRequestId(query.id)

  function validateRequestId(id: unknown) {
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request: id query param is required'
      })
    }

    const idNumber = Number(id)
    if (isNaN(idNumber)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request: id query param must be a number'
      })
    }

    return idNumber
  }

  function backHandler() {
    router.replace('/')
  }

  const { data, isEqual, loading, saveData } = useEditData(requestId)

  const disableButton = computed(() => loading.value || isEqual.value)

  const tableRef = useTemplateRef<InstanceType<typeof ProductTable>>('table')

  async function saveHandler() {
    if (!tableRef.value) return

    if (!(await tableRef.value.validate())) {
      return
    }

    saveData()
    router.replace('/')
  }
</script>

<template>
  <Card
    tag="main"
    class="grow">
    <CardHeader title="Товары">
      <template #prepend>
        <IconButton
          icon="custom:left-arrow"
          :icon-size="14"
          @click="backHandler" />
      </template>
    </CardHeader>

    <div
      class="container"
      :class="$style.panel">
      <Button
        :class="$style.saveButton"
        variant="active"
        :disabled="disableButton"
        @click="saveHandler"
        >Сохранить</Button
      >
    </div>

    <div
      class="container"
      :class="$style.table">
      <ProductTable
        ref="table"
        :data="data"
        :loading="loading" />
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
