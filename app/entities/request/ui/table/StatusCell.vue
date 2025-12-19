<script setup lang="ts">
  import { Chip } from '~/shared/ui'
  import { getStatus, getStatusColor } from '~/entities/request/model'

  const { value } = defineProps<{
    value: string
  }>()

  const color = computed(() => getStatusColor(value))
  const displayValue = computed(() => getStatus(value))
</script>

<template>
  <Chip :color>{{ displayValue }}</Chip>
</template>

<style lang="scss" module></style>
