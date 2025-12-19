<script setup lang="ts">
  import type { Request } from '~/entities/request/types'

  const { item } = defineProps<{
    item: Request
  }>()
</script>

<template>
  <tr></tr>
</template>
