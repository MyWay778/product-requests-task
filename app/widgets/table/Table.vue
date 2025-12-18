<script setup lang="ts">
  import type { Column } from './types'

  const { columns } = defineProps<{
    columns: Column[]
  }>()
</script>

<template>
  <div :class="$style.table">
    <table>
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.title">
            {{ column.title }}
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<style lang="scss" module>
  .table {
    // table,
    // thead {
    //   display: block;
    // }

    // tr {
    //   display: flex;
    // }
    border: 1px solid var(--gray-3);
    border-radius: var(--border-radius);
    overflow: hidden;

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      tr {
        background-color: var(--bg-color);
        border-bottom: 1px solid var(--gray-4);
      }

      th {
        padding: 15px 20px;
        color: var(--gray-dark);
      }
    }
  }
</style>
