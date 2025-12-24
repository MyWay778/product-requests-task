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

  const { data, execute } = useProducts(requestId)

  const dataCopy = ref<(typeof data)['value']>([])
  const loading = ref(true)

  const initStorageKey = `products-init-${query.id}`
  const editStorageKey = `products-edit-${query.id}`
  const savedStorageKey = `products-saved-${query.id}`

  onMounted(() => {
    localStorage.removeItem(savedStorageKey)

    const initData = localStorage.getItem(initStorageKey)

    if (initData) {
      data.value = JSON.parse(initData)
      loading.value = false
    } else {
      loading.value = true
      execute().then(() => {
        localStorage.setItem(initStorageKey, JSON.stringify(data.value))
        loading.value = false
      })
    }
  })

  watch(data, data => {
    const editData = localStorage.getItem(editStorageKey)
    dataCopy.value = editData ? JSON.parse(editData) : structuredClone(data)
  })

  watch(
    dataCopy,
    data => {
      localStorage.setItem(editStorageKey, JSON.stringify(data))
    },
    { deep: true }
  )

  function deepEqual(a: unknown, b: unknown): boolean {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  const isEqual = computed(() => {
    return deepEqual(dataCopy.value, data.value)
  })

  const disableButton = computed(() => loading.value || isEqual.value)

  const tableRef = useTemplateRef<InstanceType<typeof ProductTable>>('table')

  async function saveHandler() {
    if (!tableRef.value) return

    if (!(await tableRef.value.validate())) {
      return
    }

    localStorage.setItem(savedStorageKey, JSON.stringify(dataCopy.value))
    localStorage.removeItem(initStorageKey)
    localStorage.removeItem(editStorageKey)

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
