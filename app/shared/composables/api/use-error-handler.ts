export function useErrorHandler(error: MaybeRefOrGetter) {
  watchEffect(() => {
    if (!error.value) return
    alert('Ошибка: ' + error.value?.message)
  })
}
