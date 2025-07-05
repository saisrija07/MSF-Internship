<template>
  <button
    :class="[
      'p-2 pl-6 pr-6 text-white rounded-md font-semibold text-2xl',
      variants[variant] ?? variants.default,
      { 'opacity-50 cursor-not-allowed': isDisabled }
    ]"
    @click="$emit('click')"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

<script setup>

import { computed } from 'vue'

const variants = {
  default: 'bg-blue-900 hover:bg-blue-700',
  green: 'bg-green-900 hover:bg-green-700',
  blue: 'bg-blue-500 hover:bg-blue-400',
  orange: 'bg-orange-500 hover:bg-orange-400',
  red: 'bg-red-900 hover:bg-red-700',
  disabled: 'bg-gray-400'
}

const props = defineProps({
  variant: {
    type: String,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const isDisabled = computed(() => props.disabled || props.variant === 'disabled')

defineEmits(['click'])
</script>
