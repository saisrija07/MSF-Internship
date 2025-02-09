<template>
  <div class="flex justify-center items-center">
    <!-- Search Box Wrapper -->
    <div class="flex items-center border border-gray-500 rounded-xl p-2 bg-white w-full">
      <!-- Input Field -->
      <input
        type="text"
        placeholder="Ask Something..."
        class="flex-1 outline-none p-2 text-gray-700 text-xl"
      />
      <!-- Search Icon/Button -->
      <ButtonComp class="mr-2 border" @click="$emit('search')">
          <template #default>
            <slot name="symbol"></slot>
          </template>
      </ButtonComp>
    </div>
  </div>
</template>

<script setup>
import ButtonComp from '@/components/UI/ButtonComp.vue';

defineEmits(['search'])

</script>
