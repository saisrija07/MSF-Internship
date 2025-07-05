<template>
  <div class="flex space-x-2">
    <span
      v-for="n in 5"
      :key="n"
      class="transition-colors"
      :class="disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'"
    >
      <Star
        class="w-8 h-8"
        fill="currentColor"
        stroke="none"
        :class="n <= modelValue
          ? 'text-red-700 dark:text-yellow-400'
          : 'text-gray-500 dark:text-white'"
        @click="!disabled && $emit('update:modelValue', n)"
      />
    </span>
  </div>
</template>

<script setup>
import { Star } from 'lucide-vue-next';

defineProps({
  modelValue: Number,
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>
