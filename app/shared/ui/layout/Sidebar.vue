<script setup lang="ts">
  import { Card, CollapseButton } from '~/shared/ui'
</script>

<template>
  <Card :class="$style.sidebar">
    <div :class="$style.header">
      <CollapseButton />
    </div>
  </Card>
</template>

<style lang="scss" module>
  .sidebar {
    width: 280px;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 24px;
  }
</style>
