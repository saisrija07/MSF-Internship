<template>
  <div class="flex space-x-2">
    <span
      v-for="n in 5"
      :key="n"
      @click="$emit('update:modelValue', n)"
      class="cursor-pointer transition-colors"
    >
      <Star
        class="w-8 h-8"
        fill="currentColor"
        stroke="none"
        :class="n <= modelValue
          ? 'text-red-700 dark:text-yellow-400'
          : 'text-gray-500 dark:text-white'"
      />
    </span>
  </div>
</template>

<script setup>
import { Star } from 'lucide-vue-next';

defineProps({
  modelValue: Number,
});
</script>
