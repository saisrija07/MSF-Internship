<template>
  <MultiCanvas>
              <template #heading> Test Cases </template>
              <template #content>
                <MultiCard v-for="test_case in selectedQuestion.test_cases" :key="test_case.id" class="p-4 mb-4">
                  <template #default>
                    <span class="font-semibold">Input: </span>{{ test_case.input }} <br />
                    <span class="font-semibold">Actual Output: </span>{{ test_case.exp_output }}<br />
                    <span class="font-semibold">Your Output: </span>{{ "SOME OUTPUT" }}<br />
                  </template>
                </MultiCard>
              </template>
            </MultiCanvas>
</template>

<script setup>
import MultiCanvas from '@/components/UI/MultiCanvas.vue';
import MultiCard from '@/components/UI/MultiCard.vue';
import { useQuestionsStore } from '@/stores/questionsStore';
import { storeToRefs } from 'pinia';

const questionsStore = useQuestionsStore();
const { selectedQuestion } = storeToRefs(questionsStore)
</script>
