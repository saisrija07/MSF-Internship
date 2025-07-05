<template>
  <div class=" animate-pulse">
    <div class="flex mb-4 mt-4">
        <h2 class=" flex justify-start">Rating:</h2>
        <span><StarRating class="mt-1 ml-3"/></span>
      </div>

      <div class="mb-4">
        <h2 class=" flex justify-start mb-1">Feedback:</h2>
        <textarea rows="3" class="w-full px-3 py-2 border rounded-lg dark:text-black"></textarea>
      </div>

      <div class="flex items-center justify-center">
        <ButtonLoading v-if="!isAgent"
        class="mt-4 ml-6 px-4 py-2"
        >

        </ButtonLoading>
      </div>
    </div>
</template>

<script setup>
import StarRating from '@/components/UI/StarRating.vue';
import ButtonLoading from '@/components/UI/Loading/ButtonLoading.vue';

const isAgent = localStorage.getItem('role') === 'agent';

</script>
