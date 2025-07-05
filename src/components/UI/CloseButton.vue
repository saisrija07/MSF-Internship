<template>
  <div class="flex items-end justify-end">
    <ButtonComp @click="$emit('close')" variant="red" class=" border !rounded-full !p-2">
      <X/>
    </ButtonComp>
  </div>
</template>

<script setup>
import ButtonComp from '@/components/UI/ButtonComp.vue';
import { defineEmits } from 'vue';
import { X } from 'lucide-vue-next';

defineEmits(['close'])
</script>
