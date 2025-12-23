<script setup lang="ts">
  import { Card, CardHeader, IconButton, Button } from '~/shared/ui'
  import { ProductTable } from '~/entities/product/ui'
  import { useProducts } from '~/entities/product/api'

  definePageMeta({
    title: 'Products Page',
    layout: 'without-sidebar'
  })

  const { query } = useRoute()
  if (!query.id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: id query param is required'
    })
  }

  const requestId = Number(query.id)
  if (isNaN(requestId)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: id query param must be a number'
    })
  }

  const router = useRouter()

  function backHandler() {
    router.replace('/')
  }

  const { data, pending } = useProducts(requestId)

  const dataCopy = ref<(typeof data)['value']>([])
  const loading = ref(true)

  onMounted(() => {
    watchEffect(() => {
      if (data.value && !pending.value) {
        dataCopy.value = structuredClone(data.value)
        loading.value = false
      }
    })
  })

  function deepEqual(a: unknown, b: unknown): boolean {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  const isEqual = computed(() => {
    return deepEqual(dataCopy.value, data.value)
  })

  const disableButton = computed(() => !loading.value && isEqual.value)
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
        >Сохранить</Button
      >
    </div>

    <div
      class="container"
      :class="$style.table">
      <ProductTable
        :data="dataCopy"
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
