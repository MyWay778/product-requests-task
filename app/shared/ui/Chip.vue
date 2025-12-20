<script setup lang="ts">
  const { color = 'gray' } = defineProps<{
    color?: 'green' | 'yellow' | 'red' | 'gray'
  }>()

  const colorCssVariable = computed(() => `--${color}-text`)
  const bgColorCssVariable = computed(() => `--${color}-bg`)
</script>

<template>
  <div
    :class="$style.chip"
    :style="{ color: `var(${colorCssVariable})`, backgroundColor: `var(${bgColorCssVariable})` }">
    <slot />
  </div>
</template>

<style lang="scss" module>
  .chip {
    --green-text: var(--green);
    --green-bg: var(--green-light);

    --yellow-text: var(--yellow-dark);
    --yellow-bg: var(--yellow-light);

    --red-text: var(--red-dark);
    --red-bg: var(--red-light);

    --gray-text: var(--gray-dark);
    --gray-bg: var(--gray-light);

    width: fit-content;
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>
