<template>
  <button :class="['p-2 pl-6 pr-6 text-white rounded-md font-semibold text-xl',
    variants[variant] ?? 'default'
  ]"
  @click="$emit('click')">
    <slot class="w-full h-full flex items-center justify-center"></slot>
  </button>
</template>

<script setup>

const variants = {
  'default':'bg-blue-900 hover:bg-blue-700',
  'green':'bg-green-500 hover:bg-green-400',
  'blue':'bg-blue-500 hover:bg-blue-400',
  'orange':'bg-orange-500 hover:bg-orange-400'
}

defineProps({
  variant:{
    type:String,
    default:'default'
  }
})

defineEmits(['click'])

</script>
