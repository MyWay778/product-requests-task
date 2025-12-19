<script setup lang="ts" generic="T extends object">
  import type { Column } from './types'

  const { columns, data, dataId } = defineProps<{
    columns: Column[]
    data: T[]
    dataId: keyof T
  }>()

  function hasKey<T extends object>(obj: T, key: PropertyKey): key is keyof T {
    return key in obj
  }

  function getValue<T extends object, K extends PropertyKey>(obj: T, key: K) {
    if (hasKey(obj, key)) {
      return obj[key]
    }
    return undefined
  }
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

      <tbody>
        <slot
          v-for="row in data"
          :key="row[dataId]"
          name="row"
          :row="row">
          <tr>
            <slot
              v-for="cell in columns"
              :key="cell.title"
              :name="'cell-' + cell.field"
              :cell="cell">
              <td :class="$style.cell">{{ getValue(row, cell.field) }}</td>
            </slot>
          </tr>
        </slot>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" module>
  .table {
    --cell-color: var(--black-2);

    border: 1px solid var(--gray-3);
    border-radius: var(--border-radius);
    overflow: hidden;

    & > table {
      width: 100%;
      border-collapse: collapse;

      & > thead > tr {
        background-color: var(--bg-color);
        border-bottom: 1px solid var(--gray-4);

        & > th {
          padding: 15px 20px;
          color: var(--gray-dark);
          text-align: start;
        }
      }
    }
  }

  .cell {
    color: var(--cell-color);
    padding: 20px;
  }
</style>
