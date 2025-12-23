function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b)
}

export function useFormDirty<T extends Record<string, unknown>>(form: MaybeRefOrGetter<T>) {
  const initialState = ref<T>(deepClone(toValue(form)))
  const dirty = ref(false)

  watch(
    form,
    newValue => {
      dirty.value = !deepEqual(deepClone(toRaw(newValue)), initialState.value)
    },
    { deep: true }
  )

  function reset() {
    Object.assign(form, deepClone(initialState.value))
    dirty.value = false
  }

  function commit() {
    initialState.value = deepClone(toRaw(form))
    dirty.value = false
  }

  return {
    isDirty: computed(() => dirty.value),
    reset,
    commit
  }
}
