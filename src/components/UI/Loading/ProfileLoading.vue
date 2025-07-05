<template>
  <MultiCard class="p-10 max-w-xl mx-auto mt-10 shadow-xl text-xl animate-pulse">
    <div class="flex flex-col items-center">
      <div class="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center text-white text-5xl font-bold">
        - - -
      </div>
      <h2 class="mt-4 text-3xl font-bold"> - - - -</h2>
      <p class="text-gray-500 text-lg"> - - - -</p>
    </div>

    <div class="mt-8 grid gap-4 text-2xl">
      <div class="flex items-center gap-2">
        <p><strong>User ID:</strong> - - - -</p>
        <button
          class="flex items-center text-blue-900 dark:text-blue-200"
        >

        </button>
      </div>
      <p><strong>Gender:</strong> - - - -</p>
      <p><strong>Phone No:</strong> - - - - </p>
      <p><strong>Age:</strong> - - - -</p>
    </div>
    <div class="flex items-center justify-center mt-12">
      <ButtonComp class="rounded-full h-[48px] w-[130px]">

      </ButtonComp>
    </div>
  </MultiCard>
</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';
</script>
