<script setup lang="ts">
  import { getResult } from '~/entities/request/model'
  import { Cell } from '~/shared/ui'

  const { value } = defineProps<{
    value: string
  }>()
</script>

<template>
  <Cell>
    {{ getResult(value) }}
  </Cell>
</template>
