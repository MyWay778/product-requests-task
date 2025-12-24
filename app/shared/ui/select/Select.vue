<script setup lang="ts">
  import { useFloating, offset, flip, shift, size, autoUpdate } from '@floating-ui/vue'
  import { onClickOutside } from '@vueuse/core'
  import type { Option } from './types'

  const model = defineModel<string | null>()

  const { options, placeholder = 'Выберите значение' } = defineProps<{
    options: Option[]
    placeholder?: string
    error?: string
  }>()

  const selectedOption = computed(() => {
    return options.find(option => option.value === model.value) ?? null
  })
  const open = ref(false)
  const triggerRef = useTemplateRef('trigger')
  const optionsRef = useTemplateRef('options')

  const { x, y, strategy } = useFloating(triggerRef, optionsRef, {
    placement: 'bottom-start',
    middleware: [
      offset(6), // space between button and list
      flip(), // flip to top if no space
      shift(), // keep inside viewport
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`
          })
        }
      })
    ],
    whileElementsMounted: autoUpdate
  })

  const floatingStyles = computed(() => ({
    position: strategy.value,
    top: `${y.value ?? 0}px`,
    left: `${x.value ?? 0}px`
  }))

  onClickOutside(optionsRef, () => {
    open.value = false
  })

  function toggle() {
    open.value = !open.value
    nextTick(() => {
      triggerRef.value?.focus()
    })
  }

  function select(value: string) {
    if (model.value === value) {
      model.value = null
      return
    }
    model.value = value
    open.value = false
  }
</script>

<template>
  <div
    :class="[$style.select, { [$style._error]: error }]"
    role="combobox"
    aria-expanded="false">
    <button
      ref="trigger"
      class="button flex-between-center focus-outline"
      :class="[$style.trigger, { [$style._placeholder]: !model }]"
      type="button"
      @click="toggle">
      <span>{{ selectedOption?.label ?? placeholder }}</span>
      <Icon
        name="custom:chevron-down"
        :class="[$style.icon, { [$style._opened]: open }]"
        :size="6" />
    </button>

    <Teleport to="body">
      <Transition name="dropdown">
        <ul
          v-if="open"
          ref="options"
          :class="$style.options"
          :style="floatingStyles"
          role="listbox">
          <li
            v-for="option in options"
            class="flex-between-center tr-background"
            :class="[$style.option, { [$style._active]: option.value === selectedOption?.value }]"
            role="option"
            @click="select(option.value)">
            <span>
              {{ option.label }}
            </span>
            <Icon
              v-show="option.value === selectedOption?.value"
              name="custom:check"
              size="8" />
          </li>
        </ul>
      </Transition>
    </Teleport>
  </div>
</template>

<style lang="scss" module>
  .select {
    color: var(--text-primary);

    &._error {
      .trigger {
        border-color: var(--red);
      }
    }
  }

  .trigger {
    border: 1px solid var(--input-border-color);
    border-radius: var(--input-radius);
    width: 100%;
    background: none;
    padding: 7px 12px;
    font-size: 14px;
    line-height: 20px;

    &._placeholder {
      color: var(--gray-dark);
    }
  }

  .icon {
    color: var(--gray);
    transition: transform var(--tr-duration) var(--tr-fn);

    &._opened {
      transform: rotateX(180deg);
    }
  }

  .options {
    background-color: var(--card-bg-color);
    padding: 8px;
    border-radius: 12px;
    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
    z-index: 100;
  }

  .option {
    padding: 8px 12px;
    border-radius: var(--button-radius);
    cursor: pointer;

    &:hover {
      background-color: var(--button-hover-bg-color-2);
    }

    &._active {
      color: var(--active-color);
    }
  }
</style>
