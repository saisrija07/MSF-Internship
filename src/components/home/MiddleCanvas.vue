<template>
  <div class="flex flex-col w-full h-screen p-4" >
    <LogoComp class="mx-auto my-auto w-32 h-32 mt-2"/>
      <h1 class="mt-4">
        Welcome To QUICK DELIVER LITE
      </h1>

      <div class="h-auto mt-6">
        <SearchBox class="mt-5 w-full">
          <template #symbol>
            <Search/>
          </template>
        </SearchBox>
      </div>
      <div class="flex mt-8 flex-grow w-full">
        <LowerCanvas/>
      </div>
  </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next';
import LowerCanvas from '@/components/home/LowerCanvas.vue';
import SearchBox from '@/components/UI/SearchBox.vue';
import LogoComp from '../UI/LogoComp.vue';
</script>
