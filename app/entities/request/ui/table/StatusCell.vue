<script setup lang="ts">
  import { Chip } from '~/shared/ui'
  import { getStatus, getStatusColor } from '~/entities/request/model'
  import { Cell } from '~/shared/ui'

  const { value } = defineProps<{
    value: string
  }>()

  const color = computed(() => getStatusColor(value))
  const displayValue = computed(() => getStatus(value))
</script>

<template>
  <Cell>
    <Chip :color>{{ displayValue }}</Chip>
  </Cell>
</template>

<style lang="scss" module></style>
