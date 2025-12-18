<script setup lang="ts">
  import { Card } from '~/shared/ui'
  import { CollapseButton, SidebarItem } from '~/widgets/sidebar'

  const items = [
    {
      label: 'Заявки',
      icon: 'custom:goods-grid',
      url: '/'
    }
  ]

  const isCollapsed = ref(false)

  function clickHandler() {
    isCollapsed.value = !isCollapsed.value
  }
</script>

<template>
  <Card :class="[$style.sidebar, { [$style._collapsed]: isCollapsed }]">
    <div :class="$style.header">
      <CollapseButton
        :collapsed="isCollapsed"
        @click="clickHandler" />
    </div>

    <nav>
      <SidebarItem
        v-for="item in items"
        :key="item.label"
        v-bind="item"
        :collapsed="isCollapsed" />
    </nav>
  </Card>
</template>

<style lang="scss" module>
  .sidebar {
    --tr-duration: 0.3s;

    width: 280px;
    transition: width var(--tr-duration) var(--tr-fn);

    &._collapsed {
      width: 68px;

      .header {
        padding: 16px;
      }
    }
  }

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 16px 18px;
    transition: padding var(--tr-duration) var(--tr-fn);
  }
</style>
