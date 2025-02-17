<template>
  <div class="w-full">
    <div  class="flex-1 p-6">
      <div class="p-6 rounded-lg shadow-md bg-white dark:bg-black">
        <div v-if="selectedQuestion">
          <h1 class="text-3xl font-bold mb-2">
          {{ selectedQuestion.title }}
        </h1>
        <p class="mb-8 text-center text-lg text-gray-700 dark:text-gray-200">
          {{ selectedQuestion.description }}
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
        <br>
        <br>
        <MultiCanvas>
          <template #heading> Constraints </template>
          <template #content>
            <MultiCard v-for="(constraint) in selectedQuestion.constraints" :key="constraint.id" class="mb-2 p-4 tetx-lg">
              <template #default>
                <span class="font-semibold text-xl">({{ constraint.id }}) </span>{{ constraint.description }}
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

</script>
