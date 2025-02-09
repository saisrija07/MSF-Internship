<template>
  <div class="flex flex-col w-full h-screen p-4" >
      <h1 class="mt-12">
        Welcome
      </h1>
      <div class="h-auto mt-24">
        <h3 class="text-center text-2xl ">Search Something</h3>
        <SearchBox class="mt-5 w-full">
          <template #symbol>
            <Search/>
          </template>
        </SearchBox>
      </div>
      <div class="flex mt-8 flex-grow">
        <LowerCanvas/>
      </div>
  </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next';
import LowerCanvas from '@/components/home/LowerCanvas.vue';
import SearchBox from '@/components/UI/SearchBox.vue';
</script>
