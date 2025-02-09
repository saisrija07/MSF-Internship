<script setup>
import { useQuestionsStore } from "@/stores/questionsStore";
import { storeToRefs } from 'pinia';
import { computed  } from "vue";

const questionStore = useQuestionsStore();
const { isLoading, questions } = storeToRefs(questionStore);

questionStore.fetchQuestions();

const q = computed(() => isLoading.value)


console.log(questions.value)
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <ul>
      <li v-for="question in questions" :key="question.id">{{ question.title }}</li>
    </ul>
  </div>
  {{ q }}
</template>
