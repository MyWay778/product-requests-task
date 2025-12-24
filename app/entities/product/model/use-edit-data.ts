import { useProducts } from '~/entities/product/api'
import { LocalStorageHelper } from '~/shared/utils/helpers'
import { storageKeys } from '~/entities/product/model'
import { deepEqual } from '~/shared/utils/object'

export function useEditData(requestId: number) {
  const { data, execute } = useProducts(requestId)

  const dataCopy = ref<(typeof data)['value']>([])
  const loading = ref(true)

  const initStorage = new LocalStorageHelper(storageKeys.init(String(requestId)))
  const editStorage = new LocalStorageHelper(storageKeys.edit(String(requestId)))
  const saveStorage = new LocalStorageHelper(storageKeys.saved(String(requestId)))

  onMounted(() => {
    saveStorage.clear()

    const initData = initStorage.get()

    if (initData) {
      data.value = initData
      loading.value = false
    } else {
      loading.value = true
      execute().then(() => {
        initStorage.set(data.value)
        loading.value = false
      })
    }
  })

  watch(data, data => {
    const editData = editStorage.get()
    dataCopy.value = editData ? editData : structuredClone(data)
  })

  watch(
    dataCopy,
    data => {
      editStorage.set(data)
    },
    { deep: true }
  )

  const isEqual = computed(() => {
    return deepEqual(dataCopy.value, data.value)
  })

  function saveData() {
    saveStorage.set(dataCopy.value)
    initStorage.clear()
    editStorage.clear()
  }

  return {
    loading,
    data: dataCopy,
    isEqual,
    saveData
  }
}
