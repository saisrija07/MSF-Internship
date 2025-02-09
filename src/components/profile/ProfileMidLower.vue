<template>
  <div class="flex items-center overflow-y-auto">
      <div class="flex-1 text-center sticky">
        <h2 class="mb-5">Previous Submissions</h2>
      </div>
      <a class="ml-auto text-lg font-semibold underline">View All Submissions ></a>
  </div>
  <div class="overflow-y-auto h-72">
    <SingleCard v-for="(q) in prev" :key="q.id" class="flex mb-3 p-4 text-lg font-semibold">
    <span class="mr-auto">{{ q.question }}</span>
    <span class="ml-auto">{{ q.time }} minutes ago</span>
  </SingleCard>
  </div>

</template>

<script setup>
import SingleCard from '@/components/UI/SingleCard.vue';

const prev = [
  {
    id:1,
    question: "Two Sum",
    time: 19
  },
  {
    id:2,
    question: "Arithmetic Progression",
    time: 45
  },
  {
    id:3,
    question: "Three Sum",
    time: 59
  },
  {
    id:4,
    question: "Two Sum 2",
    time: 19
  },
  {
    id:5,
    question: "Arithmetic Progression 2",
    time: 45
  },
  {
    id:6,
    question: "Three Sum",
    time: 59
  },
  {
    id:7,
    question: "Three Sum",
    time: 59
  },
  {
    id:8,
    question: "Three Sum",
    time: 59
  },
  {
    id:9,
    question: "Three Sum",
    time: 59
  }
]

</script>
