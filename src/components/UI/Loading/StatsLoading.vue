<template>
  <SingleCard class="grid grid-cols-1 place-items-center p-6 mt-6 cursor-default h-[242px] animate-pulse">
    <Loader class=" animate-spin w-10 h-10"/>
  </SingleCard>
</template>

<script setup>
import { Loader } from 'lucide-vue-next';
import SingleCard from '@/components/UI/SingleCard.vue';
</script>
