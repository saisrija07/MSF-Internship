<template>
  <div class="w-full">
    <div  class="flex-1 p-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div v-if="selectedQuestion">
          <h1 class="text-3xl font-bold mb-2">
          {{ selectedQuestion.title }}
        </h1>
        <p class="text-gray-700 mb-8 text-center text-lg">
          {{ selectedQuestion['detailed description'] }}
        </p>

        <MultiCanvas>
          <template #heading> Examples </template>
          <template #content>
            <MultiCard v-for="example in selectedQuestion.examples" :key="example.id" class="mb-2 p-4">
              <template #default>
                <span class="font-semibold">Input: </span>{{ example.input }} <br />
                <span class="font-semibold">Output: </span>{{ example.output }}<br />
                <div v-if="example.explanation">
                  <span class="font-semibold">Explanation: </span>{{ example.explanation }}
                </div>
              </template>
            </MultiCard>
          </template>
        </MultiCanvas>

        <!-- Buttons -->
        <slot name="buttons" v-if="$slots.buttons"></slot>
        </div>
        <div v-else class="flex h-96 justify-center items-center">
          <div v-if="isLoading" class="animate-spin">
            <Loader class="w-8 h-8"/>
          </div>
          <h2 v-else>
            Select a Question
          </h2>
        </div>

        </div>
    </div>
  </div>
</template>

<script setup>
import MultiCanvas from '@/components/UI/MultiCanvas.vue'
import MultiCard from '@/components/UI/MultiCard.vue'
import { Loader } from 'lucide-vue-next';
import { useQuestionsStore } from '@/stores/questionsStore';
import { storeToRefs } from 'pinia';

const questionsStore = useQuestionsStore();
const { selectedQuestion,isLoading } = storeToRefs(questionsStore)


const db = {
  questions: [
    {
      id: 1,
      title: 'Two Sum',
      description: 'Find two numbers that sum to target',
      'detailed description':
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
      constraints: 'None',
      author: 'SHRI',
      examples: [
        {
          id: 1,
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: '2 + 7 sum to 9',
        },
        {
          id: 2,
          input: 'nums = [2,7,2,15], target = 4',
          output: '[0,2]',
        },
      ],
    },
    {
      id: 2,
      title: 'Arithmetic Progression',
      description: 'Find Next Term in AP',
      'detailed description':
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
      constraints: 'None',
      author: 'SHRI',
      examples: [
        {
          id: 1,
          input: 'nums = [2,4,6,8]',
          output: '10',
        },
        {
          id: 2,
          input: 'nums = [1,2,3,4]',
          output: '5',
        },
      ],
    },
  ],
}
</script>
