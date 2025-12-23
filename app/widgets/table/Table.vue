<script setup lang="ts" generic="T extends object & {activeRow?: boolean}">
  import type { Column } from './types'
  import { Row, Cell, Loader } from '~/shared/ui'

  const {
    columns,
    data,
    dataId,
    loading,
    noDataMessage = 'Данные отсутствуют'
  } = defineProps<{
    columns: Column[]
    data: T[]
    dataId: keyof T
    loading?: boolean
    noDataMessage?: string
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
  <div :class="[$style.table, { [$style._loading]: loading }]">
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
          <Row :active="row.activeRow">
            <slot
              v-for="cell in columns"
              :key="cell.title"
              :name="'cell-' + cell.field"
              :cell="cell"
              :row="row"
              :value="getValue(row, cell.field)">
              <Cell>
                {{ getValue(row, cell.field) }}
              </Cell>
            </slot>
          </Row>
        </slot>

        <Row v-if="!data.length">
          <Cell
            :class="[$style.noDataCell, { [$style._hideMessage]: loading }]"
            :colspan="columns.length">
            <span>
              {{ noDataMessage }}
            </span>
          </Cell>
        </Row>
      </tbody>
    </table>

    <Loader
      v-if="loading"
      :class="$style.loader" />
  </div>
</template>

<style lang="scss" module>
  .table {
    --cell-color: var(--black-2);

    position: relative;
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

    &._loading {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--white);
        opacity: 0.5;
      }
    }

    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    .noDataCell {
      text-align: center;

      &._hideMessage span {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
</style>
