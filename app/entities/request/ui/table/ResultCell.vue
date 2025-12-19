<script setup lang="ts">
  import { getResult } from '~/entities/request/model'

  const { value } = defineProps<{
    value: string
  }>()
</script>

<template>{{ getResult(value) }}</template>
