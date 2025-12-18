<script setup lang="ts">
  const { label, url, icon, collapsed } = defineProps<{
    label: string
    url: string
    icon?: string
    collapsed?: boolean
  }>()
</script>

<template>
  <NuxtLink
    class="tr-color-bg"
    :class="[$style.item, { [$style._collapsed]: collapsed }]"
    :to="url">
    <div :class="$style.inner">
      <div
        class="flex-align-center tr-background"
        :class="$style.container">
        <div
          class="flex-center"
          :class="$style.icon"
          :title="label">
          <Icon
            v-if="icon"
            :name="icon" />
        </div>
        <div
          class="tr-color"
          :class="$style.label">
          {{ label }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" module>
  .item {
    --collapse-duration: 0.3s;
    --icon-size: 16px;
    --collapsed-icon-size: 13px;

    // hover state
    &:hover:not(:global(.router-link-active)) {
      .container {
        background-color: var(--button-hover-bg-color-2);
      }

      .label {
        color: var(--active-color);
      }
    }

    // active state
    &:global(.router-link-active) {
      cursor: default;

      .inner {
        border-left-color: var(--active-color);
      }

      .label {
        color: var(--active-color);
      }
    }

    // collapsed state
    &._collapsed {
      &:global(.router-link-active) {
        .container {
          background-color: var(--active-bg);
        }
      }

      .inner {
        padding: 4px 15px;
      }

      .container {
        padding: 6px;
      }

      .icon {
        & > span {
          font-size: var(--collapsed-icon-size);
        }
      }

      .label {
        display: none;
        opacity: 0;
      }
    }
  }

  .inner {
    padding: 4px 6px;
    border-left: 2px solid transparent;
    transition: padding var(--collapse-duration) var(--tr-fn), border-left-color var(--tr-duration) var(--tr-fn);
  }

  .container {
    gap: 12px;
    border-radius: 8px;
    padding: 6px 6px 6px 10px;
    transition: padding var(--collapse-duration) var(--tr-fn);
  }

  .icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    color: var(--active-color);

    & > span {
      font-size: var(--icon-size);
      transition: font-size var(--collapse-duration) var(--tr-fn);
    }
  }

  .label {
    transition: opacity var(--collapse-duration) var(--tr-fn),
      display var(--collapse-duration) var(--tr-fn) allow-discrete;
  }
</style>
