<template>
      <SingleCard v-for="i in 10" :key="i" class="flex justify-center p-4 text-lg font-semibold">
        <Loader class="animate-spin" />
      </SingleCard>
</template>

<script setup>
import { Loader } from 'lucide-vue-next';
import SingleCard from '@/components/UI/SingleCard.vue';
</script>
