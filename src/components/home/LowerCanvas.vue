<template>
  <MultiCard class="w-full p-6 bg-white rounded-lg shadow-md mx-auto">
    <h2 class="mb-5">
      Our Delivery in Motion
    </h2>

    <div class="grid grid-cols-2 grid-rows-4 gap-4">
      <div class="row-span-4 rounded-xl shadow h-[410px]">
        <img
          :src="role === 'customer' ? '/src/assets/static/C_1.png' : '/src/assets/static/D_1.png'"
          alt="App Screenshot 1"
          class="w-full h-full"
        />
      </div>

      <div class="col-start-2 row-span-2 rounded-lg shadow h-[200px]">
        <img
          :src="role === 'customer' ? '/src/assets/static/C_2.png' : '/src/assets/static/D_2.png'"
          alt="App Screenshot 2"
          class="w-full h-full"
        />
      </div>

      <div class="col-start-2 row-span-2 row-start-3 rounded-lg shadow h-[200px]">
        <img
          src="/src/assets/static/img_1.png"
          alt="AI Delivery 1"
          class="w-full h-full"
        />
      </div>

      <div class="col-span-2 row-start-5 rounded-lg shadow h-[300px]">
        <img
          src="/src/assets/static/img_2.png"
          alt="AI Delivery 2"
          class="w-full h-full"
        />
      </div>
    </div>
  </MultiCard>
</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
const role = localStorage.getItem('role');

</script>
