<script setup lang="ts">
  const { size = 'm', color = 'primary' } = defineProps<{
    size?: 's' | 'm'
    color?: 'primary' | 'secondary'
  }>()
</script>

<template>
  <div>
    <svg
      :class="[$style.loader, `${$style[`_size-${size}`]}`, `${$style[`_color-${color}`]}`]"
      viewBox="25 25 50 50">
      <circle
        :class="$style.circle"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke-width="2"
        stroke-miterlimit="10"></circle>
    </svg>
  </div>
</template>

<style lang="scss" module>
  .loader {
    animation: global(rotating) 2s linear infinite;
    transform-origin: center center;
    width: 50px;
    height: 50px;

    &._size-s {
      width: 22px;
      height: 22px;
    }

    &._size-m {
      width: 50px;
      height: 50px;
    }

    &._color-primary {
      .circle {
        stroke: var(--active-color);
      }
    }

    &._color-secondary {
      .circle {
        stroke: var(--white);
      }
    }
  }

  .circle {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: global(dash) 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }
</style>
