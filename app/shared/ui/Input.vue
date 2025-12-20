<script setup lang="ts">
  const model = defineModel<string | number>()

  const attrs = useAttrs()

  const inputAttrs = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, placeholder, ..._rest } = attrs
    return {
      type: type as string | undefined,
      placeholder: placeholder as string | undefined
    }
  })
</script>

<template>
  <div v-bind="attrs">
    <input
      v-bind="inputAttrs"
      v-model="model"
      :class="[$style.input, { [$style._error]: false }]" />
  </div>
</template>

<style lang="scss" module>
  .input {
    padding: 7px 12px;
    border: 1px solid var(--input-border-color);
    border-radius: var(--input-radius);
    font-size: 14px;
    line-height: 20px;

    &:focus-visible {
      outline: 1px solid var(--black-2);
    }

    &::placeholder {
      transition: color var(--tr-duration) var(--tr-fn);
      color: var(--input-placeholder-color);
    }

    &:hover::placeholder {
      color: inherit;
    }

    &._error {
      border-color: red;
    }
  }
</style>
