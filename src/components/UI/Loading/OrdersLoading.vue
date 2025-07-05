<template>
  <SingleCard class="flex items-center justify-center p-4 w-[325px] h-[168px] text-xl animate-pulse">
    <Loader class="w-[30px] h-[30px] animate-spin"/>
  </SingleCard>
</template>

<script setup>
import SingleCard from '@/components/UI/SingleCard.vue';
import { Loader } from 'lucide-vue-next';

</script>
