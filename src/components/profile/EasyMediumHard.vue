<template>
  <div class="grid grid-cols-1 gap-3 w-1/4 h-full p-2">
              <SingleCard class="grid place-content-center">
                <div class=" text-blue-600 font-bold text-lg">Easy</div>
                <div class="text-md font-semibold">33/100</div>
              </SingleCard>
              <SingleCard class="grid place-content-center">
                <div class=" text-blue-800 font-bold text-lg">Medium</div>
                <div class="text-md font-semibold">32/140</div>
              </SingleCard>
              <SingleCard class="grid place-content-center">
                <div class=" text-red-800 font-bold text-lg">Hard</div>
                <div class="text-md font-semibold">13/200</div>
              </SingleCard>
            </div>
</template>

<script setup>
import SingleCard from '@/components/UI/SingleCard.vue';
</script>
