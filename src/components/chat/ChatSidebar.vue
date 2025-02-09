<template>
  <MultiCard class="flex flex-col w-1/3 border-r border-gray-300 gap-8 p-4 h-screen pb-20">
      <div class="h-1/10">
        <h2>AI Chat</h2>
      </div>
      <ButtonComp variant="green">
        + New Chat
      </ButtonComp>
      <div class="overflow-y-auto">
        <SingleCard class="grid gap-4 p-4">
          <ButtonComp v-for="chat in chats" :key="chat.id" class="w-full" variant="blue">
            {{ chat.title }}
          </ButtonComp>
        </SingleCard>
      </div>
      <div class="flex mt-auto w-full p-8 text-xl font-semibold">
        <ButtonComp class="flex gap-4 w-full p-4 justify-center place-items-center" variant="orange">
        <Settings/> Settings
      </ButtonComp>
      </div>
    </MultiCard>
</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';
import SingleCard from '@/components/UI/SingleCard.vue';
import { Settings } from 'lucide-vue-next';


const chats = [
  {
    id:1,
    title:'Chat 1'
  },
  {
    id:2,
    title:'Chat 2'
  },
 {
    id:3,
    title:'Chat 3'
  },
  {
    id:4,
    title:'Chat 4'
  },
  {
    id:5,
    title:'Chat 5'
  },
  {
    id:6,
    title:'Chat 6'
  },
  {
    id:7,
    title:'Chat 7'
  },
  {
    id:8,
    title:'Chat 8'
  },
  {
    id:9,
    title:'Chat 9'
  },
  {
    id:10,
    title:'Chat 10'
  }
]

</script>
